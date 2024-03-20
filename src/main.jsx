import ReactDOM from 'react-dom/client'
// req imports from React router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// TODO: add pico css import here
import '@picocss/pico/scss/pico';

import App from './App';
// about me will function like a "home" page, want it to be the first page that is rendered
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MyResume from './pages/MyResume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/MyResume',
        element: <MyResume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
