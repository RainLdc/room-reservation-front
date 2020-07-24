import axios from "axios";

const API_URL = "https://technical-test-api.herokuapp.com/rooms/";

class ChambreService {
  getAllChambre() {
    return axios.get(API_URL);
  }

  getOneChambre(id) {
    return axios.get(API_URL + id, {});
  }
}

export default new ChambreService();
