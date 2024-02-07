import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Benefits from '@/app/ui/dashboard/benefits';
import Overview from '@/app/ui/dashboard/overview';

export default function HomePage() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 md:text-2xl`}>Home Page</h1>
        <div className='grid gap-6 sm:grid-cols-2'>
          <Overview/>
          <Benefits/>
        </div>
      </main>
    )
  }