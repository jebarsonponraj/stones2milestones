import React from 'react'
import { studentsProfilePhotoList } from '../lib/StudentsProfilePhotoList'

const StudentsGroup = () => {
  return (
    <section className='flex -space-x-4'>
            {studentsProfilePhotoList.map((student) => (
                <img key={student.id} src={student.studentImage} alt={`Image for student - ${student.id}`} className='w-12 h-12 rounded-full border-4 border-white' />
            ))}
    </section>
  )
}

export default StudentsGroup