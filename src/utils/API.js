import axios from "axios";


export default {
  getRandomUsers: () => {
    return axios.get("https://randomuser.me/api/?results=30");
  }
};
