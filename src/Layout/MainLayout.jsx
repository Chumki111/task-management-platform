import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-2 py-2">
            <Navbar/>
            <div className='min-h-[calc(100vh-91px)]'>
            <Outlet />
            </div>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;