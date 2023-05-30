import { React, useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as DomLink, NavLink } from 'react-router-dom';
import Logo from '../assets/bravewood.webp'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authSlice';
import { useGetUserDetailsQuery } from '../actions/authService';

const navigation = [
    { id: 1, name: 'My Qrs', href: "/dashboard/" },
    { id: 2, name: 'New Qr', href: "/create-qr/" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



function NavBar() {
    const [currentPage] = useState("");
    const dispatch = useDispatch()

    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        // perform a refetch every 15mins
        pollingInterval: 900000,
    })
    const [datum, setDatum] = useState({ data: { code: "" } })

    useEffect(() => {
        if (!isFetching) {
            setDatum(data)
        }

    }, [data, isFetching])

    // const authUser = useSelector(x => x.auth.user);
    // const dispatch = useDispatch();
    // const logout = () => dispatch(authActions.logout());

    // // only show nav when logged in
    // if (!authUser) return null;




    return (
        <Disclosure as="nav" className="bg-white xs:p-4 p-1 fixed w-screen z-50 block md:hidden shadow-xl ">
            {({ open }) => (
                <>
                    <div className="sm:mx-[30px] px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">



                            <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
                                <div className="flex items-center justify-start">
                                    <DomLink to='/'>
                                        <img className="block w-36 lg:hidden pl-2" src={Logo} alt="Novotel " />
                                        {/* <img className="hidden w-36 lg:block" src={Logo} alt="Novotel" /> */}
                                    </DomLink>


                                </div>

                            </div>

                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">

                                    {/* <Notification /> */}
                                    {/* <Profile logoutClick={logout} /> */}


                                </div>
                            </div>



                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-accelloBlue hover:bg-accelloBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accelloBlue">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>




                        </div>
                    </div>

                    <Disclosure.Panel className="relative sm:hidden h-screen z-[100]">
                        <div className="block space-y-6 px-2 pt-2 pb-3 mt-20">
                            {navigation.map((item) => (
                                <NavLink
                                    to={item.to}
                                    className={classNames('py-2 text-[25px] font-extrabold cursor-pointer opacity-50 px-4 flex', item.to === currentPage ? 'opacity-100 font-NexaBold border-r-[4px] border-r-accelloBlue' : ''
                                    )}
                                    key={item.id}
                                >
                                    <Disclosure.Button
                                        key={item.id}
                                        as="p" >
                                        {item.name}
                                    </Disclosure.Button>
                                </NavLink>
                            ))}
                            <NavLink className={classNames('py-2 text-[25px] font-extrabold cursor-pointer opacity-50 px-4 flex')} onClick={() => dispatch(logout())} >
                                <Disclosure.Button as="p" >
                                    Log out
                                </Disclosure.Button>
                            </NavLink>

                            <div className='px-4 py-2 absolute bottom-[200px]'>
                                {datum?.data?.superuser &&
                                    <p>{datum?.data?.code}</p>
                                }
                            </div>



                        </div>


                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar