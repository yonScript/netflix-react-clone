import { useState, useEffect } from "react";

// Style
import "./NavBar.css";

// Assets
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-left">
                <img src={logo} alt="Netflix Logo" />

                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>

            <div className="navbar-right">
                <img src={search_icon} alt="Search Icon" className="icons" />
                <p>Children</p>
                <img src={bell_icon} alt="Bell Icon" className="icons" />

                <div className="navbar-profile">
                    <img
                        src={profile_img}
                        alt="Profile Img"
                        className="profile"
                    />
                    <img src={caret_icon} alt="Caret Icon" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
