'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon, LifebuoyIcon, GlobeAmericasIcon } from '@heroicons/react/20/solid'
import { Network, Joystick, LandPlot, Sparkles, BadgeEuro  } from 'lucide-react'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', icon:HomeIcon , current: true },
  { name: 'Soccer', href: '#', icon:LifebuoyIcon, current: false },
  { name: 'Basket Ball', href: '#', icon:GlobeAmericasIcon, current: false },
  { name: 'Live Betting', href: '#', icon:BadgeEuro, current: false },
  { name: 'Racing', href: '#', icon:LandPlot, current: false },
  { name: 'E-Sport', href: '#', icon:Joystick , current: false },
  { name: 'Tournaments', href: '#', icon:Network, current: false },
  { name: 'Popular', href: '#', icon:Sparkles, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SecondaryNav() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] gap-x-2 gap-y-2 justify-center  w-full px-4 sm:px-6 lg:px-2 py-6">
            <div className="flex h-16 justify-center lg:justify-start">
              <div className="flex">
               
                <div className="flex flex-col-[] md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-purple-500' : 'text-gray-300 hover:text-gray-500',
                        'flex items-center rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                       <item.icon
                        className={classNames(
                            'h-6 w-6 shrink-0 mr-2'
                        )}
                        aria-hidden="true"
                        />
                      <p className='hidden lg:block'>{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
