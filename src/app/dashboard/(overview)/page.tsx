import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';

export default function HomePage() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Home Page</h1>
      </main>
    )
  }