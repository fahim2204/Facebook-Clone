import "./Nav.css"
import {userDummyApi} from "../../api/userPosts"

const NavRight = () => {
    return (
        <>
            <div className="d-flex justify-content-end align-items-center h-100">
                <button className="btn-right-rounded"> <img height="30" width="30" alt="menu" src="https://img.icons8.com/ios-glyphs/30/000000/circled-menu.png" /></button>
                <button className="btn-right-rounded"> <img height="20" width="20" alt="messenger" src="https://img.icons8.com/material-rounded/48/000000/facebook-messenger--v1.png" /></button>
                <button className="btn-right-rounded"> <img height="20" width="20" alt="notification" src="https://img.icons8.com/metro/26/000000/appointment-reminders.png" /></button>
                <img height="40" width="40" alt="profile" className="rounded-circle m-1 flex-shrink-0" src={userDummyApi.user.profile_picture} />
            </div>
        </>
    )
}
export default NavRight