import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);  
};

const create = (noteObject) => {
    return axios.post(baseUrl, noteObject).then(response => response.data);
};

const update = (id, noteObject) => {
    return axios.put(`${baseUrl}/${id}`, noteObject).then(response => response.data);
}

export default {
    getAll,
    create,
    update
};