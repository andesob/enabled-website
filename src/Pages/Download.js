import {Component} from "react/cjs/react.production.min";
import "../Styles/download.css"
import React from "react";
import AppStoreDownload from '../Images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import GooglePlayDownload from '../Images/google-play-badge.png';
import windowsDownload from '../Images/download_windows.png';
import macDownload from '../Images/download_mac.png';

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
                            Through the buttons below you have the option to download the desktop application for both
                            Windows or Mac
                        </p>
                    </div>
                    <div className={"downloadButtonDiv"}>
                        <div className={"downloadButtonPairDiv"}>
                            <div className={"singleDownloadBtnDiv"}>
                                <a className={"downloadLink"}
                                   href={"https://github.com/rojahno/enabled-desktop/releases"}>
                                    <img className={"appStoreLogo"} src={macDownload}
                                         alt={"Download For Mac"}/>
                                </a>
                            </div>
                            <div className={"singleDownloadBtnDiv"}>
                                <a className={"downloadLink"}
                                   href={"https://github.com/rojahno/enabled-desktop/releases"}>
                                    <img className={"appStoreLogo"} src={windowsDownload}
                                         alt={"Download For Windows"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"desktopDownload"}>
                    <div>
                        <p>
                            Through the buttons below you have the option to download the mobile application through the
                            Google Play store or the App Store.
                        </p>
                    </div>
                    <div className={"downloadButtonDiv"}>
                        <div className={"singleDownloadBtnDiv"}>
                            <a className={"downloadLink"}
                               href={"https://apps.apple.com/us/app/enabled-eeg/id1566325616"}>
                                <img className={"appStoreLogo"} src={AppStoreDownload} alt={"Download From App Store"}/>
                            </a>
                        </div>
                        <div className={"singleDownloadBtnDiv"}>
                            <a className={"downloadLink"}
                               href='https://play.google.com/store/apps/details?id=no.ntnu.enabled_app&fbclid=IwAR3B2oSsKCZo_EtO-yh_6DfOyLaKbZDumd-NBUHIeoT4mG2T1d4k4QZ52Mg&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
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