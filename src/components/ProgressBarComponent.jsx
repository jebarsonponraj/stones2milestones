import React from 'react'

const ProgressBarComponent = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className={`${progress === 100 ? 'bg-green-400' : progress > 75 ? "bg-yellow-400" : progress > 25 ? 'bg-orange-400' : 'bg-red-400' } h-2.5 rounded-full`} style={{width: `${progress}%`}}></div>
                                </div>
  )
}

export default ProgressBarComponent