import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import UserRow from "./components/UserRow";
import Filter from "./components/Filter";
import UserHead from "./components/UserHead";
import API from "./utils/API";

class App extends Component {
  constructor() {
    super();

    this.handleSortByName = this.handleSortByName.bind(this);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.generateRandomUsers();
  }

  generateRandomUsers = () => {
    API.getRandomUsers()
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleSortByName() {
    const sortEl = this.state.users;

    const sorted = sortEl.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );

    this.setState({
      users: sorted,
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>Buncha Bastards</Title>
        <Filter />
        <UserHead sortByName={this.handleSortByName} />
        {this.state.users.map((user) => (
          <UserRow
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
            age={user.dob.age}
            phone={user.phone}
            // id={user.id.value}
            src={user.picture.large}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
