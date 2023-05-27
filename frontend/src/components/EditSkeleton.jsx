import React from 'react'


function EditSkeleton() {
  return (
    <div className=''>
      <div class="flex justify-center items-center h-screen">
        <span class="circle animate-loader bg-primary"></span>
        <span class="circle animate-loader animation-delay-200 bg-black"></span>
        <span class="circle animate-loader animation-delay-400 bg-secondary"></span>

      </div>
    </div>
  )
}

export default EditSkeleton