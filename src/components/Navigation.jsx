import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
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

  handleNavigation = btnId => {
    const btn = this.state.nav.filter(b => b.id === btnId);
    this.setState({ actual: btn[0].to });
  };

  render() {
    return (
      <Router>
        <ul className="nav">
          {this.state.nav.map(button => (
            <li className="nav-item">
              <Link
                key={button.id}
                id={button.id}
                className="nav-link m-2"
                onClick={this.props.onNavigate}
                //to={this.props.onNavigate}
                to={button.to}
              >
                {button.description}
              </Link>
            </li>
          ))}
        </ul>
      </Router>
    );
  }
}

export default Navigation;
