import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "./trpc-app-router-placeholder";

export const trpc: any = createTRPCReact<AppRouter>();
