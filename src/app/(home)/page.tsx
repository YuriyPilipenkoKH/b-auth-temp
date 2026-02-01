
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 pt-12">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Link href="/login">Get started</Link>
      <p className="mt-4 text-lg">This is a sample Next.js application with authentication provided by Better Auth.</p>
    </main>
  );
}
