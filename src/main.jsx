import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import New from './routes/New';
import Update from './routes/Update';
import PostDetail from './routes/PostDetail';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/new",
        element: <New />
      },
      {
        path: "/update",
        element: <Update />
      },
      {
        path: "/postdetail",
        element: <PostDetail />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
