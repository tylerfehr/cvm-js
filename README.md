# CVM Counting Algorithm

## Description

- This project implements the novel CVM counting algorithm described [here](https://www.quantamagazine.org/computer-scientists-invent-an-efficient-new-way-to-count-20240516/).
- This is a probabilistic algorithm with its strengths being in low memory usage, making it ideal for large streams of data.
- I wrote this project for fun as an exercise. It doesn't actually use a stream or utilize the intended advantages of the algorithm. Depending on interest, I will come back and formalize it as a consumable library.

## To Run
- Put a .txt file in the `input-files` directory
- Pick a buffer size (the larger, the more accurate)

Then run with
```zsh
<yarn | npm | pnpm> run calc <bufferSize> <fileName>
```
## Note
- This is a probabilistic algorithm, so accuracy will never be 100% _unless_ the buffer size exceeds the number of unique words in the input file.
- Referencing the paper [here](https://arxiv.org/pdf/2301.10191), you can calculate a desired accuracy derived from the buffer size.
