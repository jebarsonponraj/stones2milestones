import React from 'react'
import { Info } from '../assets'
import { assignmentsList } from '../lib/AssignmentsList'
import AssignmentCard from './AssignmentCard'

const Assignments = () => {
  return (
    <div className='w-full bg-white flex flex-col items-center space-y-4 rounded-md shadow-md py-4 px-4 text-slate-950'>
        <div className='w-full flex items-center space-x-2 uppercase font-bold'>
            <Info className='w-5 h-5' />
            <span className='text-md'>Assignments</span>
        </div>
        <div className='flex flex-col'>
            {assignmentsList.map(assignment => (
                <React.Fragment key={assignment.id}>
                  <AssignmentCard assignment={assignment} />
                </React.Fragment>
            ))}
        </div>
        <button className='fixed bottom-6 right-6 bg-violet-600 w-16 h-16 flex items-center justify-center rounded-full text-slate-50 font-bold text-7xl'>+</button>
    </div>
  )
}

export default Assignments