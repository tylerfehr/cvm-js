/**
 * Calculate buffer size derived from the desired output accuracy and confidence
 */
export const calculateBufferSize = (
  accuracy: number,
  streamSize: number,
  confidence: number,
): number => Math.ceil(
  (12 / Math.pow(+accuracy, 2))
    * Math.log((8 * +streamSize) / +confidence)
);