import { lusitana } from '@/app/ui/fonts';

export default function Overview(){
    return(
        <div className="hidden h-full w-full grow rounded-3xl md:block "> 
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="flex items-center">
                    <p className={`${lusitana.className} text-5xl font-bold`}>15,000.33€</p>
                </div>
            </div>
        </div>
    )
}