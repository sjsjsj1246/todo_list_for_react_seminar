class EndlessCreation {
  constructor(httpClient) {
    this.ecndlessCreation = httpClient;
  }

  async postTodoList(todo) {
    const response = await this.ecndlessCreation.post('todos', {
      title: todo.title,
      description: todo.description,
      writer: todo.writer,
    });
    return response;
  }

  async getTodoList() {
    const response = await this.ecndlessCreation.get('todos');
    console.log(response.data);
    return response.data;
  }

  async getTodo(id) {
    const response = await this.ecndlessCreation.get(`todos/${id}`);
    console.log(response.data);
    return response.data;
  }

  async patchTodo(todo) {
    const response = await this.ecndlessCreation.patch(`todos/${todo.id}`, {
      title: todo.title,
      description: todo.description,
      writer: todo.writer,
    });
    console.log(response);
    return response;
  }

  async patchTodoComplete(id, isCompleted) {
    const response = await this.ecndlessCreation.patch(`todos/${id}/complete`, {
      isCompleted: isCompleted,
    });
    return response;
  }

  async deleteTodo(id) {
    const response = await this.ecndlessCreation.delete(`todos/${id}`);
    return response;
  }
}

export default EndlessCreation;
