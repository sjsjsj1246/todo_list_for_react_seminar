import axios from 'axios';

class EndlessCreation {
  constructor() {
    this.baseURL = process.env.REACT_APP_BASE_URL;
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async login(providerName) {
    const response = await axios({
      method: 'get',
      url: `${this.baseURL}/oauth/${providerName}`,
    });
    console.log(response);
    this.setAccessToken(response.data.accessToken);
    return response.data;
  }

  async postTodoList(todo) {
    const response = await axios({
      method: 'post',
      url: `${this.baseURL}/todos`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      data: {
        title: todo.title,
        description: todo.description,
        writer: todo.writer,
      },
    });
    return response.data;
  }

  async getTodoList() {
    const response = await axios({
      method: 'get',
      url: `${this.baseURL}/todos`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response.data;
  }

  async getTodo(id) {
    const response = await axios({
      method: 'get',
      url: `${this.baseURL}/todos/${id}`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response.data;
  }

  async patchTodo(todo) {
    const response = await axios({
      method: 'patch',
      url: `${this.baseURL}/todos/${todo.id}`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      data: {
        title: todo.title,
        description: todo.description,
        writer: todo.writer,
      },
    });
    return response;
  }

  async patchTodoComplete(id, isCompleted) {
    const response = await axios({
      method: 'patch',
      url: `${this.baseURL}/todos/${id}/complete`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      data: {
        isCompleted: isCompleted,
      },
    });
    return response;
  }

  async deleteTodo(id) {
    const response = await axios({
      method: 'delete',
      url: `${this.baseURL}/todos/${id}`,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response;
  }
}

export default EndlessCreation;
