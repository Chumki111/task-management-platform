import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import UserProfile from "./UserProfile";
// icons
import { AiOutlineBars } from 'react-icons/ai'
import { FcSettings } from 'react-icons/fc'
import { SiTask } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { GrFormPreviousLink } from "react-icons/gr";
const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
        {/* Small Screen Navbar */}
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
            <div>
               
            </div>

            <button
      onClick={handleToggle}
      className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
    >
      <AiOutlineBars className='h-5 w-5' />
    </button>
        </div>
        {/* Sidebar */}
        <div
            className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
            <div>
                {/* user Profile */}
                <div>
                   <Link to='/'>
                  <UserProfile/>
                    </Link>
                </div>

                {/* divider */}
                <div className="divider"></div> 

                {/* Nav Items */}
                <div className='flex flex-col justify-between flex-1'>
                <nav>
                        {/* Menu Items */}
                        <MenuItem
                    icon={FaHome }
                    label='Task Management'
                    address='/dashboard'
                />
                    
                        <MenuItem
                    icon={SiTask }
                    label='Create New Task'
                    address='/dashboard/newTask'
                />
                  
                       
                  

                    </nav>
                </div>
            </div>

            <div>
                <hr />

                <MenuItem
                    icon={FcSettings}
                    label='Profile'
                    address='/dashboard/profile'
                />

            </div>
        </div>
    </>
    );
};

export default Sidebar;