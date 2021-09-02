import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/color-logo.png';


const Footer = (props) => {
    const menus = [
        { name: "FAQ" },
        { name: "Terms and Services" },
        { name: "Privacy and Policy" },
        { name: "Contact Us" },
    ]


    return <div>
        <nav className="d-flex mt-4 pt-2 mx-5 pb-5">
            <div>
                <img src={logo} alt="stream logo" />
            </div>
            <ul className="d-flex align-items-center mt-3">
                {menus.reverse().map((menu, index) => <li className="list" key={index.toString()}>
                    <Link to="/posts/post">
                        {menu.name}
                    </Link>
                </li>
                )}
            </ul>

            <div className="align-self-center">
                <span> Copyright@2021 Influencer Incorporated </span>
                <span className="mx-2"> Made with Love in Dubai UAE </span>
            </div>
        </nav>
    </div>
}

export default Footer;