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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis et odio ultricies
                        eleifend.
                        Ut quis malesuada nunc. Donec erat metus, accumsan eu metus quis, pulvinar dapibus diam. Duis
                        mollis ac
                        arcu sed euismod. Morbi in faucibus enim, eu malesuada risus. Curabitur ac facilisis sem.
                        Curabitur
                        viverra dolor eu quam fringilla viverra. Integer blandit viverra tellus, non ullamcorper tortor
                        aliquet
                        eget. Donec feugiat, nibh vel tempor tristique, est est tincidunt lorem, vitae scelerisque elit
                        odio et
                        nulla. Duis quis placerat arcu. Praesent accumsan ipsum sem, quis vestibulum ex facilisis et.
                        Donec sit
                        amet metus nec neque pharetra luctus. Nulla bibendum sapien a consequat egestas. Sed semper orci
                        neque,
                        id tristique velit facilisis eget. Praesent vel neque quis risus fermentum hendrerit ut sed
                        eros.

                        Quisque sed convallis neque, non congue eros. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Cras vulputate mauris et justo blandit finibus. Pellentesque eu auctor urna, vel pellentesque
                        magna.
                        Quisque hendrerit pretium faucibus. Suspendisse id ligula arcu. Phasellus congue lacus vel mi
                        ullamcorper, sed ullamcorper dolor faucibus. Donec placerat urna a massa consequat tempus. In
                        laoreet
                        velit ex, et suscipit est laoreet in. Morbi sit amet feugiat nibh, sed tempus risus.
                    </p>
                </div>

                <div className={"youtubeDiv"}>
                    <iframe src="https://www.youtube.com/embed/w2-1tLE2wjw"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
        );
    }
}

export default Homepage;