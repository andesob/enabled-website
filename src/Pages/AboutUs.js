import {Component} from "react/cjs/react.production.min";
import "../Styles/aboutus.css"

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className={"aboutUsDivBox"}>
                    <header className={"titleHeader"}>
                        <h1 className={"headerDiv"}>
                            About us
                        </h1>
                    </header>
                    <div className={"aboutUsTextDiv"}>
                        <p className={"aboutUsParagraph"}>
                            The Enabled EEG app team consists of 4 students from NTNU in Ålesund. That is Trym Jørgensen,
                            Andreas Sunde, Anders Søbakken, and Eskil Torland. The team worked together on the Enabled
                            EEG mobile application and the Enabled Desktop Application as a part of their Bachelor
                            Thesis for the spring of 2021. For more information about the project you can access the
                            Bachelor Thesis here or access the github pages here:
                            <ul className={"githubList"}>
                                <li>
                                    <a href={"https://github.com/rojahno/enabled-desktop"}>Enabled Desktop Application</a>.
                                </li>
                                <li>
                                    <a href={"https://github.com/andesob/Enabled-app"}>Enabled Mobile Application</a>.
                                </li>
                            </ul>
                            You can access our personal github pages by clicking the profile
                            pictures below.
                        </p>
                    </div>
                </div>

                <div className={"meetUsImageDiv"}>
                    <div className={"twoDevDivBox"}>
                        <h1>Meet</h1>
                        <div className={"twoDevLinksPicsDiv"}>
                            <div className={"singleDevDiv"}>
                                <a className={"githubNameLink"} href={"https://github.com/andesob"}>@Andesob</a>
                                <a className={"githubPicture"}
                                   href={"https://github.com/andesob"}>
                                    <img src={"https://avatars.githubusercontent.com/u/48057293?v=4"} alt={"Andesob"}/>
                                </a>
                                <h3>Founder</h3>
                                <p>

                                </p>
                            </div>
                            <div className={"singleDevDiv"}>
                                <a className={"githubNameLink"} href={"https://github.com/rojahno"}>@Rojahno</a>
                                <a className={"githubPicture"} href={"https://github.com/rojahno"}>
                                    <img src={"https://avatars.githubusercontent.com/u/48057307?v=4"} alt={"Rojahno"}/>
                                </a>
                                <h3>Project Owner</h3>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"twoDevDivBox"}>
                        <h1>Meet</h1>
                        <div className={"twoDevLinksPicsDiv"}>
                            <div className={"singleDevDiv"}>
                                <a className={"githubNameLink"}
                                   href={"https://github.com/EskilTorland"}>@EskilTorland</a>
                                <a className={"githubPicture"} href={"https://github.com/EskilTorland"}>
                                    <img src={"https://avatars.githubusercontent.com/u/48057831?v=4"}
                                         alt={"EskilTorland"}/>
                                </a>
                                <h3>Founder</h3>
                                <p>

                                </p>
                            </div>
                            <div className={"singleDevDiv"}>

                                <a className={"githubNameLink"} href={"https://github.com/trymjor"}>@Trymjor</a>
                                <a className={"githubPicture"} href={"https://github.com/trymjor"}>
                                    <img src={"https://avatars.githubusercontent.com/u/46708784?v=4"} alt={"Trymjor"}/>
                                </a>
                                <h3>Founder</h3>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;