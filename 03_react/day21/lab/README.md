## To learn how to manage a Todo list application using React Context, useReducer, and custom hooks.

## Requirements:

Basic knowledge of React Context, Reducer and Custom Hooks
Setup a React development environment.

## Steps:

### Step 1: Setup the Project

- Create a new React project using the `create-react-app`.

- Set up the project structure with the following files:
  - `App.js`: the main component that will hold the Todo list and provide the context.
  - `TodoList.js`: a child component that will display the Todo list.
  - `TodoItem.js`: a child component that will represent a single Todo item.

### Step 2: Create Context and Reducer

- Create a new file called `TodoContext.js`.

- Inside `TodoContext.js`, import and create a new React context using the `createContext` function. Export this context.

```javascript
import React, { createContext } from "react";

const TodoContext = createContext();

export default TodoContext;
```

- Create a new file called `TodoReducer.js`.

- Inside `TodoReducer.js`, define the initial state and a reducer function using the useReducer hook from the react package. Export this reducer function.

```javascript
export const initialState = {
  todos: [],
};

export const todoReducer = (state, action) => {
  // Handle different actions to modify the state
  // ...
};
```

### Step 3: Implement Custom Hooks

- Create a new file called `useTodo.js`.
- Inside `useTodo.js`, import `useReducer` hook from the react package.
- Import the `todoReducer` from `TodoReducer.js`.
- Implement a custom hook called `useTodo` that initializes the state using the `useReducer` hook with the todoReducer and the initial state.

```javascript
import React, { useReducer } from "react";
import { initialState, todoReducer } from "./TodoReducer";

const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Define helper functions for adding, completing, and deleting Todo items
  // ...

  return { state, dispatch, addTodo, completeTodo, deleteTodo };
};

export default useTodo;
```

### Step 4: Implement Todo List Components

- In the `TodoList.js` file, import `useContext` hook from the react package.
- Import the `TodoContext` from `TodoContext.js` and the useTodo hook from `useTodo.js`.
- Create a functional component called `TodoList` that uses the `useContext` hook to access the state and dispatch function from the `TodoContext`.
- Render the list of Todo items using the state from the context.
- Pass the dispatch function to the TodoItem component as a prop.

```javascript
import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import useTodo from "./useTodo";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  // Render the list of Todo items
  // ...

  return <div>{/* Render the Todo list */}</div>;
};

export default TodoList;
```

### Step 5: Implement Todo Item Component

- In the `TodoItem.js` file, import `useContext` hook from the react package.
- Import the `TodoContext` from `TodoContext.js` and the `useTodo` hook from `useTodo.js`.
- Create a functional component called `TodoItem` that takes the item prop representing a single Todo item.
- Use the item prop to display the Todo item details.
- Implement functionality to mark a Todo item as completed and delete a Todo item using the dispatch function from the TodoContext.

```javascript
import React, { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoContext);

  // Implement functionality to mark as completed and delete a Todo item
  // ...

  return <div>{/* Render the Todo item details */}</div>;
};

export default TodoItem;
```

### Step 6: Use Context in the App Component

- In the `App.js` file.
- Import `TodoContext` and `useTodo` from their respective files.
- Inside the App component, use the `useTodo` hook to get the state and dispatch function.
- Wrap the `TodoList` component inside the `TodoContext.Provider` component and pass the state and dispatch function as values to the provider.

```javascript
import React from "react";
import TodoContext from "./TodoContext";
import useTodo from "./useTodo";
import TodoList from "./TodoList";

const App = () => {
  const { state, dispatch } = useTodo();

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
};

export default App;
```

### Step 7: Test the Application

- Update the App component to render the `TodoList` component.
- Start the react application using `npm start` and test the Todo list application.
- Verify that you can add, mark as complete, and delete Todo items, and that the changes are reflected in the UI.
