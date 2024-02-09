
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';
import ShopCategory from './pages/ShopCategory';
import Signup from './pages/Signup.jsx';
import IndividualProduct from './pages/IndividualProduct';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/candles',
        element: <Products />
      }, {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/bundles',
        element: <ShopCategory category="bundles" />
      },
      {
        path: '/products/:id',
        element: <IndividualProduct />
      },
      {
        path: '/cart',
        element: <ShoppingCart />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>}/>
//         <Route path="/candles" element={<ShopCategory category="candles" />} /> 
//         <Route path="/bundles" element={<ShopCategory category="bundles"/>} />
//         <Route path="/products" element={<Products/>} />
//           <Route path=":productId" element={<Products/>} />
//         <Route path="/login" element={<LoginSignup/>} />
//         <Route path="/cart" element={<ShoppingCart/>} />
//       </Routes>
      
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
