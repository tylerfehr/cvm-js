/**
 * Calculates the threshold (thresh or bufferSize) value for the F0-Estimator algorithm.
 */
export const calculateBufferSize = (epsilon: number, delta: number, streamSize: number): number => {
  if (epsilon <= 0 || epsilon >= 1) {
    throw new Error("Epsilon must be between 0 and 1 (exclusive)");
  }

  if (delta <= 0 || delta >= 1) {
    throw new Error("Delta must be between 0 and 1 (exclusive)");
  }

  if (streamSize <= 0) {
    throw new Error("Stream size must be a positive integer");
  }

  return Math.ceil((12 / Math.pow(epsilon, 2)) * Math.log2((8 * streamSize) / delta));
}