import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./trpc-app-router-placeholder";

/**
 * Server-side tRPC client for use in NextAuth callbacks and server components
 */
export const serverTrpc: any = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/trpc`,
      headers() {
        return {};
      },
    }),
  ],
});
