import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import Profits from '@/app/ui/dashboard/profits';
import Overview from '@/app/ui/dashboard/overview';
import Benefits from '@/app/ui/dashboard/benefits';
import SavingAccount from '@/app/ui/dashboard/savingaccount';

export default function HomePage() {
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 md:text-2xl`}>Home Page</h1>
        <div className='grid gap-6 sm:grid-cols-2'>
          <Overview/>
          <Profits/>
        </div>
        <br/>
        <div className='grid gap-6 sm:grid-cols-2 '>
            <SavingAccount/>
            <Benefits/>
        </div>
      </main>
    )
  }