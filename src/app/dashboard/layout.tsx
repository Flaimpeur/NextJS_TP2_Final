import TopNav from '@/app/ui/dashboard/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex justify-center items-center min-h-screen bg-center'>
            <div className="border rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] w-full max-w-6xl bg-[#EFF3F7]">
                <div className=''>
                    <div>
                        <TopNav />
                    </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                </div>
            </div>
        </div>
    );
  }

  // <div className="w-full flex-none md:w-64">