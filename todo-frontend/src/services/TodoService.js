import axios from "axios";

const BASE_REST_API_URL_TODO_SERVICE = "http://localhost:8080/api/todos";

export const getAllTodos = () => {
  return axios.get(BASE_REST_API_URL_TODO_SERVICE + "/getAllTodos");
};
