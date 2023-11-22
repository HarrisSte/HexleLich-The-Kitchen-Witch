import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './components/landing/landing';
import About from './components/about/about';
import Recipes from './components/recipes/recipes';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/recipes',
        element: <Recipes />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '',
        element: <Landing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
