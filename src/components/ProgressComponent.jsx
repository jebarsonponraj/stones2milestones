import React, { useState } from 'react'
import { progressTabList } from '../lib/ProgressTabList'
import UnitAccordion from './UnitAccordion'

const ProgressComponent = () => {
    const [selectedTab, setSelectedTab] = useState(2)

    const handleSelectedTabChange = (id) => {
        setSelectedTab(id)
    }

  return (
    <section className="col-span-7 w-full">
        <div className='w-full grid grid-cols-3'>
            {progressTabList.map((list) => (
                <div key={list.id} className={`col-span-1 py-2 w-full flex justify-center items-center space-x-4 border shadow-md ${selectedTab === list.id ? 'bg-white text-violet-800' : 'bg-slate-100 hover:bg-slate-50'} ease-in-out duration-200 cursor-pointer`} onClick={() => handleSelectedTabChange(list.id)}>
                    <list.icon />
                    <span>{list.label}</span>
                </div>
            ))}
        </div>
        <UnitAccordion />
    </section>
  )
}

export default ProgressComponent