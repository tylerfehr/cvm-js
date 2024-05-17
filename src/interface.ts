/**
 * Config passed to solve for
 */
export interface CountingConfig {
  wordsToCount: string[];
  buffer: string[];
  nextIndex: number;
  roundNumber: number;
}
