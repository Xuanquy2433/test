import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Features from "../MainPage/Features/Features";
import Footer from "../Footer/Footer";
// import { ToastContainer, toast } from 'react-toastify';
import Login from "../Login/Login";
import TopNavbar from "../Navbar/TopNavbar";
import HomePage from "../Pages/HomePage";
import Register from "../Register/Register";
import Basic from "../MainPage/Services/Pack/Basic";
import Diamond from "../MainPage/Services/Pack/Diamond";
import Gold from "../MainPage/Services/Pack/Gold";


const RouterScreen = () => {
    return (
        <Router>
            {/* <ToastContainer /> */}
            <TopNavbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/basic" element={<Basic/>} />
                <Route path="/gold" element={<Gold/>} />
                <Route path="/diamond" element={<Diamond/>} />

            </Routes>
            <Footer/>
        </Router >

    )
}

export default RouterScreen;
