import {Component} from "react/cjs/react.production.min";
import "../Styles/aboutus.css"

class AboutUs extends Component {
    render() {
        return (
            <div>
                <header className={"titleHeader"}>
                    <h1 className={"headerDiv"}>
                        About us
                    </h1>
                </header>
                <div className={"aboutUsTextDiv"}>
                    <p className={"aboutUsParagraph"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis et odio ultricies
                        eleifend.
                        Ut quis malesuada nunc. Donec erat metus, accumsan eu metus quis, pulvinar dapibus diam. Duis
                    </p>
                </div>
                <div className={"meetUsHeader"}>
                    <h1 className={"meetUsTitle"}>Meet us</h1>
                </div>

                <div className={"meetUsImageDiv"}>
                    <img src={"enabled_logo.png"}/>
                    <img src={"enabled_logo.png"}/>
                    <img src={"enabled_logo.png"}/>
                    <img src={"enabled_logo.png"}/>
                </div>
            </div>
        );
    }
}

export default AboutUs;