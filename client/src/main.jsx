import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import DetailPage from './section/DetailPage';
import NotFound from './section/NotFound';
// import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <HomePage />
      // }
      {
        path: "/Detail/:id",
        element: <DetailPage/>
      }
    ]
  },
  {
    path: "*", 
    element: <NotFound/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
