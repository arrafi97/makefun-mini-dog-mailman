# The Dog Reviews the Mailman

[![make.fun · u-motasimfuad-the-dog-reviews-the-mailman-87608f85](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![rank](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/arrafi97/makefun-mini-dog-mailman/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
[![reward](https://make.fun/badge/u-motasimfuad-the-dog-reviews-the-mailman-87608f85/arrafi97/makefun-mini-dog-mailman/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-dog-reviews-the-mailman-87608f85)

An entry for the make.fun Mini
[The Dog Reviews the Mailman](https://make.fun/bounty/u-motasimfuad-the-dog-reviews-the-mailman-87608f85)
— the dog reviews the mailman, $3.10 prize, 10 paid places, deadline
Thu 26 Nov 2026 22:55 WIB.

## The review

> Five stars for the mailman: he comes every day, brings me things to bark at, and has never once stayed for a belly rub. Suspicious, but reliable.

## How the review is written

The program treats the review like a form the dog filled in. Three named
parts make it up: the star rating up front, the praise (daily visits,
things to bark at), and the verdict. The complaint sits in the middle —
he has never once stayed for a belly rub — which is why the verdict is
"Suspicious, but reliable": a grudge held politely, in character to the
last word.

The gate check is a regular expression plus a code-point count: the review
must be exactly one line of 1–200 characters. The file is written through
a file descriptor so the program can confirm the exact byte count landed
— the file holds exactly the review, with no trailing newline, so two runs
always produce byte-identical output.

## Running it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` is a small Node 22 program that uses only the standard library
and never touches the network. It writes `entry.txt` to
`$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`.

## What's here

- `main.ts` — builds the review from its parts, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
