import React from 'react'
import { studentsProfilePhotoList } from '../lib/StudentsProfilePhotoList'

const StudentsGroup = ({size}) => {
  return (
    <section className='flex -space-x-4'>
            {studentsProfilePhotoList.map((student) => (
                <img key={student.id} src={student.studentImage} alt={`Image for student - ${student.id}`} className={`rounded-full border-4 border-white ${
                  size ? `w-${size} h-${size}` : 'w-12 h-12'
                }`} />
            ))}
    </section>
  )
}

export default StudentsGroup