import React from 'react'
import { BsGlobe, BsBriefcaseFill } from 'react-icons/bs'
import { FiPhoneCall, FiMail, FiUserPlus } from 'react-icons/fi'
import { FaHome, FaSuitcase, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { BiMobile } from 'react-icons/bi'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import Skeleton from '../../components/Skeleton'
import ErrorPage from '../../components/ErrorPage'
import { saveAs } from 'file-saver';
import Bravewood from '../../assets/bravewood.png';


function ViewEmployee() {
    const { ref } = useParams();


    const { data, isLoading, error } = useFetch(ref)



    if (isLoading) {
        return <Skeleton />;
    }

    if (error) {
        return <ErrorPage error={error.data} />;

    }

    const handleDownload = () => {
        const clientData = {
            surname: data?.surname,
            firstname: data.firstName,
            email: data?.email_employee[0].email,
            phone: data?.telephone_employee[0].phone,
            company: data?.company,
            website: data?.website_employee[0].url,
            address: data?.address,
            title: data?.position,
        };

        const vCardData = `BEGIN:VCARD\nVERSION:3.0\nN:${clientData.surname};${clientData.firstname}\nEMAIL:${clientData.email}\nTEL;WORK:${clientData.phone}\nORG:${clientData.company}\nURL;WORK:${clientData.website}\nADR;WORK:${clientData.address}\nTITLE:${clientData.title}\nEND:VCARD`;
        const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
        saveAs(blob, `${data?.surname}_contact_details.vcf`);
    };
    return (
        <div className='w-full z-[2] flex flex-col relative h-screen'>
            {data &&
                (
                    <div className='relative'>

                        <div className=''>

                            <div className='w-full h-full '>

                                <div className='w-full flex justify-center'>
                                    <div className='bg- h-full w-full flex bg-inherit items-center flex-col '>
                                        <div className='w-full'>
                                            <div className='bg-primary w-full flex items-center flex-col h-[400px] 2xl:h-[500px]'>
                                                <img src={Bravewood} alt="bravewood logo" className='max-w-[500px] mx-auto mt-7 w-[150px]' />
                                                <div className='p-1 border-4 border-secondary mt-[80px] 2xl:mt-[100px] rounded-full flex items-center justify-center bg-white flex-row'>
                                                    <div className='w-[160px] h-[160px] 2xl:w-[180px] 2xl:h-[180px] flex overflow-hidden items-center rounded-full flex-row justify-center'>
                                                        <img src={`${process.env.REACT_APP_HOST_NAME}${data?.avatar}`} alt="" />
                                                    </div>
                                                </div>
                                                <h1 className='text-white text-lg 2xl:text-2xl font-bold mt-1'>{data?.surname} {data?.firstName}</h1>
                                                <p className='text-white text-sm 2xl:mt-2 text-center'>{data?.position}</p>

                                                <div className='gap-1 flex mt-4 flex-row justify-center items-start'>
                                                    {data.telephone_employee[0]?.phone !== '' && (
                                                        <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                            <a href={`tel:${data?.telephone_employee[0].phone}`} className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                                <FiPhoneCall className='text-white h-5 w-5' />
                                                            </a>
                                                            {/* <p className='text-white 2xl:mt-1 text-sm'>Call</p> */}
                                                        </div>
                                                    )}

                                                    {data?.email_employee[0].email !== '' && (
                                                        <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                            <a href={`mailto:${data?.email_employee[0].email}`} className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                                <FiMail className='text-white h-5 w-5' />
                                                            </a>
                                                            {/* <p className='text-white 2xl:mt-1 text-sm'>Email</p> */}
                                                        </div>
                                                    )}

                                                    {data?.address !== '' && (

                                                        <div className='inline-flex min-w-[72px] items-center flex-col justify-center'>
                                                            <a href={`http://maps.google.com/?q=${data?.address}`} className='bg-secondary w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-lg'>
                                                                <MdLocationPin className='text-white h-5 w-5' />
                                                            </a>
                                                            {/* <p className='text-white 2xl:mt-1 text-sm'>Location</p> */}
                                                        </div>
                                                    )}


                                                </div>

                                                <div className='w-full my-0 mx-auto max-w-[500px] flex flex-col bg-white h-full mt-6'>


                                                    <div className='2xl:text-sm text-xs p-5 2xl:p-9'>
                                                        {data?.summary}
                                                    </div>


                                                    {/* contact section start */}
                                                    {data?.telephone_employee[0].type !== '' &&

                                                        <div className='border-t p-6'>
                                                            {data?.telephone_employee?.map((items, index) => (
                                                                <div className='flex w-full py-1 gap-6 items-center' key={index}>
                                                                    <div className='text-secondary w-6 h-6'>
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
                                                                        <a href={`tel:${items.phone}`} className='text-sm md:text-base'>{items.phone}</a>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    }
                                                    {/* contact section end */}

                                                    {/* email section start */}
                                                    {data?.email_employee[0].email !== '' &&
                                                        <div className='border-t p-6'>
                                                            {data?.email_employee?.map((items, index) => (
                                                                <div className='flex w-full py-1 gap-x-6 items-center' key={index}>
                                                                    <div className='w-7 h-7'>
                                                                        {items.email &&
                                                                            <FiMail className='text-secondary w-7 h-7' />
                                                                        }
                                                                    </div>
                                                                    <div className=''>
                                                                        <p className='text-sm text-black/40'>Email</p>
                                                                        <a href={`mailto:${items.email}`} className='text-sm md:text-base'>{items.email}</a>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    }
                                                    {/* email section end */}

                                                    {/* website section start */}
                                                    {data?.website_employee[0].url !== '' &&

                                                        <div className='border-t p-6'>
                                                            {data?.website_employee?.map((items, index) => (

                                                                <div className='flex w-full py-1 gap-x-6' key={index}>
                                                                    <div className='w-7 h-7'>
                                                                        {items.url &&
                                                                            <BsGlobe className='text-secondary w-7 h-7' />
                                                                        }
                                                                    </div>
                                                                    <div className=''>
                                                                        <p className='text-sm text-black/40'>Website</p>
                                                                        <a href={`${items.url}`} className='text-sm md:text-base'>{items.url}</a>
                                                                    </div>
                                                                </div>
                                                            ))}


                                                        </div>
                                                    }
                                                    {/* website section end */}

                                                    {/* Location section start */}
                                                    {data?.address !== '' && (

                                                        <div className='border-t p-6'>
                                                            <div className='flex w-full py-1 gap-x-6 items-center'>
                                                                <div className='w-7 h-7'>
                                                                    <MdLocationPin className='text-secondary w-7 h-7' />
                                                                </div>
                                                                <div className=''>
                                                                    <p className='text-sm text-black/40'>Company's address</p>
                                                                    <a href={`http://maps.google.com/?q=${data?.address}`} className='text-sm md:text-base'>{data?.address}</a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )}
                                                    {/* Location section end */}

                                                    {/* Company section start */}
                                                    {data?.company &&
                                                        <div className='border-t p-6'>
                                                            <div className='flex w-full py-1 gap-x-6 items-center'>
                                                                <div className='w-7 h-7'>
                                                                    <FaSuitcase className='text-secondary w-7 h-7' />
                                                                </div>
                                                                <div className=''>
                                                                    <a href="/" className='text-sm md:text-base'>{data?.company}</a>
                                                                    <p className='text-sm text-black/40'>{data?.position}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    }
                                                    {/* Company section end */}

                                                    {/* Socials section start */}
                                                    {data?.socials_employee[0].type !== '' &&

                                                        <div className='border-y p-6'>
                                                            <p className='text-center mb-4'>Find us on:</p>
                                                            <div className='grid grid-cols-2 gap-3'>
                                                                {data?.socials_employee?.map((items, index) => (
                                                                    <div className='flex w-full py-4 gap-x-6' key={index}>
                                                                        <div className='w-8 h-8 bg-primary p-1 rounded-lg flex items-center justify-center'>
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
                                                                            <a href={`${items.url}`} className=''>{items.type}</a>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>


                                                        </div>
                                                    }
                                                    {/* Socials section end */}

                                                    {/* <button onClick={handleDownload}> */}

                                                    <div className='p-6 mb-12 max-w-[400px] mx-auto'>
                                                        <button className='text-center flex justify-center items-center gap-3 bg-secondary py-4 px-10 rounded-lg text-white text-base font-bold shadow-xl' onClick={handleDownload}><FiUserPlus />Add Contact</button>
                                                    </div>

                                                    {/* </button> */}


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



        </div>

    )
}

export default ViewEmployee