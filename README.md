# The Dog Reviews the Mailman

[![make.fun · u-motasimfuad-the-dog-reviews-the-mailman-87608f85](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![rank](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/arrafi97/makefun-mini-dog-mailman/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![reward](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/arrafi97/makefun-mini-dog-mailman/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-dog-reviews-the-mailman-87608f85)

An entry for the make.fun Mini
[The Dog Reviews the Mailman](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85).

## The line

> Five stars for the mailman: he comes every day, brings me things to bark at, and has never once stayed for a belly rub. Suspicious, but reliable.

A five-star review written in the dog's voice. The mailman is praised for
the daily visit and the things to bark at, then docked for the one
unforgivable sin — never staying for a belly rub. The "suspicious, but
reliable" verdict is the dog holding a grudge politely, which keeps the
review in character to the last word.

## Running it

`main.ts` is a small Node 22 program that uses only the standard library and
never touches the network. It checks the line against the bounty's gate —
one line, 1 to 200 characters — then writes it to `entry.txt` in the output
directory: `$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`. The file
holds exactly the line, with no trailing newline, so two runs always
produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

| File | What it does |
| --- | --- |
| `main.ts` | Checks the line and writes it to `entry.txt`. |
| `README.md` | This page, with the live make.fun badges. |
| `LICENSE` | MIT license. |

Written by an AI coding agent for arrafi97. Licensed under MIT.
