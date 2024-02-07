import Link from 'next/link';
import Links from '@/app/ui/dashboard/links';


export default function TopNav() {
    return (
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
          href="/"
        >
          <img src="/PieceLogo.png" alt="Logo" width="50" height="50" />
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <Links />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <form
            // action={async () => {
            //   'use server';
            //   await signOut();
            // }}
          >
            {/* <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button> */}
          </form>
        </div>
      </div>  
    );
  }

// export default function TopNav() {
//     return(
//         <div>
//         <nav className="bg-blue-200 py-4">
//             <div className="container mx-auto px-4">
//                 <ul className="flex justify-between items-center">
//                     <li>
//                         <a href="/dashboard">HomePage</a>
//                     </li>
//                     <li>
//                         <a href="dashboard/shop">Wallet</a>
//                     </li>
//                     <li>
//                         <a href="dashboard/wallet">Shop</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     </div>
        // <div className="flex h-full flex-col px-3 py-4 md:px-2">
        //     <Link
        //     className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        //     href="/"
        // >
        //     <div className="w-32 text-white md:w-40">
        //     <p>Test</p>
        //     </div>
        // </Link>
        // </div>
//     )
// }