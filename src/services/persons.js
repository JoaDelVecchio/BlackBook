import axios from "axios";

const baseUrl = "http://localhost:3000/persons";

const getAll = () => {
  const response = axios.get(baseUrl);
  return response.then((response) => response.data);
};

const create = (newObject) => {
  const response = axios.post(baseUrl, newObject);
  return response.then((response) => response.data);
};

const update = (id, changedObject) => {
  axios.put(`${baseUrl}/${id}`, changedObject);
  return response.then((response) => response.data);
};

const deletePerson = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`);
  return response.then((response) => response.data);
};

export default { getAll, create, update, deletePerson };
