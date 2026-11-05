# Contributing to BlockRoll

Thanks for considering contributing! BlockRoll is a non-custodial, encrypted file storage and
sharing platform, with a Stellar-based payment option and an on-chain file notary. This guide
covers how the project is laid out and how to get a piece of it running locally.

## Project layout

```
contracts/      Solidity smart contracts (Foundry), for an EVM-compatible chain
server/         Express + TypeScript REST API and WebSocket backend (MongoDB)
new-frontend/   The active Next.js app - marketing site, pricing, Stellar payments/notary
frontend/       An older Next.js client, being superseded by new-frontend
whatsapp/       A Gemini-powered WhatsApp support bot
blockroll-kit/  Client SDKs (React, Vue, CDN) for third-party integration
```

Most active development right now is in `new-frontend/` and the Stellar integration
(`new-frontend/src/lib/stellar/`).

## Getting set up

Pick the piece you're working on - you don't need to run the whole stack to contribute to one
part of it.

**new-frontend** (the live site):
```bash
cd new-frontend
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_STELLAR_TREASURY_ADDRESS for Stellar features
npm run dev
```

**server** (REST API):
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

**contracts**:
```bash
cd contracts
forge install
forge test
```

## Known rough edges

Being upfront about this: `new-frontend`'s Google sign-in flow calls a tRPC backend
(`lib/trpc.ts`, `lib/trpc-server.ts`) that lives in a separate `api` package not included in
this repo, so `npx tsc --noEmit` will show errors on those two files and on
`providers/trpc-provider.tsx` until that's resolved. Everything else - including the Stellar
payments and notary features - type-checks and lints cleanly.

## Before opening a PR

- Run `npm run lint` and `npx tsc --noEmit` in whichever package you touched, and make sure you
  haven't introduced new errors (the known one above is the only expected one in `new-frontend`).
- Keep changes scoped to the issue you're working on.
- Describe what you changed and why in the PR description.

## Working on a Drips Wave issue

If you're here from a Stellar Wave listing on [Drips](https://www.drips.network/wave/stellar):
welcome! Comment on the issue before starting so we don't have two people working on the same
thing, and link your PR back to the issue when you open it.

## Code style

- TypeScript throughout the frontend/backend, Solidity for contracts.
- No enforced commit message format, but a clear, specific message is appreciated.
- Follow the existing patterns in a file/directory rather than introducing a new convention.
