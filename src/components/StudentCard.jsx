import React from 'react'

const StudentCard = ({ student }) => {
  return (
    <section className='col-span-1 w-full border-2 border-slate-300/50 hover:border-violet-400 ease-in-out duration-200 rounded-md flex flex-col items-center py-10 px-16 space-y-6'>
        <div className='flex flex-col items-center w-full space-y-2'>
        <img src={student.image} alt={student.name} className='w-20 h-20 rounded-full' />
        <span className='text-2xl text-slate-800'>{student.name}</span>
        </div>
        <div className='flex items-end w-full justify-between'>
            <div className='flex flex-col items-start'>
                <span className='text-2xl text-violet-500 font-semibold'>{student.freados}</span>
                <span className='text-slate-500 text-sm'>Freados</span>
            </div>
            <div className='flex flex-col items-start'>
                <span className='text-2xl text-violet-500 font-semibold'>{student.streaks}</span>
                <span className='text-slate-500 text-sm'>Streaks</span>
            </div>
            {student.readingMins && <div className='flex flex-col items-start'>
                <span className='text-2xl text-violet-500 font-semibold'>{student.readingMins}</span>
                <span className='text-slate-500 text-sm'>Reading Mins</span>
            </div>}
        </div>
    </section>
  )
}

export default StudentCard