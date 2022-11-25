import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { counterReducer, todosReducer } from "./store/reducers";
import { userReducer } from "./store/slices";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import Home from "./counter/Home";
import Todos from "./todos/Todos";
import User from "./user/User";
import UserForm from "./user/UserForm";
import UserDetails from "./user/UserDetails";

const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    counter: counterReducer,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'todos',
        element: <Todos />
      },
      {
        path: 'users',
        element: <User />,
        children: [
          {
            path: 'new',
            element: <UserForm />
          },
          {
            path: ':userId',
            element: <UserDetails />
          }
        ]
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
