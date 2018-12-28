import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";

import Home from "./components/Home";
import Arbeitsmedizin from "./components/Arbeitsmedizin";
import Angebot from "./components/Angebot";
import Kontakt from "./components/Kontakt";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { id: 1, to: "/", description: "Gesundheit als Investment" },
        { id: 2, to: "/arbeitsmedizin", description: "Arbeitsmedizin" },
        { id: 3, to: "/angebot", description: "Angebot" },
        { id: 4, to: "/kontakt", description: "Kontakt" }
      ],
      actual: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <ul className="nav navbar-nav">
                  {this.state.nav.map(button => (
                    <li className="">
                      <Link
                        key={button.id}
                        id={button.id}
                        className=""
                        //to={this.props.onNavigate}
                        to={button.to}
                      >
                        {button.description}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/arbeitsmedizin" component={Arbeitsmedizin} />
              <Route path="/angebot" component={Angebot} />
              <Route path="/kontakt" component={Kontakt} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
