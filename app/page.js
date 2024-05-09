import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Welcome</h2>
      <button className="btn btn-neutral mb-2">
        <Link href={'/login'}>Login</Link>
      </button>
      <button className="btn btn-neutral">
        <Link href={'/register'}>Register</Link>
      </button>
      <button className="btn btn-neutral mt-3">
        <Link href={'/species/all'}>Species</Link>
      </button>
    </div>
  )
}
