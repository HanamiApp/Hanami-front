import axios from 'axios';

var login = (email, password) => {
  var body = {
    email : email,
    password : password,
    action : "login"
  }
  return axios.post("http://localhost:8081/authentication", body, {  //axios torna una promise
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'},
    });
}



export { login } 