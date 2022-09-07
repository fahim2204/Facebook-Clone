import NavLeft from "./Nav/NavLeft"
import NavMiddle from "./Nav/NavMiddle"
import NavRight from "./Nav/NavRight"

const Header = () => {
    return (
        <>
            <nav className="container-fluid bg-white shadow-sm fixed-top">
                <div className="row d-flex justify-content-evenly ">
                    <div className="order-0 order-sm-0 col-6 col-sm-2 col-md-4 col-lg-3"> <NavLeft /></div>
                    <div className="order-1 order-sm-1 col-12 col-sm-7 col-md-4 col-lg-6"><NavMiddle /></div>
                    <div className="order-0 order-sm-2 col-6 col-sm-3 col-md-4 col-lg-3"><NavRight /></div>
                </div>
            </nav>
        </>
    );
};

export default Header;