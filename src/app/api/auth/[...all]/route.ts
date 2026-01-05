import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "../../../../../auth";


export const { POST, GET } = toNextJsHandler(auth.handler);

// export const { GET, POST } = auth.api;