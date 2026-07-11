import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { allNotabilityPdfPaths, artifactFileName } from '../../../lib/lesson-sources';

type PdfRouteProps = {
  artifactPath: string;
  fileName: string;
};

export const getStaticPaths: GetStaticPaths = () =>
  allNotabilityPdfPaths().map((artifactPath) => ({
    params: { file: artifactFileName(artifactPath) },
    props: {
      artifactPath,
      fileName: artifactFileName(artifactPath),
    } satisfies PdfRouteProps,
  }));

export const GET: APIRoute = async ({ props }) => {
  const { artifactPath, fileName } = props as PdfRouteProps;
  const pdf = await readFile(path.join(process.cwd(), artifactPath));
  const body = pdf.buffer.slice(pdf.byteOffset, pdf.byteOffset + pdf.byteLength);

  return new Response(body, {
    headers: {
      'Content-Disposition': `inline; filename="${fileName}"`,
      'Content-Type': 'application/pdf',
    },
  });
};
