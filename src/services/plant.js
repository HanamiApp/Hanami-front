import axios from "axios";

var create = data => {
  var body = {
    name: data.name,
    has_gift: data.isGift,
    id_place: data.place,
    id_species: data.species
  };
  return axios.post("http://localhost:8080/plants", body, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
};

export { create };
