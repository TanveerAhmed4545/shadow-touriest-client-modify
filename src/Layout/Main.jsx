import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import CustomCursor from "../components/Shared/CustomCursor";
import ScrollProgress from "../components/Shared/ScrollProgress";


const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            <ScrollProgress />
            <CustomCursor />
            <ScrollRestoration />
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;