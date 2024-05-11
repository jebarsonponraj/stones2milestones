import React from 'react'
import { unitDetailsData } from '../lib/UnitDetailData'
import UnitCard from './UnitCard'

const UnitAccordion = () => {
  return (
    <div className='w-full border rounded-md border-slate-400 bg-white py-10 px-6'>
        <div className='flex flex-col items-center w-full space-y-8'>
            {unitDetailsData.map(unit => (
                <React.Fragment key={unit.id}>
                <UnitCard unit={unit} />
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default UnitAccordion