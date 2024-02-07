import { lusitana } from '@/app/ui/fonts';

export default function Benefits(){
    return(
        <div className="border rounded-3xl shadow-lg bg-neutral-50 md:block "> 
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="flex items-center"> 
                    <h1 className={`${lusitana.className} text-lg`}>Benefits</h1>
                </div>
                <p className={`${lusitana.className} text-lg font-bold`}>Rajouter graph</p>
            </div>
        </div>
    )
}