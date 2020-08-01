import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component {
  state = {
    users: {},
  };

  componentDidMount() {
    this.generateRandomUsers();
  }

  generateRandomUsers = () => {
    API.getRandomUsers()
      .then((res) => this.setState({ users: res.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Title>Hope this works.</Title>
      </Wrapper>
    );
  }
}

export default App;
