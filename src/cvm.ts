/**
 * The solver class for the CVM counting algorithm
 */
export class CVM {
  private readonly bufferSize: number;

  private buffer: string[];
  private roundNumber: number;
  private probability: number;

  constructor(bufferSize: number) {
    this.bufferSize = bufferSize;
    this.buffer = Array(this.bufferSize).fill('');
    this.roundNumber = 0;
    this.probability = 0.5;
  }

  processLine(...words: string[]): void {
    for (const w of words) {
      const idxToRemove = this.buffer.findIndex((b) => b.toLowerCase() === w.toLowerCase());

      if (idxToRemove !== -1) {
        this.buffer[idxToRemove] = '';
      }

      if (Math.random() < this.probability) {
        this.buffer.push(w);
      }

      if (this.getBufferLength() === this.bufferSize) {
        this.clearApproxHalfBuffer();
        this.probability /= 2;
        this.roundNumber += 1;

        if (this.buffer.length === this.bufferSize) {
          throw new Error('Buffer size cannot be equal to max size after clear step');
        }
      }
    }
  }

  getBufferLength() {
    return this.buffer.reduce((acc, curr) => curr !== '' ? acc + 1 : acc, 0);
  }

  clearApproxHalfBuffer(): void {
    this.buffer = this.buffer.map((b) => Math.random() < this.probability ? b : '');
  }

  calculateFinalResult(): number {
    return this.getBufferLength() / this.probability;
  }
}
