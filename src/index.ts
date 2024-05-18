import { CVM } from './cvm';
import { calculateBufferSize } from './util';
import { getHandleReadLine, getReadStream, getReadline } from './readfile';

import {
  validateAccuracy,
  validateApproximateSize,
  validateConfidence,
  validateFilePath,
} from './validation';

const [accuracy, approxSize, confidence, filePath] = process.argv.slice(2);

if (!validateAccuracy(accuracy)) {
  console.error('Desired accuracy (ε) must be passed in the first argument\n');
  console.info('This is how close you want your estimate to be to the true number of distinct elements. A smaller ε means you want a more precise estimate. For example, ε = 0.05 means you want your estimate to be within 5% of the actual value.\n')

  process.exit(1);
}

if (!validateApproximateSize(approxSize)) {
  console.error('Number of total elements (m) must be passed in the second argument and must be a positive integer\n');
  console.info('This is used to determine buffer size and can be a loose approximation. The closer it is to the stream size, the more accurate the results');

  process.exit(1);
}

if (!validateConfidence(confidence)) {
  console.error('Confidence (1-δ) must be passed in the third argument\n');
  console.info("This is your level of certainty that the algorithm's estimate will fall within the desired accuracy range. A higher confidence (e.g., 99.9%) means you're very sure the estimate will be accurate, while a lower confidence (e.g., 90%) means there's a higher chance the estimate might be outside the desired range.\n")

  process.exit(1);
}

if (!validateFilePath(filePath)) {
  console.error('File path must be passed in the fourth argument\n');

  console.info("This is the name of the file within `input-files`\n")

  process.exit(1);
}

// initialize streams
const readStream = getReadStream(filePath);
const rl = getReadline(readStream);

const bufferSize = calculateBufferSize(+accuracy, +confidence, +approxSize);

const cvm = new CVM(bufferSize);

// stream handlers
rl.on('line', getHandleReadLine(cvm));

rl.on('close', () => {
  console.info(
    cvm.calculateFinalResult()
  );
});

// SIGINT handler to close stream gracefully
process.on('SIGINT', () => {
  rl.close();
});
