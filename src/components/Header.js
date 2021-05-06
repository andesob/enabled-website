import {Component} from "react/cjs/react.production.min";
import "../Styles/Header.css"
import React from 'react';
import enabledLogo from '../Images/enabled_logo.png'

class Header extends Component {
    render() {
        return (
            <header>
                <div className={"innerHeader"}>
                    <div className={"logoDiv"}>
                        <img className={"logo"} src={enabledLogo} alt={"hello"}/>
                    </div>
                    <div className={"headerListDiv"}>
                        <ul className={"nav"}>
                            <a>
                                <li>
                                    About Us
                                </li>
                            </a>
                            <a>
                                <li>
                                    Download
                                </li>
                            </a>
                            <a>
                                <li>
                                    Support Us
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;