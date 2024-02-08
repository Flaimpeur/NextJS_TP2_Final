import Link from "next/link";
import {ArrowRightEndOnRectangleIcon} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/dashboard' className="rounded-md p-2 bg-slate-50 hover:bg-zinc-400 flex items-center">
        <ArrowRightEndOnRectangleIcon className="w-5"/>
        <p>Login</p>
      </Link>
    </main>
  );
}
