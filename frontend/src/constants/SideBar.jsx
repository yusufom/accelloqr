import React from 'react'
import Logo from '../assets/bravewood.webp'
import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";





const navigation = [
  { id: 1, name: 'Dashboard', href: "/dashboard", icon: <BiHome className='h-5 w-5 -mr-3' />, },
  { id: 2, name: 'New Qr', href: "/createqr", icon: <BsPencilSquare className='h-5 w-5 -mr-3' />, },
]

const SideBar = (props) => {

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;
    const myArray = newPage.split("/")
    const newPagePath = "/" + myArray[1]

    setCurrentPage(newPagePath);
  }, [setCurrentPage]);
  return (
    <Sidebar collapsed={props.collapsed} className='fixed left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 ' >
      <div className="flex h-full justify-between py-2 w-[270px]">
        <div>
          <Sidebar.Items className='px-6'>
            <img src={Logo} alt="bravewood" className='w-48' />
            <Sidebar.ItemGroup className='pt-10'>
              {navigation.map((item) => (
                <div key={item.id} className={`${item.href === currentPage ? "bg-primary-50 py-2  rounded-lg text-primary-600 flex items-center " : "text-gray-500"}`}>
                  <div className={`flex items-center px-5 hover:bg-primary-50 gap-x-4 ${item.href === currentPage ? "text-primary-600" : ""}`} id='Sidebar'>
                    {item.icon}
                    <Sidebar.Item
                      href={item.href}
                      className={`py-2 hover:bg-transparent rounded-lg ${item.href === currentPage ? "text-primary-600" : ""}`}
                    >

                      {item.name}
                    </Sidebar.Item>
                  </div>
                </div>
              ))}
            </Sidebar.ItemGroup>

          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  )
}

export default SideBar