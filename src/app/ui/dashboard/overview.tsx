import { fetchWallet } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import {ArrowDownTrayIcon, ArrowUpTrayIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Overview(){
    const wallet = await fetchWallet();
    console.log(wallet[0].amountPri);
    
    return(
        <div className="hidden h-full w-full grow rounded-3xl md:block ">
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="flex items-center">
                    <div className={`${lusitana.className} text-5xl font-bold`}>{wallet[0].amountPri}</div>
                </div>
                <div className='grid gap-6 sm:grid-cols-2 w-max'>
                    <Link href={`/dashboard/amodifier`} className="rounded-md border p-2 bg-slate-50 hover:bg-zinc-400 flex items-center">
                        <ArrowUpTrayIcon className="w-5" />
                        <p>Send</p>
                    </Link>
                    <Link href={`/dashboard/amodifier`} className="rounded-md border p-2 bg-slate-50 hover:bg-zinc-400 flex items-center">
                        <ArrowDownTrayIcon className="w-5" />
                        <p>Receive</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}