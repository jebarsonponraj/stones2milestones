import React from 'react'
import { studentsList } from '../lib/StudentsList'
import StudentCard from './StudentCard'
import { Close } from '../assets'

const Popup = ({ handlePopupVisibilityChange }) => {

  return (
    <div className='w-full bg-white h-fit rounded-xl shadow-lg shadow-slate-600 p-10 flex flex-col space-y-10 relative'>
        <span className='text-3xl text-slate-700 font-semibold'>Your students</span>
        <div className='w-full flex flex-col lg:grid grid-cols-3 gap-6'>
            {studentsList.map(student => (
                <StudentCard key={student.id} student={student} />
            ))}
        </div>
        <button className='absolute -top-2 right-6'>
            <Close className='w-6 h-6 text-slate-600 hover:text-slate-800' onClick={handlePopupVisibilityChange} />
        </button>
    </div>
  )
}

export default Popup