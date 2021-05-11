import {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";
import "../Styles/footer.css";

class Footer extends Component {
    render() {
        return (
            <div className={"footerPageDiv"}>
                <footer className={"footer"}>
                    <div className={"footerObjectDiv"}>
                            Contact us at <a href={"mailto: eegcpslab@gmail.com"}>eegcpslab@gmail.com</a>
                    </div>
                    <div className={"footerObjectDiv"}>
                            <Link to={"/privacypolicy"}>Privacy Policy</Link>
                    </div>
                    <div className={"footerObjectDiv"}>
                        Last modified: {document.lastModified}
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;