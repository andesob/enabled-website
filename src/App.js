import './Styles/app.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/aboutus' component={AboutUs}/>
      </div>
    </Router>
  );
}

export default App;
