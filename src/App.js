import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import UserRow from "./components/UserRow";
import API from "./utils/API";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.generateRandomUsers();
  }

  generateRandomUsers = () => {
    API.getRandomUsers()
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Title>Hope this works.</Title>
        {this.state.users.map((user) => (
          <UserRow
            name={user.name.first}
            email={user.email}
            age={user.dob.age}
            phone={user.phone}
            id={user.id.value}
            src={user.picture.large}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
