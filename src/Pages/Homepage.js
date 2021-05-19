import {Component} from "react/cjs/react.production.min";
import "../Styles/homepage.css";

class Homepage extends Component {
    render() {
        return (
            <div className={"mainContainer"}>
                <header className={"titleHeader"}>
                    <h1 className={"headerDiv"}>
                        Enabled EEG
                    </h1>
                </header>

                <div className={"homepageTextDiv"}>
                    <p className={"homepageParagraph"}>
                        Enabled EEG was developed to help people with ALS or other disabilities to improve their
                        communication with family, friends, and health personnel, as well as improve their independence
                        and overall life quality.<br/><br/>

                        The primary objectives of this project were to:
                        <ul className={"objectiveList"}>
                            <li>
                                Develop a mobile application that runs on the iOS and Android operating system.
                            </li>
                            <li>
                                Enable the user to control the mobile application by reading their brain activity.
                            </li>
                            <li>
                                Develop a desktop application that runs on the Windows and macOS platform.
                            </li>
                            <li>
                                Develop a desktop application that connects the Emotiv headset to the mobile
                                application.
                            </li>
                            <li>
                                Provide opportunities for the application users to communicate with others.
                            </li>
                            <li>
                                Provide text-to-speech functionality.
                            </li>
                            <li>
                                Provide a keyboard designed for typing with brain activity.
                            </li>
                            <li>
                                Integrate some sort of smart solution into the mobile application.
                            </li>
                        </ul>
                    </p>
                </div>

                <div className={"youtubeDiv"}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/w2-1tLE2wjw"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
        );
    }
}

export default Homepage;