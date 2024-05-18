/**
 * Calculates the threshold (thresh or bufferSize) value for the F0-Estimator algorithm.
 */
export const calculateBufferSize = (epsilon: number, delta: number, streamSize: number): number => {
  return Math.ceil(
    (12 / Math.pow(epsilon, 2)) * Math.log2((8 * streamSize) / delta)
  );
};

export const stripWordPunctuation = (w: string): string => w.replace(/[\p{P}\p{S}]/gu, '');
