import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { allExerciseImagePaths, artifactFileName } from '../../../lib/lesson-sources';

type ImageRouteProps = {
  artifactPath: string;
  fileName: string;
};

export const getStaticPaths: GetStaticPaths = () =>
  allExerciseImagePaths().map((artifactPath) => ({
    params: {
      file: artifactFileName(artifactPath),
      lesson: path.basename(path.dirname(artifactPath)),
    },
    props: {
      artifactPath,
      fileName: artifactFileName(artifactPath),
    } satisfies ImageRouteProps,
  }));

export const GET: APIRoute = async ({ props }) => {
  const { artifactPath, fileName } = props as ImageRouteProps;
  const image = await readFile(path.join(process.cwd(), artifactPath));
  const body = image.buffer.slice(image.byteOffset, image.byteOffset + image.byteLength);

  return new Response(body, {
    headers: {
      'Content-Disposition': `inline; filename="${fileName}"`,
      'Content-Type': 'image/jpeg',
    },
  });
};
