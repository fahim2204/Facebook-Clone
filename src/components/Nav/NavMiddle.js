import "./Nav.css"
const NavMiddle = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-evenly h-100 mb-3 mb-sm-0">
                <div className="menu-item-hover h-100 w-100 d-flex justify-content-center align-items-center active"><img height="28" width="28" alt="menu" src="https://img.icons8.com/laces/64/1B74E4/home.png" /></div>
                <div className="menu-item-hover h-100 w-100 d-flex justify-content-center align-items-center"><img height="28" width="28" alt="menu" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/96/000000/external-friends-social-media-interface-anggara-basic-outline-anggara-putra.png" /></div>
                <div className="menu-item-hover h-100 w-100 d-flex justify-content-center align-items-center"><img height="28" width="28" alt="menu" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/96/000000/external-video-social-media-interface-anggara-basic-outline-anggara-putra.png" /></div>
                <div className="menu-item-hover h-100 w-100 d-flex justify-content-center align-items-center"><img height="28" width="28" alt="menu" src="https://img.icons8.com/dotty/80/000000/shop.png" /></div>
                <div className="menu-item-hover h-100 w-100 d-flex justify-content-center align-items-center"><img height="28" width="28" alt="menu" src="https://img.icons8.com/ios/50/000000/facebook-gaming.png" /></div>
                <div className="menu-item-hover h-100 w-100 d-flex justify-content-center align-items-center d-block d-md-none"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img height="28" width="28" alt="menu" src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" />
                </button>
                </div>
            </div>
        </>
    )
}
export default NavMiddle