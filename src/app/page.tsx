
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
       backgroundImage: `url(${process.env.NEXT_PUBLIC_HOME_BG})`,
      }}
     >
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Link href="/login">Login</Link>
      <p className="mt-4 text-lg">This is a sample Next.js application with authentication provided by Better Auth.</p>
    </main>
  );
}
