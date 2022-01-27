import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const personsService = {
  getAll() {
    return axios
      .get(baseUrl)
      .then((response) => response.data);
  },
  create(personObject) {
    return axios
      .post(baseUrl, personObject)
      .then((response) => response.data);
  },
  deletePerson(id) {
    return axios
      .delete(`${baseUrl}/${id}`);
  }
}

export default personsService;