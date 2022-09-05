import "./Nav.css"

const NavRight = () => {
    return (
        <>
            <div className="d-flex justify-content-end align-items-center h-100">
                <button className="btn-right-rounded"> <img height="30" width="30" alt="menu" src="https://img.icons8.com/ios-glyphs/30/000000/circled-menu.png" /></button>
                <button className="btn-right-rounded"> <img height="20" width="20" alt="messenger" src="https://img.icons8.com/material-rounded/48/000000/facebook-messenger--v1.png" /></button>
                <button className="btn-right-rounded"> <img height="20" width="20" alt="notification" src="https://img.icons8.com/metro/26/000000/appointment-reminders.png" /></button>
                <img height="40" width="40" alt="profile" className="rounded-circle m-1" src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/100670822_363325067979607_4059718317856784384_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGToiOu1kfi3ZKpyV6cfJ3isdnxKQRs79Ox2fEpBGzv04QIk6VHUP7b-C4kZ6BiT5sq34icMFG4EKjHs6vdROCh&_nc_ohc=HvBfLmNIPSEAX__NpWc&_nc_ht=scontent.fdac135-1.fna&oh=00_AT8lPrI_Z49qaym7IIG9WT41F_7BaiaKHwjqxecIUqTGcA&oe=633C70D4" />
            </div>
        </>
    )
}
export default NavRight