import { headers } from "next/headers";
import { auth } from "../../auth";


export async function getServerSession() {
  const h = await headers();
  const headersObj: Record<string, string> = {};
  h.forEach((value: string, key: string) => (headersObj[key] = value));
  return auth.api.getSession({ headers: headersObj });
}
