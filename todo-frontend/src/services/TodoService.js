import axios from "axios";

const BASE_REST_API_URL_TODO_SERVICE = "http://localhost:8080/api/todos";

export const getAllTodos = () => {
  return axios.get(BASE_REST_API_URL_TODO_SERVICE + "/getAllTodos");
};

export const addTodo = (todo) => {
  return axios.post(BASE_REST_API_URL_TODO_SERVICE + "/addTodo", todo);
};

export const getTodo = (id) => {
  return axios.get(BASE_REST_API_URL_TODO_SERVICE + "/getTodo/" + id);
};

export const updateTodo = (id, todo) => {
  return axios.put(BASE_REST_API_URL_TODO_SERVICE + "/updateTodo/" + id, todo);
};

export const deleteTodo = (id) => {
  return axios.delete(BASE_REST_API_URL_TODO_SERVICE + "/deleteTodo/" + id);
};

export const completeTodo = (id) => {
  return axios.patch(BASE_REST_API_URL_TODO_SERVICE + "/completeTodo/" + id);
};

export const inCompleteTodo = (id) => {
  return axios.patch(BASE_REST_API_URL_TODO_SERVICE + "/inCompleteTodo/" + id);
};
