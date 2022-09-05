import NavLeft from "./Nav/NavLeft"
import NavMiddle from "./Nav/NavMiddle"
import NavRight from "./Nav/NavRight"

const Header = () => {
    return (
        <>
            <nav className="container-fluid bg-white shadow-sm fixed-top">
                <div className="row d-flex justify-content-evenly ">
                    <div className="col-3"> <NavLeft /></div>
                    <div className="col-6"><NavMiddle /></div>
                    <div className="col-3"><NavRight /></div>
                </div>
            </nav>
        </>
    );
};

export default Header;