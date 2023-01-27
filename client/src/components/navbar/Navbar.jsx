import "./navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

    const {user} = useContext(AuthContext)

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                    <span className="logo">MoyartBooking</span>
                </Link>
                {user ? user.details.username :
                (<div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">LogIn</button>
                </div>)}
                
            </div>
        </div>
    )
}

export default Navbar;