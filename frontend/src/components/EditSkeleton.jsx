import React from 'react'


function EditSkeleton() {
  return (
    <div className=''>
      <div className="flex justify-center items-center h-screen">
        <span className="circle animate-loader bg-primary"></span>
        <span className="circle animate-loader animation-delay-200 bg-black"></span>
        <span className="circle animate-loader animation-delay-400 bg-secondary"></span>

      </div>
    </div>
  )
}

export default EditSkeleton