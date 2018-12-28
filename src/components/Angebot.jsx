import React, { Component } from "react";

class Angebot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>ARBEITSMEDIZIN IN DER PRAXIS</h1>

        <ul>
          <li>Arbeitsmedizinische Betreuung</li>
          <li>Untersuchungen nach ArbMedVV</li>
          <li>Untersuchungen nach Fahrerlaubnis – Verordnung (FEV)</li>
          <li>Reisemedizinische - und Impfberatung</li>
          <li>Schichtplan – Optimierung</li>
          <li>Unternehmensberatung (Kooperationspartner)</li>
          <li>Arbeitssicherheit (Kooperationspartner)</li>
          <li />
        </ul>
      </div>
    );
  }
}

export default Angebot;
