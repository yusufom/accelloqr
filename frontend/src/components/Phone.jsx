import React from 'react'
import { BsFillBarChartFill, BsWifi, BsBatteryHalf, BsGlobe, BsBriefcaseFill } from 'react-icons/bs'
import { FiPhoneCall, FiMail, FiUserPlus } from 'react-icons/fi'
import { FaHome, FaSuitcase, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { BiMobile } from 'react-icons/bi'
import Avatar from '../assets/profile.webp'
import Bravewood from '../assets/bravewood.png';



function Phone({ data, edit }) {
    return (
        <div className='w-full z-[2] overflow-hidden flex flex-col relative max-w-[250px] h-[503px] 2xl:h-[725px] 2xl:max-w-[360px] '>
            <div className='bg-iphone w-[250px] h-[503px] bg-cover top-0 absolute left-0 z-[-1] bg-no-repeat 2xl:h-[725px] 2xl:w-[360px]' />


            <div className='absolute top-0 left-0 w-full h-6 flex z-[10] items-center justify-center'>
                <p className='top-[27px] absolute left-[35px] text-[8px] leading-[6px] text-white 2xl:top-[38px] 2xl:left-[50.4px] 2xl:text-[11px] 2xl:leading-[7px]'>9:41</p>
                <div className='top-[19px] left-[91px] w-[68px] h-5 z-[2] absolute rounded-[10000px] bg-black 2xl:top-[27.36px] 2xl:left-[131px] 2xl:h-[29px] 2xl:w-[98px]' />
                <div className='top-6 left-[143px] w-2.5 h-2.5 absolute bg-camera 2xl:top-[35px] 2xl:left-[205px] 2xl:w-3.5 2xl:h-3.5' />
                <div className='top-[26px] left-[145px] w-1.5 h-1.5 hidden absolute bg-black 2xl:top-[37.33px] 2xl:left-[209px] 2xl:w-2 2xl:h-2 ' />
                <div className='top-[26px] left-[144px] w-[1.6px] h-[3px] blur-[0.6px] z-[2] absolute bg-primary/70 rotate-[-135deg] 2xl:top-[38px] 2xl:left-[207px] 2xl:w-0.5 2xl:h-1 ' />
                <div className='top-[26px] left-[148px] w-[2.3px] h-[3px] blur-[1.13px] z-[2] absolute bg-primary  2xl:top-[38px] 2xl:left-[213px] 2xl:w-1 2xl:h-1 ' />
                <div className='top-[30px] left-[145px] w-[5px] h-[2px] blur-[0.9px] z-[2] absolute bg-primary/80  2xl:top-[42px] 2xl:left-[209px] 2xl:w-2 2xl:h-1 ' />
                <BsFillBarChartFill className='text-white absolute top-[26px] left-[177.24px] z-[2] rounded-sm h-[8px] 2xl:top-[35px] 2xl:h-[12px] 2xl:left-[255px]' />
                <BsWifi className='text-white absolute top-[24px] left-[192.24px] z-[2] rounded-sm h-[12px] 2xl:top-[33px] 2xl:h-[15px] 2xl:left-[273px]' />
                <BsBatteryHalf className='text-white absolute top-[24px] left-[207.24px] z-[2] rounded-sm h-[12px] 2xl:top-[30px] 2xl:h-[20px] 2xl:left-[298px]' />

            </div>
            <div className='relative flex-grow overflow-y-auto overflow-x-hidden  rounded-[32px] my-[11px] mx-[12px] 2xl:rounded-[44px] 2xl:my-[17px] 2xl:mx-[18px] no-scrollbar'>

                <div className='h-[100%] relative z-[2] scale-[0.8] w-[125%] -top-[12.5%] -left-[12%] 2xl:-top-[12.5%] 2xl:-left-[12%]'>

                    <div className='w-full h-full '>
                        {/* <a href="/" className='fixed w-9 h-9 2xl:w-12 2xl:h-12 bg-secondary items-center flex justify-center -bottom-32 2xl:-bottom-44 2xl:right-6 right-5 rounded-full'>
                            <FiUserPlus className='text-white w-24' />
                        </a> */}

                        <div className='break-words w-full flex  justify-center'>
                            <div className='bg-white h-full w-full flex bg-inherit items-center flex-col min-h-screen '>
                                <div className='w-full'>
                                    <div className='bg-primary w-full flex items-center flex-col h-[300px] 2xl:h-[370px]'>
                                        <img src={Bravewood} alt="bravewood logo" className='max-w-[500px] mx-auto mt-7 w-[100px]' />

                                        <div className='w-[80px] h-[80px] 2xl:w-[100px] 2xl:h-[100px] border-4 border-secondary mt-[80px] 2xl:mt-[100px] rounded-full flex items-center justify-center bg-white flex-row'>
                                            <div className='w-[70px] h-[70px] 2xl:w-[90px] 2xl:h-[90px] flex overflow-hidden items-center rounded-full flex-row justify-center'>
                                                {edit ?
                                                    <img src={`${process.env.REACT_APP_HOST_NAME}${data?.avatar}`} alt="" /> :
                                                    data.avatar ?
                                                        <img src={URL.createObjectURL(data.avatar)} alt="" /> :
                                                        <img src={Avatar} alt="Standin profile" />

                                                }
                                            </div>

                                        </div>
                                        <h1 className='text-white text-lg 2xl:text-2xl font-bold mt-1'>{data.surname} {data.firstName}</h1>
                                        <p className='text-white text-sm 2xl:mt-2 text-center'>{data.position}</p>

                                        <div className='gap-1 flex mt-4 flex-row justify-center items-start'>

                                            {data.telephone_employee[0].phone !== '' && (
                                                <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                    <button className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                        <FiPhoneCall className='text-white h-5 w-5' />
                                                    </button>
                                                    {/* <p className='text-white 2xl:mt-1 text-[11px]'>Call</p> */}
                                                </div>
                                            )}

                                            {data.email_employee[0].email !== '' && (

                                                <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                    <button className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                        <FiMail className='text-white h-5 w-5' />
                                                    </button>
                                                    {/* <p className='text-white 2xl:mt-1 text-[11px]'>Email</p> */}
                                                </div>
                                            )}

                                            {data.address !== '' && (
                                                <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                    <button className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                        <MdLocationPin className='text-white h-5 w-5' />
                                                    </button>
                                                    {/* <p className='text-white 2xl:mt-1 text-[11px]'>Location</p> */}
                                                </div>
                                            )}


                                        </div>

                                        <div className='w-full my-4 mx-auto max-w-[400px] flex flex-col bg-white'>


                                            <div className='2xl:text-sm text-xs p-5 2xl:p-9 w-screen 2xl:max-w-[400px] max-w-[250px] '>
                                                <p className='w-full text-justify'>{data.summary}</p>

                                            </div>


                                            {/* contact section start */}
                                            <div className='border-t p-6'>
                                                {data.telephone_employee?.map((items, index) => (
                                                    <div className='flex w-full py-1 gap-6 items-center' key={index}>
                                                        <div className='w-7 h-7'>
                                                            {items.type === 'Mobile' ?
                                                                (<BiMobile className='text-secondary w-7 h-7' />) :
                                                                items.type === 'Home' ?
                                                                    (<FaHome className='text-secondary w-7 h-7' />) :
                                                                    items.type === 'Work' ?
                                                                        (<BsBriefcaseFill className='text-secondary w-7 h-7' />) :
                                                                        ('')

                                                            }

                                                        </div>
                                                        <div className=''>
                                                            <p className='text-sm text-black/40'>{items.type}</p>
                                                            <a href="/" className='text-sm md:text-base'>{items.phone}</a>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                            {/* contact section end */}

                                            {/* email section start */}
                                            <div className='border-t p-6'>
                                                {data.email_employee?.map((items, index) => (

                                                    <div className='flex w-full py-1 gap-x-6 items-center' key={index}>
                                                        <div className='text-secondary w-7 h-7'>
                                                            {items.email &&
                                                                <FiMail className='text-secondary w-7 h-7' />
                                                            }
                                                        </div>
                                                        <div className=''>
                                                            <p className='text-sm text-black/40'>Email</p>
                                                            <a href="/" className='text-sm md:text-base'>{items.email}</a>
                                                        </div>
                                                    </div>
                                                ))}


                                            </div>
                                            {/* email section end */}

                                            {/* website section start */}
                                            <div className='border-t p-6'>
                                                {data.website_employee?.map((items, index) => (

                                                    <div className='flex w-full py-1 gap-x-6 items-center' key={index}>
                                                        <div className='w-7 h-7'>
                                                            {items.name &&
                                                                <BsGlobe className='text-secondary w-7 h-7' />
                                                            }
                                                        </div>
                                                        <div className=''>
                                                            <p className='text-sm text-black/40'>Website</p>
                                                            <a href="/" className='text-sm md:text-base'>{items.url}</a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* website section end */}

                                            {/* Location section start */}
                                            {data.address !== '' && (
                                                <div className='border-t p-6'>
                                                    <div className='flex w-full py-1 gap-x-6 items-center'>
                                                        <div className='w-7 h-7'>
                                                            <MdLocationPin className='text-secondary w-7 h-7' />
                                                        </div>
                                                        <div className=''>
                                                            <p className='text-sm text-black/40'>Company address</p>
                                                            <a href="/" className='text-sm md:text-base'>{data.address}</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )}

                                            {/* Location section end */}

                                            {/* Company section start */}
                                            {data.company &&
                                                <div className='border-t p-6'>
                                                    <div className='flex w-full py-1 gap-x-6'>
                                                        <div className='w-7 h-7'>
                                                            <FaSuitcase className='text-secondary w-7 h-7' />
                                                        </div>
                                                        <div className=''>
                                                            <a href="/" className='text-sm md:text-base'>{data.company}</a>
                                                            <p className='text-sm text-black/40'>{data.position}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            }

                                            {/* Company section end */}

                                            {/* Socials section start */}
                                            <div className='border-y p-6'>
                                                <p className='text-center mb-4'>Find me on:</p>
                                                <div className='grid grid-cols-2 gap-3'>
                                                    {data.socials_employee?.map((items, index) => (
                                                        <div className='flex w-full py-4 gap-x-6' key={index}>
                                                            <div className='w-8 h-8 bg-primary p-1 rounded-md flex items-center justify-center'>
                                                                {items.type === 'Facebook' ?
                                                                    (<FaFacebookF className='w-5 h-5 text-white' />) :
                                                                    items.type === 'Twitter' ?
                                                                        (<FaTwitter className='w-5 h-5 text-white' />) :
                                                                        items.type === 'Instagram' ?
                                                                            (<FaInstagram className='w-5 h-5 text-white' />) :
                                                                            items.type === 'Github' ?
                                                                                (<FaGithub className='w-5 h-5 text-white' />) :
                                                                                items.type === 'Linkedin' ?
                                                                                    (<FaLinkedinIn className='w-5 h-5 text-white' />) :
                                                                                    ('')
                                                                }

                                                            </div>
                                                            <div className=''>
                                                                <a href="/" className=''>{items.type}</a>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </div>


                                            </div>
                                            {/* Socials section end */}

                                            <div className='p-6 my-[30px] max-w-[400px] mx-auto'>
                                                <button className='text-center flex justify-center items-center gap-3 bg-secondary py-4 px-10 rounded-lg text-white text-base font-bold shadow-xl'><FiUserPlus />Add Contact</button>
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

export default Phone