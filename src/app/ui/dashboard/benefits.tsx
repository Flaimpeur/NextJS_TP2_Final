import { lusitana } from '@/app/ui/fonts';

export default function Benefits(){
    return(
        <div className="hidden h-full w-full grow rounded-3xl bg-neutral-800 md:block "> 
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="flex items-center"> 
                    <h1 className={`${lusitana.className} text-xl text-slate-500`}>Profit</h1>
                    
                </div>
                <p className={`${lusitana.className} text-3xl text-slate-50 font-bold`}>500€</p>
            </div>
        </div>
    )
}