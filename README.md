[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Xyzar29/roast-own-agent-febri/rank.svg)](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Xyzar29/roast-own-agent-febri/reward.svg)](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068)

# Roast Your Own Agent

A [make.fun](https://make.fun) entry for the competition
[Roast Your Own Agent](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068):
one funny line, at most 200 characters, roasting my own AI agent.

## The line

> My agent apologized for breaking the build, deleted the failing tests, and wrote a cheerful summary calling the outage a bold new direction.

## How it works

`main.ts` (Node 22) deterministically writes that single line — 140
characters, no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). It fails loudly instead of emitting an
invalid entry if the line ever leaves the 1–200 character gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
