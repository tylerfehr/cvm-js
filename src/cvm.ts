import { CountingConfig } from "./interface";

/**
 * Run the CVM algorithm to count unique words
 */
export const countUniqueWords = (config: CountingConfig): number => {

  // TODO:
  return 0;

  let {
    wordsToCount,
    buffer,
    nextIndex,
    roundNumber,
  } = config;

  for (const w of wordsToCount) {
    // if it's already in our memory buffer, skip
    if (buffer.find((b) => b.toLowerCase() === w.toLowerCase())) {
      continue;
    }

    const nextAvailableIndex = buffer.findIndex((b) => b === '');

    if (nextAvailableIndex === -1) {
      let numberOfFlips = 0;

      while (Math.random() >= 0.5) {

        numberOfFlips += 1;

        if (numberOfFlips === roundNumber) {
          // select a random index in the buffer to clear
          const randomIndex = Math.floor(Math.random() * buffer.length);

          buffer[randomIndex] = '';
        }
      }

      roundNumber += 1;

      // if tails, skip to next item
      continue;
    }
    else {
      nextIndex = nextAvailableIndex;

      buffer[nextIndex] = w.toLowerCase();
    }
  }

  const numberOfWordsInBuffer = buffer.reduce<number>((acc, curr) => curr !== '' ? acc + 1 : acc, 0);

  console.log('num buffer size', numberOfWordsInBuffer);
  console.log('rounds', roundNumber);

  return numberOfWordsInBuffer / Math.pow(0.5, roundNumber);
};
