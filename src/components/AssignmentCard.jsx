import React from 'react'

const AssignmentCard = ({ assignment }) => {
  return (
    <section className={`flex flex-col space-y-4 ${assignment.id !== 3 ? 'border-b-2 border-slate-300' : ''} py-6 text-xs text-slate-500 font-medium`}>
        <div className='w-full flex items-center justify-between'> 
            <span className={`px-2 py-1 rounded-sm ${assignment.type === "Holiday" ? 'bg-blue-200 text-blue-600' : 'bg-orange-200 text-orange-600'}`}>{assignment.type}</span>
            <span>{assignment.date}</span>
        </div>
        <span className='text-sm text-slate-950 font-bold'>{assignment.title}</span>
        <p>{assignment.description}</p>
    </section>
  )
}

export default AssignmentCard