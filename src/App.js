import './Styles/app.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className={"mainContainer"}>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/aboutus' component={AboutUs}/>
                    <Route exact path='/privacypolicy' component={PrivacyPolicy}/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
