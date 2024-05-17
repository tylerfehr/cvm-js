import * as fs from 'fs';
import * as path from 'path';

/**
 * Read a file of text, delimited by spaces
 */
export const readTextFile = (filePath: string): string => {
  return fs.readFileSync(path.join(filePath)).toString()
};

/**
 * Given a raw text file, extract all the words as an array of strings
 */
export const extractWords = (rawText: string, delimiter = ' '): string[] => {
  const punctuationMarks = ['.', ',', ':', ';', '?', '!', '-', '–', '—', '(', ')', '[', ']', '{', '}', '\'', '"', '…'];

  return rawText.split('\n').reduce<string[]>(
    (acc, r) => {
      // TODO: this is known ahead of starting computation
      const row = r.replace('\r', '');
      const words = row.split(delimiter);

      return [
        ...acc,
        ...words
          // remove all ending punctuation that would interfere with unique word count
          .flatMap((w) => punctuationMarks.some((p) => w.endsWith(p)) ? w.slice(0, w.length - 1) : w)
          // strip out any final empty chars
          .filter((w) => !!w),
      ];
    },
    [],
  );
};
