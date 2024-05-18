// Must be within 0.01 and 1.0 (inclusive)
export const validateAccuracy = (accuracy: any): boolean => {
  const numAccuracy = parseFloat(accuracy);

  return !isNaN(numAccuracy) && numAccuracy >= 0.01 && numAccuracy <= 1.0;
};

// Must be a positive integer
export const validateApproximateSize = (approxSize: any): boolean => {
  const numApproxSize = parseInt(approxSize, 10);

  return Number.isInteger(numApproxSize) && numApproxSize > 0;
};

// Must be within 0.01 and 1.0 (inclusive)
export const validateConfidence = (confidence: any): boolean => {
  const numAccuracy = parseFloat(confidence);

  return !isNaN(numAccuracy) && numAccuracy >= 0.01 && numAccuracy <= 1.0;
};

// Must be a string
export const validateFilePath = (filePath: any): boolean => {
  return typeof filePath === 'string' && filePath.trim().length > 0;
};
