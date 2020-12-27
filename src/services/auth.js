import axios from "axios";

var login = (email, password) => {
  var body = {
    email: email,
    password: password
  };
  return axios.post("http://localhost:8081/login", body, {
    //axios torna una promise
    headers: {
      //Accept: "application/json",
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
};

export { login };
