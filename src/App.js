// import logo from "./logo.svg";
// import "./App.css";
//import Navbar from './components/Nav/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import ContactUs from './pages/Contact-us';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar className="sidebarDes" /> */}

        <div className="Body">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/Rooms">
              <Rooms />
            </Route>
            <Route exact path="/Facilities">
              <Facilities />
            </Route>
            <Route exact path="/Contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
