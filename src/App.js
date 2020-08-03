// Importing all of our components and API for random users
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
    // In order for "this" to be recoginized within my handles, I had to bind it. This was a trick I learned during a session with a TA.
    this.handleSortByName = this.handleSortByName.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // The current state of things, ha-ha. These are the states the code will be influencing in order to get things to do stuff on the page. Pretty neat!
    // users and searchUsers are the mapped API data we generate. search is what is put into the input field. sorted is like a boolean for determining if the names will be sorted ascending or descending order.
    this.state = {
      users: [],
      searchUsers: [],
      search: "",
      sorted: "ascending",
    };
  }
  // Standing mounting at the start of the server.
  componentDidMount() {
    this.generateRandomUsers();
  }
  // This is function that pulls data from our API call we made within the utils folder. This is imported at the top. It fills the empty arrays within our state with data.
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
  // This is the input change that allows us to filter the employees names generated
  handleInputChange = (e) => {
    const employeeName = e.target.value;

    if(this.state.search === ""){
      this.setState({
        users: this.state.users,
      })
    }

    const searchUsers = this.state.users.filter((employees) => {
      const { first: firstName, last: lastName } = employees.name;
      // Deconstructing the filter to match the characters the user puts into the input field.
      const searchedEmployeesName = `${firstName} ${lastName}`;
      return searchedEmployeesName
        .toLowerCase()
        .includes(employeeName.toLowerCase().trim());
        // Trim and lowercase so it matches any input.
    });
    // Updates the state to match what is entered into the field once it is filtered
    this.setState({
      searchUsers: searchUsers,
      search: employeeName,
    });
  };
  // This is the sorting function. It uses a standard .sort() method from JavaScript, which we use a conditional to determine what order the Names of the random users should be placed.
  handleSortByName() {
    const sortEl = this.state.searchUsers;

    if (this.state.sorted === "ascending") {
      const sorted = sortEl.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({
        searchUsers: sorted,
        sorted: "descending",
      });
    } else {
      const sorted = sortEl.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      this.setState({
        searchUsers: sorted,
        sorted: "ascending",
      });
    }
  }
  // Standard render() from React
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory
          <Filter inputChanged={this.handleInputChange} />
        </Title>
        <UserHead sortByName={this.handleSortByName} />
        {/* Mapping our API data and positioning which data to use based on props established in the components */}
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
