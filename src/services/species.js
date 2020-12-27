import axios from "axios";
import { filterNotNull } from "@/utils/searchUtils";

var getAll = () => {
  return axios.get("http://localhost:8081/species", {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
};

var search = (name, isFruit) => {
  switch (isFruit) {
    case 1:
      isFruit = true;
      break;
    case 2:
      isFruit = null;
      break;
    case 3:
      isFruit = false;
      break;
  }
  var body = {
    filterBy: filterNotNull([{ name: name }, { fruit: isFruit }])
  };
  return axios.post("http://localhost:8081/species/search", body, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });
};

export { getAll, search };
