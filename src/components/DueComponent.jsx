import React from 'react'
import Assignments from './Assignments'
import { Due } from '../assets'

const DueComponent = () => {
  return (
    <div className='col-span-2 w-full flex flex-col space-y-8'>
      <section className='due w-full flex flex-col items-center space-y-8 rounded-md shadow-md pt-10 pb-4 px-4 text-slate-50'>
        <div className='w-full flex space-x-2 items-center'>
          <span className='bg-slate-50 text-slate-900 p-2 rounded-full'><Due /></span>
          <span className='uppercase text-md font-bold'>Due Today</span>
        </div>
        <div className='w-full flex flex-col space-y-1'>
          <span>Assignment 1</span>
          <p className='text-slate-200 line-clamp-2 text-xs'>Lorem ipsum dolor sit amet, cotetur adipiscing elit</p>
        </div>
        <button className='w-full bg-slate-50 rounded-md text-slate-950 py-1 text-sm'>View</button>
      </section>
      <Assignments />
    </div>
  )
}

export default DueComponent