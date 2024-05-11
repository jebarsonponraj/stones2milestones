import React from 'react'
import { DropDownArrow, Edit, TeacherDp } from '../assets/index'
import StudentsWatchList from './StudentsWatchList'

const ProfileComponent = ({ handlePopupVisibilityChange }) => {
  return (
    <section className="col-span-3 w-full flex flex-col space-y-8">
        <div className='w-full flex flex-col items-center space-y-2 bg-white rounded-md shadow-md pt-10 pb-4 px-4'>
            <img src={TeacherDp} alt="Teacher's Profile Image" className='w-24 h-24 rounded-full' />
            <span className='text-sm font-semibold'>Jonas Kahnwald</span>
            <span className='text-sm font-semibold text-slate-600'>Winden High School</span>
            <div></div>
            <div className='flex w-full justify-between items-center bg-slate-100 p-2 !mt-6 rounded-md'>
                <div className='flex items-center space-x-2'>
                    <Edit className="text-violet-600 w-6 h-6" />
                    <span className='text-slate-600 font-bold'>Grade 3</span>
                </div>
                <button className='flex items-center w-fit space-x-4 bg-violet-600 text-slate-50 px-2 py-1 rounded-md'>
                    <span>Section</span>
                    <DropDownArrow />
                </button>
            </div>
        </div>
        <div className='w-full flex flex-col items-center space-y-12 bg-white rounded-md shadow-md py-4 px-6'>
            <StudentsWatchList title={"My Classmates"} handlePopupVisibilityChange={handlePopupVisibilityChange} />
            <StudentsWatchList title={"My WatchList"} handlePopupVisibilityChange={handlePopupVisibilityChange} />
        </div>
    </section>
  )
}

export default ProfileComponent