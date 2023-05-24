import React from 'react'


function Main({children}) {
  return (
    <main className="relative h-full w-full bg-gray-100 sm:ml-[236px] md:mt-0 mt-[158px] text-gray-600">
        {children}
    </main>
  )
}

export default Main