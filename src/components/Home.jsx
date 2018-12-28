import React, { Component } from "react";
import dr_med from "../img/dr-med-univ-schenk.JPG";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <img src={dr_med} />
        </div>
        <div className="col-md-3 bg-color-brand">
          <p>MALTESERSTR. 170/172</p>
          <p>12277 BERLIN (MARIENFELDE)</p>
          <p>(030) – 939 500 30</p>
          <div>
            <p>HERZLICH</p>
            <p>WILLKOMMEN</p>
          </div>
          <div>
            <p>Arbeitsmedizinische Praxis Dr. Schenk </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
