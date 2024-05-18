/**
 * The solver class for the CVM counting algorithm
 */
export class CVM {
  private readonly bufferSize: number;
  private buffer: Record<string, true>;
  private probability: number;

  constructor(bufferSize: number) {
    this.bufferSize = bufferSize;
    this.buffer = {};
    this.probability = 1;
  }

  processLine(words: string[]): void {
    for (const w of words) {

      delete this.buffer[w.toLowerCase()];

      if (Math.random() < this.probability) {
        this.buffer[w.toLowerCase()] = true;
      }

      if (this.getBufferLength() === this.bufferSize) {
        this.clearApproxHalfBuffer();
        this.probability /= 2;

        if (this.getBufferLength() === this.bufferSize) {
          throw new Error('Extremely unlikely error -- run again');
        }
      }
    }
  }

  getBufferLength(): number {
    return Object.values(this.buffer).length;
  }

  clearApproxHalfBuffer(): void {
    this.buffer = Object.fromEntries(
      Object.entries(this.buffer).filter(() => Math.random() < 0.5),
    );
  }

  calculateFinalResult(): number {
    return this.getBufferLength() / this.probability;
  }
}
