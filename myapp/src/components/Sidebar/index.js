import {Link, NavLink} from "react-router-dom"
import "./index.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,   faUser, faBars} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useState } from "react"


library.add(fas, faTwitter, faFontAwesome)


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link to="/" className="logo" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon="fa-solid fa-n" style={{color: "#ffd700", "text-decoration": "none"}} className="im" />
                <h1 className="head">Naveen</h1>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                    >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" 
                        href="https://www.linkedin.com/in/naveen-chakala-01108b221"
                        rel="noreferrer"
                        className="lin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" 
                        href="https://github.com/Naveenreigns1505"
                        rel="noreferrer"
                        className="lin"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar