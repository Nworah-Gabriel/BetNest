'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {betNav} from '@/app/lib/navigation'

const Add = () => {
    const Pathname = usePathname()

  return (
    <div className='grid lg:flex gap-x-2 gap-y-2 justify-center lg:justify-between text-white mb-6'>
      <img src={'/ad001.png'}
      alt='add'
      className='h-auto w-[65rem] rounded-3xl  '
      />

    <section className='flex justify-center'>
        <div className='overflow-hidden w-full lg:w-[20rem]'>
        <div>
            <div className='bg-black bg-opacity-30 lg:rounded-t-full overflow-hidden'>
            <nav className='flex justify-center bg-green-500 px-4 pt-4 pb-2  lg:rounded-t-full overflow-hidden'>
                <div className='flex px-2 py-1 bg-black rounded-full '>
                {betNav.map((link,i) => {
                    const active = Pathname === link.path;
                    return(
                        <li key={i} className='flex px-2 '>
                            <Link href={link.path} className={`flex items-center rounded-full px-4 py-1 cursor-pointer ${active ? 'bg-purple-400' : 'bg-none'}`}>
                                <span className={` `} >{link.nav}</span>
                            </Link>
                        </li>
                    )
                })}
                </div>
            </nav>
                </div>
        </div>

            <div className='py-6 px-6 lg:px-2 bg-black bg-opacity-30 lg:rounded-b-3xl'>
                <form className='grid leading-loose'>
                   <p className='mb-3'>Please insert Booking code</p>
                   <input type='text' placeholder='Booking code' className='rounded-full bg-black bg-opacity-30 focus:border-green-500 mt-2 border-none' />
                   <div className='flex justify-center'>
                   <button type='submit' className='w-2/4 flex justify-center bg-black bg-opacity-30 px-4 py-1 rounded-full border border-black hover:border-green-500 mt-6'>Load</button>
                   </div>
                </form>
                <img
                src={'/badge.png'}
                alt='badge'
                className='lg:w-[20rem] w-full flex justify-center mt-4'
                />
            </div>
</div>
    </section>

    </div>
  )
}

export default Add
