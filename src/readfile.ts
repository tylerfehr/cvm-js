import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

import { CVM } from './cvm';

export const getReadStream = (filePath: string): fs.ReadStream => fs.createReadStream(path.join(filePath), 'utf-8');

export const getReadline = (readStream: fs.ReadStream) => readline.createInterface({ input: readStream });

export const stripWordPunctuation = (w: string): string => w.replace(/[\p{P}\p{S}]/gu, ''); 

/**
 * Get curried handleReadLine with cvm solver in scope
 */
export const getHandleReadLine = (cvm: CVM) => (line: string) => {
  // line into words
  const words = line.split(/\s+/); 

  // remove all punctuation that would interfere with unique word count
  cvm.processLine(words.map(stripWordPunctuation));
};
