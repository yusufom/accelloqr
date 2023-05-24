import {React } from 'react'
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Main from './Main';



function NavSide({children}) {
    // const [collapsed, setCollapsed] = useState(false);
  return (
    <div className='text-gray-600'>
        <NavBar />
        <div className="flex items-start">
          <SideBar/>
          <Main >{children}</Main>
        </div>
      </div>
  )
}




export default NavSide