#!/usr/bin/env bash
set -euo pipefail

mkdir -p artifacts/notability-pdfs

move_pdf() {
  local src="$1"
  local dest="$2"

  if [[ -f "$src" ]]; then
    echo "Moving: $src -> $dest"
    git mv "$src" "$dest"
  else
    echo "Skipping missing file: $src"
  fi
}

move_pdf "exercises/Lesson 2 exercise.pdf" "artifacts/notability-pdfs/lesson-002-matrices-as-linear-transformations.pdf"
move_pdf "exercises/Lesson 3.pdf" "artifacts/notability-pdfs/lesson-003-matrix-multiplication-and-composition.pdf"
move_pdf "exercises/Lesson 4.pdf" "artifacts/notability-pdfs/lesson-004-determinant.pdf"
move_pdf "exercises/Lesson 5.pdf" "artifacts/notability-pdfs/lesson-005-inverse-matrices.pdf"
move_pdf "exercises/Lesson 6.pdf" "artifacts/notability-pdfs/lesson-006-eigenvectors-and-eigenvalues.pdf"
move_pdf "exercises/Lesson 7.pdf" "artifacts/notability-pdfs/lesson-007-change-of-basis.pdf"
move_pdf "exercises/Lesson 8.pdf" "artifacts/notability-pdfs/lesson-008-projection.pdf"
move_pdf "exercises/Lesson 9.pdf" "artifacts/notability-pdfs/lesson-009-least-squares.pdf"
move_pdf "exercises/Lesson 10.pdf" "artifacts/notability-pdfs/lesson-010-singular-value-decomposition.pdf"
move_pdf "exercises/Lesson 11.pdf" "artifacts/notability-pdfs/lesson-011-principal-component-analysis.pdf"
move_pdf "exercises/Lessen 12.pdf" "artifacts/notability-pdfs/lesson-012-covariance.pdf"
move_pdf "exercises/Lesson 13.pdf" "artifacts/notability-pdfs/lesson-013-probability-as-linear-algebra.pdf"
move_pdf "exercises/Lesson 14.pdf" "artifacts/notability-pdfs/lesson-014-covariance-geometry.pdf"
move_pdf "exercises/Lesson 14 practice.pdf" "artifacts/notability-pdfs/lesson-014-covariance-geometry-practice-1.pdf"
move_pdf "exercises/Lesson 14 practice 2.pdf" "artifacts/notability-pdfs/lesson-014-covariance-geometry-practice-2.pdf"
move_pdf "exercises/Lesson 15.pdf" "artifacts/notability-pdfs/lesson-015-multivariate-gaussian.pdf"
move_pdf "exercises/Lesson 16.pdf" "artifacts/notability-pdfs/lesson-016-maximum-likelihood-estimation.pdf"
move_pdf "exercises/Lesson 17 .pdf" "artifacts/notability-pdfs/lesson-017-loss-functions.pdf"
move_pdf "exercises/Lesson 18.pdf" "artifacts/notability-pdfs/lesson-018-map-estimation.pdf"
move_pdf "exercises/Lesson 19.pdf" "artifacts/notability-pdfs/lesson-019-bayesian-estimation-intro.pdf"
move_pdf "exercises/Lesson 20.pdf" "artifacts/notability-pdfs/lesson-020-bayesian-estimation-update.pdf"
move_pdf "exercises/Lesson 21.pdf" "artifacts/notability-pdfs/lesson-021-bayesian-predictive-distributions.pdf"
move_pdf "exercises/Lesson 22.pdf" "artifacts/notability-pdfs/lesson-022-model-complexity.pdf"
move_pdf "exercises/Lesson 23.pdf" "artifacts/notability-pdfs/lesson-023-regularization.pdf"
move_pdf "exercises/Lesson 24.pdf" "artifacts/notability-pdfs/lesson-024-early-stopping.pdf"
move_pdf "exercises/Lesson 25.pdf" "artifacts/notability-pdfs/lesson-025-dropout.pdf"

echo
echo "Moved available PDFs. Next steps:"
echo "1. Update links in lessons/index.html and exercises/index.md."
echo "2. Run: git status"
echo "3. Commit the moves and link updates together."
