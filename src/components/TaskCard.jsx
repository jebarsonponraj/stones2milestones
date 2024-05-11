import React from 'react'
import ProgressBarComponent from './ProgressBarComponent'
import StudentsGroup from './StudentsGroup'
import { Task } from '../assets'

const TaskCard = ({ task }) => {
  return (
    <div className='grid grid-cols-3 w-full gap-6'>
        <div className='col-span-1 w-full flex items-center space-x-4'>
            <span className='bg-slate-200 p-2 text-slate-950 rounded-full shadow-sm shadow-slate-800'>
            <Task />
            </span>
            <span className='text-slate-400 font-semibold'>Task {task.id} - {task.label}</span>
        </div>
        <div className='col-span-1 w-full flex items-center justify-center'>
        <ProgressBarComponent progress={task.progress} />
        </div>
        <div className='col-span-1 w-full flex items-center justify-center'>
        <StudentsGroup />
        </div>
    </div>
  )
}

export default TaskCard