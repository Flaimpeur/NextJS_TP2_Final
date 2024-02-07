import Link from 'next/link';
import Links from '@/app/ui/dashboard/links';
import Image from 'next/image';
import Logo from './PieceLogo.png'


export default function TopNav() {
    return (
        
        <div className="hidden h-full w-full grow rounded-3xl bg-gray-50 md:block "> 
            <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={100} height={100} />
                    </Link>
                    <Links />
                </div>
            </div>
        </div>
    );
  }