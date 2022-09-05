import NavLeft from "./Nav/NavLeft"
import NavMiddle from "./Nav/NavMiddle"
import NavRight from "./Nav/NavRight"

const Header = () => {
    return (
        <>
            <nav className="container-fluid d-flexs shadow-sm fixed-top">
                <NavLeft />
                <NavMiddle />
                <NavRight />
            </nav>
        </>
    );
};

export default Header;