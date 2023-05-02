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
import LearningTopic from './routes/LearningTopic';
import CareerTopic from './routes/CareerTopic';
import TechQuesTopic from './routes/TechQuesTopic';
import EventTopic from './routes/EventTopic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/new",
        element: <New />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />
      },
      {
        path: "/post/edit/:id",
        element: <Update />
      },
      {
        path: "/learning",
        element: <LearningTopic />
      },
      {
        path: "/career",
        element: <CareerTopic />
      },
      {
        path: "/technical-questions",
        element: <TechQuesTopic />
      },
      {
        path: "/events",
        element: <EventTopic />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
