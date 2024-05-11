import { Group } from '../assets'
import StudentsGroup from './StudentsGroup'

const StudentsWatchList = ({ title, handlePopupVisibilityChange }) => {
    return (
    <section className='flex w-full flex-col space-y-6'>
        <div className='w-full flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
                <Group className="w-6 h-6" />
                <span className='uppercase text-sm font-semibold'>{title}</span>
            </div>
            <button className='text-xs text-slate-600' onClick={handlePopupVisibilityChange}>View all</button>
        </div>
        <StudentsGroup />
    </section>
  )
}

export default StudentsWatchList