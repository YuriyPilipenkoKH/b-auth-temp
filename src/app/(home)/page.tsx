
import Logo from "@/components/header/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 pt-12">
      <div className="flex gap-2 text-4xl font-bold">
        <Logo/>
        Page
        </div>
      <Link href="/login">Get started</Link>
      <p className="mt-4 text-lg">This is a sample Next.js application with authentication provided by Better Auth.</p>
    </main>
  );
}
