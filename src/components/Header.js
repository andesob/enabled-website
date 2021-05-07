import {Component} from "react/cjs/react.production.min";
import "../Styles/Header.css"
import React from 'react';
import enabledLogo from '../Images/enabled_logo.png'
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className={"enabledHeader"}>
                <div className={"innerHeader"}>
                    <div className={"logoDiv"}>
                        <Link to={"/"}>
                            <img className={"logo"} src={enabledLogo} alt={"hello"}/>
                        </Link>
                    </div>
                    <div className={"headerListDiv"}>
                        <ul className={"nav"}>
                            <li>
                                <Link to={"/aboutus"}>About us</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Download</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Support us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;