import Image from 'next/image'
import Link from 'next/link'
const navigation = {
    solutions: [
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Bonuses', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Aya Labs', href: '#' },
    ],
    support: [
      { name: 'New Games', href: '#' },
      { name: 'Popular Games', href: '#' },
      { name: 'Most Played', href: '#' },
      { name: 'Demo', href: '#' },
    ],
    company: [
      { name: 'Telegram', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Discord', href: '#' },
    ],
    legal: [
      { name: 'FAQ', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'Rules', href: '#' },
      { name: 'Country', href: '#' },
      { name: 'Language', href: '#' },
    ],
  }
  
  export default function footer() {
    return (
      <footer className="bg-black bg-opacity-50 text-white mt-4 rounded-3xl" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              src={'/logo.png'} 
              width={100}
              height={100}
              className="w-[10rem]"
              alt="BetNest"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <Link href={'#'} className="text-sm font-semibold leading-6 text-white">About Us</Link>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                <Link href={'#'} className="text-sm font-semibold leading-6 text-white">Games</Link>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                <Link href={'#'} className="text-sm font-semibold leading-6 text-white">Communities</Link>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                <Link href={'#'} className="text-sm font-semibold leading-6 text-white">Help</Link>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  