// The real AppRouter type lives in a separate `api` package that isn't part of
// this repo, so there's nothing to import it from. `any` here only affects
// type-checking of tRPC calls, not runtime behavior - Google sign-in still
// needs NEXT_PUBLIC_API_URL pointed at a real instance of that backend to work.
export type AppRouter = any;
