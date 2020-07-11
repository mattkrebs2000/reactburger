import axios from "axios";

export default {
  // Saves a user to the database
  saveBurger: function (burgerData) {
    return axios.post("/api/burgers", burgerData);
  },

  deleteBurger: function (id, burgerData) {
    return axios.delete("/api/burgers/" + id, burgerData);
  },

  changeBurger: function (id, burgerData) {
    return axios.put("/api/burgers/" + id, burgerData);
  },

  getBurgers: function () {
    return axios.get("/api/burgers");
  },
};


 
