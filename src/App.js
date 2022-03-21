import React from "react";

export default class App extends React.Component {
  state = { people: [] };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((json) => this.setState({ people: json.people }));
  }

  render() {
    return <ul>{this.peopleCards(this.state.people)}</ul>;
  }
}