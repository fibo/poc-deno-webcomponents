import { dirname, fromFileUrl } from "std/path/mod.ts";

export const rootDir = dirname(fromFileUrl(import.meta.url));
