# CVM Counting Algorithm

## Description

- This project implements the novel CVM counting algorithm described [here](https://www.quantamagazine.org/computer-scientists-invent-an-efficient-new-way-to-count-20240516/).
- The paper itself can be found [here](https://arxiv.org/pdf/2301.10191)
- This is a probabilistic algorithm optimized for memory usage, making it ideal for large streams of data.

## To Run
- Pick a desired accuracy (ε)
  - This is how close you want your estimate to be to the true number of distinct elements. A larger ε means you want a more precise estimate. For example, ε = 0.95 means you want your estimate to be within 5% of the actual value.
- Pick a confidence (1-δ)
  - This is your level of certainty that the algorithm's estimate will fall within the desired accuracy range. A higher confidence (e.g., 99.9%) means you're very sure the estimate will be accurate, while a lower confidence (e.g., 90%) means there's a higher chance the estimate might be outside the desired range.
- Estimate the total number of words in the stream (m)
- Input a file path
  - Put a .txt file in the `input-files` directory (Shakespeare's _Hamlet_ is provided already in that directory as a sample)

Then run with
```zsh
<yarn | npm | pnpm> run calc <ε> <1-δ> <m> <file path>
```

For example:
```zsh
yarn run calc .99 .90 32000 ./input-files/hamlet-shakespeare.txt
```

## Note
- This is a probabilistic algorithm, so accuracy will never be 100% _unless_ the buffer size exceeds the number of unique words in the input file.
