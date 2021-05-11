import {Component} from "react/cjs/react.production.min";
import "../Styles/download.css"
import React from "react";
import AppStoreDownload from '../Images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import GooglePlayDownload from '../Images/google-play-badge.png';

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
                                <img className={"appStoreLogo"} src={AppStoreDownload} alt={"Download From App Store"}/>
                            </a>
                        </div>
                        <div>
                            <a href={""}>
                                <img className={"appStoreLogo"} src={AppStoreDownload} alt={"Download From App Store"}/>
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
                            <a href={"https://apps.apple.com/us/app/enabled-eeg/id1566325616"}>
                                <img className={"appStoreLogo"} src={AppStoreDownload} alt={"Download From App Store"}/>
                            </a>
                        </div>
                        <div>
                            <a href='https://play.google.com/store/apps/details?id=no.ntnu.enabled_app&fbclid=IwAR3B2oSsKCZo_EtO-yh_6DfOyLaKbZDumd-NBUHIeoT4mG2T1d4k4QZ52Mg&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <img className={"androidLogo"} alt='Get it on Google Play' src={GooglePlayDownload}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download;