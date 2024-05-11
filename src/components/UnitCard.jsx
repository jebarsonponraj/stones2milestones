import React, { useState } from 'react'
import { DropDownArrow, DropUpArrow } from '../assets'
import TaskCard from './TaskCard'
import ProgressBarComponent from './ProgressBarComponent'

const UnitCard = ({ unit }) => {
    const [isCardOpened, setIsCardOpened] = useState(false)

    const handleCardOpenChange = () => {
        setIsCardOpened(!isCardOpened)
    }

  return (
    <section className='flex w-full space-x-6'>
                    <div className='w-fit pt-10'>
                        <div className='mt-4 bg-slate-200 w-4 h-4 rounded-full'></div>
                    </div>
                    <div className='flex-1 w-full border-2 border-slate-400/40 rounded-md flex flex-col pt-4 px-6'>
                        <div className='w-full grid grid-cols-12 gap-4'>
                            <div className='col-span-3 w-full flex flex-col space-y-4'>
                                <div className='flex flex-col space-y-0 font-semibold text-slate-900'>
                                    <span className='text-md'>Assigned On</span>
                                    <span className='text-lg font-semibold'>{unit.assignedOn}</span>
                                </div>
                                <div className='flex flex-col space-y-0 font-semibold text-slate-900'>
                                    <span className='text-md'>Due By</span>
                                    <span className='text-lg font-semibold'>{unit.dueBy}</span>
                                </div>
                            </div>
                            <div className='col-span-5 w-full border-l-4 border-slate-300 h-fit pl-6'>
                                <span className='text-md font-semibold'>{unit.title}</span>
                                <p className='line-clamp-2 text-slate-600 text-sm'>{unit.description}</p>
                            </div>
                            <div className='col-span-3 w-full flex flex-col space-y-4'>
                                <ProgressBarComponent progress={unit.overallProgress} />
                                <span className={`${unit.overallProgress === 100 ? 'text-green-400 border-green-400' : unit.overallProgress > 75 ? "text-yellow-400 border-yellow-400" : unit.overallProgress > 25 ? 'text-orange-400 border-orange-400' : 'text-red-400 border-red-400' } text-xs rounded-md font-bold py-1 border-2 text-center`}>{unit.overallStatus}</span>
                            </div>
                            <button className='col-span-1 flex items-center justify-center w-full text-slate-600' onClick={handleCardOpenChange}>{isCardOpened ? <DropUpArrow className="w-6 h-6" /> : <DropDownArrow className="w-6 h-6" />}</button>
                        </div>
                        <section className={`${isCardOpened ? 'flex' : 'hidden'} flex-col pt-6 pb-20`}>
                            {unit.tasks.map(task => (
                                <React.Fragment key={task.id}>
                                    <TaskCard task={task} />
                                </React.Fragment>
                            ))}
                        </section>
                    </div>
                </section>
  )
}

export default UnitCard