# Marvelous 2v Backend

The Marvelous 2v backend is developed using NestJS and TypeScript. It operates without a database, and all data is stored in JSON format files. The API provides three endpoints:

## Endpoints

### 1. `/save` - POST Request

This endpoint allows for saving a new task or editing an existing one. It handles the following functionalities:

- Saving new tasks.
- Editing existing tasks.

### 2. `/tasks` - GET Request

This endpoint is used to retrieve the list of tasks. If the `search_text` query parameter is provided, it allows for searching tasks based on the task caption.

### 3. `/delete/:task_id` - POST Request

This endpoint is used for deleting specific tasks. The `task_id` parameter specifies which task to delete. If `task_id` is set to "clearAll," all tasks are deleted.

## Installation

To set up the backend, follow these steps:

1. Run the command `yarn install`.

2. To start the local server, execute `yarn start:dev`. In the frontend application (frontend project available on [GitHub](https://github.com/maxhi11/todo_front)), ensure you specify the correct environment variable. For example, set `REACT_APP_URL_API=https://localhost:5000`. The default port is 5000.

Your Marvelous 2v backend is ready to handle your requests and interact with the frontend application.

