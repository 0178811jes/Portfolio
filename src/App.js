
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Contract from './component/Contruct/Contract';
import Details from './component/Details/Details';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Education from './Education/Education';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    
    {
      path:'/about',
      element: <About></About>
    },
    {
      path:'/contruct',
      element: <Contract></Contract>
    },
    {
      path:'/header',
      element: <Header></Header>
    },
    {
      path:'/blog',
      element: <Blog></Blog>
    },
    {
      path:'/detail',
      element: <Details></Details>
    },
    {
      path:'/education',
      element: <Education></Education>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
