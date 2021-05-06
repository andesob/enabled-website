import {Component} from "react/cjs/react.production.min";
import "../Styles/Header.css"
import React from 'react';
import enabledLogo from '../Images/enabled_logo.png'

class Header extends Component {
    render() {
        return (
            <header className={"enabledHeader"}>
                <div className={"innerHeader"}>
                    <div className={"logoDiv"}>
                        <img className={"logo"} src={enabledLogo} alt={"hello"}/>
                    </div>
                    <div className={"headerListDiv"}>
                        <ul className={"nav"}>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Download</a>
                            </li>
                            <li>
                                <a>Support Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;