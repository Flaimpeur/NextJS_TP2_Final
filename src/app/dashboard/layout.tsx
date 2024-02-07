import TopNav from '@/app/ui/dashboard/topnav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex justify-center items-center h-screen bg-center'>
            <div className="border rounded-3xl shadow-lg w-full max-w-lg  bg-gray-200">
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