import React from 'react'

function Skeleton() {
    return (
        <div>
            <div className='w-full z-[2] flex flex-col relative h-screen'>
                <div className='relative'>

                    <div className=''>

                        <div className='w-full h-full '>

                            <div className='w-full flex justify-center'>
                                <div className='bg- h-full w-full flex bg-inherit items-center flex-col '>
                                    <div className='w-full'>
                                        <div className='bg-primary w-full flex items-center flex-col h-[400px] 2xl:h-[500px]'>
                                            <div className='p-1 border-4 border-secondary mt-[80px] 2xl:mt-[100px] rounded-full flex items-center justify-center bg-white flex-row animate-pulse'>
                                                <div className='w-[160px] h-[160px] 2xl:w-[180px] 2xl:h-[180px] flex overflow-hidden items-center rounded-full flex-row justify-center bg-slate-200 animate-pulse'>
                                                </div>
                                            </div>
                                            <div className='h-2 bg-slate-200 rounded mt-1' />
                                            <div className='2xl:mt-2 text-center h-2 bg-slate-200 rounded' />

                                            <div className='gap-1 flex mt-4 flex-row justify-center items-start animate-pulse'>
                                                <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                    <div className='bg-slate-200 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg' />
                                                    <div className="h-2 bg-slate-200 rounded w-5 mt-1"></div>
                                                </div>

                                                <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                    <div className='bg-slate-200 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg' />
                                                    <div className="h-2 bg-slate-200 rounded w-5 mt-1"></div>
                                                </div>

                                                <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                    <div className='bg-slate-200 w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg' />
                                                    <div className="h-2 bg-slate-200 rounded w-5 mt-1"></div>
                                                </div>




                                            </div>

                                            <div className='w-full my-0 mx-auto max-w-[500px] flex flex-col bg-white h-full mt-6'>


                                                <div className='2xl:text-sm text-xs p-5 2xl:p-9 space-y-5'>
                                                    <div className="h-2 bg-slate-200 rounded"></div>
                                                    <div className="h-2 bg-slate-200 rounded"></div>
                                                    <div className="h-2 bg-slate-200 rounded"></div>
                                                    <div className="h-2 bg-slate-200 rounded"></div>
                                                    <div className="h-2 bg-slate-200 rounded"></div>
                                                    <div className="h-2 bg-slate-200 rounded"></div>
                                                    <div className="h-2 bg-slate-200 rounded"></div>

                                                </div>


                                                <div className='border-t p-6'>
                                                    {[1, 2].map((items, index) => (
                                                        <div className='flex w-full py-1 gap-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>

                                                            </div>
                                                            <div className='animate-pulse space-y-1'>
                                                                <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                                <div className="h-2 w-5 bg-slate-200 rounded"></div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='border-t p-6'>
                                                    {[1, 2].map((items, index) => (
                                                        <div className='flex w-full py-1 gap-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>

                                                            </div>
                                                            <div className='animate-pulse space-y-1'>
                                                                <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                                <div className="h-2 w-5 bg-slate-200 rounded"></div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='border-t p-6'>
                                                    {[1, 2].map((items, index) => (
                                                        <div className='flex w-full py-1 gap-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>

                                                            </div>
                                                            <div className='animate-pulse space-y-1'>
                                                                <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                                <div className="h-2 w-5 bg-slate-200 rounded"></div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='border-t p-6'>
                                                    {[1].map((items, index) => (
                                                        <div className='flex w-full py-1 gap-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>

                                                            </div>
                                                            <div className='animate-pulse space-y-1'>
                                                                <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                                <div className="h-2 w-5 bg-slate-200 rounded"></div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='border-t p-6'>
                                                    {[1].map((items, index) => (
                                                        <div className='flex w-full py-1 gap-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>

                                                            </div>
                                                            <div className='animate-pulse space-y-1'>
                                                                <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                                <div className="h-2 w-5 bg-slate-200 rounded"></div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>


                                                <div className='border-t p-6'>
                                                    {[1].map((items, index) => (
                                                        <div className='flex w-full py-1 gap-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>

                                                            </div>
                                                            <div className='animate-pulse space-y-1'>
                                                                <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                                <div className="h-2 w-5 bg-slate-200 rounded"></div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className='border-y p-6'>
                                                    <p className='text-center mb-4 bg-slate-200 h-2 w-16 rounded animate-pulse max-w-[300px] mx-auto' />
                                                    {[1, 2, 3].map((items, index) => (
                                                        <div className='flex w-full py-4 gap-x-6' key={index}>
                                                            <div className='w-6 h-6 animate-pulse bg-slate-200'>


                                                            </div>
                                                            <div className="h-2 w-24 bg-slate-200 rounded"></div>

                                                        </div>
                                                    ))}

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Skeleton
