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
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      users: [],
      searchUsers: [],
      search: "",
      sorted: "ascending",
    };
  }

  componentDidMount() {
    this.generateRandomUsers();
  }

  generateRandomUsers = () => {
    API.getRandomUsers()
      .then((res) =>
        this.setState({
          users: res.data.results,
          searchUsers: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const employeeName = e.target.value;

    const searchUsers = this.state.users.filter((employees) => {
      const { first: firstName, last: lastName } = employees.name;

      const searchedEmployeesName = `${firstName} ${lastName}`;
      return searchedEmployeesName
        .toLowerCase()
        .includes(employeeName.toLowerCase().trim());
    });

    this.setState({
      searchUsers: searchUsers,
      search: employeeName,
    });
  };

  handleSortByName() {
    const sortEl = this.state.users;

    if (this.state.sorted === "ascending") {
      const sorted = sortEl.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({
        users: sorted,
        sorted: "descending",
      });
    } else {
      const sorted = sortEl.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      this.setState({
        users: sorted,
        sorted: "ascending",
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Buncha Bastards</Title>
        <Filter inputChanged={this.handleInputChange} />
        <UserHead sortByName={this.handleSortByName} />
        {this.state.searchUsers.map((user) => (
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
