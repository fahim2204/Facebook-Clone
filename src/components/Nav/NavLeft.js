const NavLeft = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <img className="m-1" height="45" width="45" alt="logo" src="https://img.icons8.com/fluency/144/000000/facebook-new.png" />
                <input type="text" className="d-none d-md-block my-2 me-4 ps-3 form-control rounded-5 bg-light" name="search" id="search" placeholder="Search Facebook"/>
                <img className="d-block d-md-none ms-2 p-1 rounded-circle bg-light shadow-sm" height="30" width="30" alt="search" src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png"/>
            </div>
        </>
    )
}
export default NavLeft