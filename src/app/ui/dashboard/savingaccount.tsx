import { fetchWallet } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import {ArrowDownTrayIcon, ArrowUpTrayIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function SavingAccount(){
    const wallet = await fetchWallet();
    
    return(
        <div className="hidden h-full w-full grow rounded-3xl md:block ">
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <h1 className={`${lusitana.className} text-xl text-slate-700`}>Saving Account</h1>
                <div className="flex items-center">
                    <div className={`${lusitana.className} text-5xl font-bold`}>{wallet[0].savingamount} €</div>
                </div>
            </div>
        </div>
    )
}