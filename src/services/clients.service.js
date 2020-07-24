import axios from "axios";

const API_URL = "https://technical-test-api.herokuapp.com/clients/";

class ClientService {
  getAllClients() {
    return axios.get(API_URL);
  }

  getOneClient(id) {
    return axios.get(API_URL + id, {});
  }
}

export default new ClientService();
