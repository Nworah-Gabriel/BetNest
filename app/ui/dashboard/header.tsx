import {
  CurrencyBangladeshiIcon, 
  CircleStackIcon, 
  UserIcon ,
  PlusSmallIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/20/solid'

// import { ConnectButton } from '@rainbow-me/rainbowkit'
// import { useAccount } from 'wagmi'

export default function Header() {
  return (
    <div>
      <div className="flex justify-start items-center pr-4 mt-4 ">
      <form className="hidden lg:flex flex-1 p-2 rounded-full border-2 border-green-500 mr-2" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </div>
              </form>

        <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:leading-7">
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-full bg-[a1a1a1] lg:ml-2 px-3 py-1 text-sm font-semibold text-green-500 hover:text-purple-500 shadow-sm border border-green-500 hover:border-purple-500"
        >
          <CurrencyBangladeshiIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
          <p className=''>CASHOUT</p>
        </a>
        <div
          className="ml-auto hidden lg:flex items-center gap-x-1 rounded-full bg-[a1a1a1] px-3 py-1 text-sm font-semibold text-green-500 shadow-sm border border-green-500"
        >
          {
            // <ConnectButton label='Connect with Metamask' />
          }
            xxxxxxxxxx
          <div className='bg-green-500 rounded-full text-white py-1 px-3 hover:bg-purple-500 cursor-pointer'>DEPOSIT</div>
        </div>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-full bg-[a1a1a1] px-3 py-1 text-sm font-semibold text-green-500 hover:text-purple-500 shadow-sm border border-green-500 hover:border-purple-500"
        >
          <CircleStackIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
          <p className=''>MY BETS</p>
        </a>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-full bg-[a1a1a1] px-3 py-1 text-sm font-semibold text-green-500 hover:text-purple-500 shadow-sm border border-green-500 hover:border-purple-500"
        >
          <UserIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
          <p className=''>ACCOUNT</p>
        </a>
        </div>
        
      </div>
    </div>
  )
}
