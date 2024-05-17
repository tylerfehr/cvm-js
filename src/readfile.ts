import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

export const getReadStream = (filePath: string): fs.ReadStream => fs.createReadStream(path.join(filePath), 'utf-8');

export const getReadline = (readStream: fs.ReadStream) => readline.createInterface({ input: readStream });

export const stripWordPunctuation = (w: string): string => w.replace(/[\p{P}\p{S}]/gu, ''); 

export const getHandleReadLine = (bufferSize: number) => (line: string) => {
  // line into words
  const words = line.split(/\s+/); 

  // remove all punctuation that would interfere with unique word count
  const cleanedWords = words.map((word) => word.replace(/[\p{P}\p{S}]/gu, ""));
};
