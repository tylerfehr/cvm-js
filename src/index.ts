import { CountingConfig } from './interface';
import { readTextFile, extractWords } from './readfile';
import { countUniqueWords } from './cvm';

const [bufferSize, filePath] = process.argv.slice(2);

if (!bufferSize) {
  console.error('Buffer size must be passed in the first argument');

  process.exit(1);
}

if (!filePath) {
  console.error('File path must be passed in the second argument');

  process.exit(1);
}

const config: CountingConfig = {
  wordsToCount: extractWords(readTextFile(`./input-files/${filePath}`)),
  // how the algorithm counts the entries
  buffer: Array(+bufferSize).fill(''),
  nextIndex: 0,
  roundNumber: 1,
};

const result = countUniqueWords(config);

console.log(`Number of unique words in ${filePath} is: ${result}`);
