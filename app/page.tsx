import Image from 'next/image'

import LeaderBoard from '@/app/ui/dashboard/leaderBoard';
import CardWrapper from '@/app/ui/dashboard/cards';
import CardWrapper2 from '@/app/ui/dashboard/cards2';
import Add from '@/app/ui/dashboard/add'


import React from 'react'

const page = () => {
  return (
    <main>
       <div>
          <Add />
        </div>
      <div className="grid">
          <CardWrapper />
          <CardWrapper2 />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:flex">
          <LeaderBoard />  
      </div>
      <div className='w-full flex justify-center mt-8'>
      <Image 
      src={'/badge.png'}
      alt=''
      width={100}
      height={100}
      className='w-[50vw] h-auto'
      />
      </div>
    </main>
  );
}

export default page