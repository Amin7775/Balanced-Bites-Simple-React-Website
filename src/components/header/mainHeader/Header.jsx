import Navbar from "../Nav/Navbar";
import Banner from "../banner/Banner";



const Header = () => {
    return (
        <div>
            <div className="mb-12">
            <Navbar></Navbar>
            </div>
            <div className="mb-12">
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;