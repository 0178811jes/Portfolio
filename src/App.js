
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contract from './component/Contruct/Contract';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

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
    

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
