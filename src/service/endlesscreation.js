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
    this.setAccessToken(response.data.accessToken);
    return response.data;
  }

  async getGithubToken(code) {
    const response = await axios({
      method: 'post',
      url:
        'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
      data: {
        client_id: `${process.env.REACT_APP_GITHUB_CLIENT_ID}`,
        client_secret: `${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
        code: code,
        redirect_uri: `${process.env.REACT_APP_BASE_URL}`,
      },
    });
    return response.data;
  }

  async postGithubToken(token) {
    const response = await axios({
      method: 'post',
      url: `${this.baseURL}/oauth/github`,
      data: {
        access_token: token,
      },
    });
    return response.data;
  }

  async postGoogleToken(token) {
    const response = await axios({
      method: 'post',
      url: `${this.baseURL}/oauth/google`,
      data: {
        token_type: token.token_type || 'bearer',
        access_token: token.access_token,
        scope: token.scope || '',
        expires_in: token.expires_in || '',
        id_token: token.id_token || '',
        expires_at: token.expires_at || '',
      },
    });
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
