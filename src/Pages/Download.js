import {Component} from "react/cjs/react.production.min";
import "../Styles/download.css"
import React from "react";
import AppDownload from '../Images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'

class Download extends Component {
    render() {
        return (
            <div>
                <header className={"titleHeader"}>
                    <h1 className={"headerDiv"}>
                        Download
                    </h1>
                </header>
                <div className={"desktopDownload"}>
                    <div>
                        <p>
                            Through the links below you can download our mobile application. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className={"downloadButtonDiv"}>
                        <div>
                            <a href={""}>
                                <img className={"logo"} src={AppDownload} alt={"Download From App Store"}></img>
                            </a>
                        </div>
                        <div>
                            <a href={""}>
                                <img className={"logo"} src={AppDownload} alt={"Download From App Store"}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"desktopDownload"}>
                    <div>
                        <p>
                            Through the links below you can download our mobile application. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className={"downloadButtonDiv"}>
                        <div>
                            <a href={""}>
                                <img className={"logo"} src={AppDownload} alt={"Download From App Store"}></img>
                            </a>
                        </div>
                        <div>
                            <a href={""}>
                                <img className={"logo"} src={AppDownload} alt={"Download From App Store"}></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download;