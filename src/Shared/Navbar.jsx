import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const navLinks = <>

    {/*  */}
    <NavLink
      to="/"
      className="nav"
    >
      Home
    </NavLink>


  </>
  return (
    <div>
      <div className="navbar rounded-md text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="navbar-end lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-xl menu-md dropdown-content mt-3 z-[1] p-2  w-52">

              {navLinks}
            </ul>
          </div>
          <a className="font-bold text-2xl px-3 cursor-pointer animate-bounce ">Task <span className="border-2 border-red-600 px-3 py-2">Management</span> </a>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal font-medium text-base px-3">
            {navLinks}


            {
              user ? <>
                <Link to='/dashboard'>
                  <button className="cursor-pointer nav">Dashboard</button>
                </Link>
                <button onClick={handleLogOut} className="cursor-pointer nav">LogOut</button>
                <div className="avatar mx-5">
                  <div className="w-10 rounded-full cursor-pointer">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </> : <>


                <Link to='/login'>
                  <button className="cursor-pointer">Login</button>
                </Link>
              </>
            }

            {!user && (


              <div className="avatar mx-5">
                <div className="w-10 rounded-full cursor-pointer">
                  <img src='https://i.ibb.co/rpdcRzH/businessman-working-laptop-computer-office-3d-character-isolated-white-background-40876-3756.jpg' />
                </div>
              </div>

            )}
          </ul>
        </div>
        <div className="">

        </div>
      </div>
    </div>

  );
};

export default Navbar;