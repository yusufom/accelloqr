import React from 'react'
import { BsGlobe, BsFacebook, BsTwitter } from 'react-icons/bs'
import { FiPhoneCall, FiMail, FiUserPlus } from 'react-icons/fi'
import { FaHome, FaSuitcase } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { BiMobile } from 'react-icons/bi'
import Avatar from '../../assets/2.png'

function ViewEmployee() {
    return (
        <div className='w-full z-[2] flex flex-col relative h-screen'>


            <div className='relative'>

                <div className=''>

                    <div className='w-full h-full '>

                        <div className='w-full flex justify-center'>
                            <div className='bg- h-full w-full flex bg-inherit items-center flex-col '>
                                <div className='w-full'>
                                    <div className='bg-primary w-full flex items-center flex-col h-[400px] 2xl:h-[500px]'>
                                        <div className='p-1 border-4 border-secondary mt-[80px] 2xl:mt-[100px] rounded-full flex items-center justify-center bg-white flex-row'>
                                            <div className='w-[160px] h-[160px] 2xl:w-[180px] 2xl:h-[180px] flex overflow-hidden items-center rounded-full flex-row justify-center'>
                                                <img src={Avatar} alt="" />
                                            </div>
                                        </div>
                                        <h1 className='text-white text-lg 2xl:text-2xl font-bold mt-1'>Olamilekan Muktar</h1>
                                        <p className='text-white text-sm 2xl:mt-2 text-center'>Software Developer</p>

                                        <div className='gap-1 flex mt-4 flex-row justify-center items-start'>

                                            <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                <button className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                    <FiPhoneCall className='text-white h-5 w-5' />
                                                </button>
                                                <p className='text-white 2xl:mt-1 text-sm'>Call</p>
                                            </div>

                                            <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                <button className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                    <FiMail className='text-white h-5 w-5' />
                                                </button>
                                                <p className='text-white 2xl:mt-1 text-sm'>Email</p>
                                            </div>

                                            <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                <button className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                    <MdLocationPin className='text-white h-5 w-5' />
                                                </button>
                                                <p className='text-white 2xl:mt-1 text-sm'>Location</p>
                                            </div>

                                        </div>

                                        <div className='w-full my-0 mx-auto max-w-[500px] flex flex-col bg-white h-full mt-6'>


                                            <div className='2xl:text-sm text-xs p-5 2xl:p-9'>
                                                More than fifteen years of experience in the technology sector working for the most important companies: AME, Sternac, Riketan. Open to listening to innovative proposals.
                                            </div>


                                            {/* contact section start */}
                                            <div className='border-t p-6'>
                                                <div className='flex w-full py-1 gap-6'>
                                                    <div className='w-5 h-5'>
                                                        <BiMobile className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>08183004404</a>
                                                        <p className='text-sm text-black/40'>Mobile Phone</p>
                                                    </div>
                                                </div>

                                                <div className='flex w-full py-1 gap-6'>
                                                    <div className='w-5 h-5'>
                                                        <FaHome className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>08183004404</a>
                                                        <p className='text-sm text-black/40'>Home</p>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* contact section end */}

                                            {/* email section start */}
                                            <div className='border-t p-6'>
                                                <div className='flex w-full py-1 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <FiMail className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>hi@gmail.com</a>
                                                        <p className='text-sm text-black/40'>Work email</p>
                                                    </div>
                                                </div>

                                                <div className='flex w-full py-1 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <FiMail className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>hello@overwood.ng</a>
                                                        <p className='text-sm text-black/40'>Personal Email</p>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* email section end */}

                                            {/* website section start */}
                                            <div className='border-t p-6'>
                                                <div className='flex w-full py-1 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <BsGlobe className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>www.hi.com</a>
                                                        <p className='text-sm text-black/40'>Website</p>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* website section end */}

                                            {/* Location section start */}
                                            <div className='border-t p-6'>
                                                <div className='flex w-full py-1 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <MdLocationPin className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>15 adeleke street</a>
                                                        <p className='text-sm text-black/40'>Home address</p>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* Location section end */}

                                            {/* Company section start */}
                                            <div className='border-t p-6'>
                                                <div className='flex w-full py-1 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <FaSuitcase className='w-6 h-6' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='text-sm md:text-base'>Overwood Investments</a>
                                                        <p className='text-sm text-black/40'>Software Developer</p>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* Company section end */}

                                            {/* Socials section start */}
                                            <div className='border-y p-6'>
                                                <p className='text-center mb-4'>Find me on:</p>
                                                <div className='flex w-full py-4 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <BsFacebook className='w-8 h-8 text-primary' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='font-bold'>Facebook</a>
                                                    </div>
                                                </div>

                                                <div className='flex w-full py-4 gap-x-6'>
                                                    <div className='w-5 h-5'>
                                                        <BsTwitter className='w-8 h-8 text-primary/70' />
                                                    </div>
                                                    <div className=''>
                                                        <a href="/" className='font-bold'>Twitter</a>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* Socials section end */}

                                            <div className='p-6 mb-12 max-w-[400px] mx-auto'>
                                                <button className='text-center flex justify-center items-center gap-3 bg-secondary py-4 px-10 rounded-full text-white text-base font-bold shadow-xl'><FiUserPlus />add Contact</button>
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

export default ViewEmployee