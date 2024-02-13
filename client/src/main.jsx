
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
import ShopBundle from './pages/ShopBundle';
import Signup from './pages/Signup.jsx';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';



import IndividualProduct from './pages/IndividualProduct';
import OrderHistory from './pages/OrderHistory.jsx';




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
        element: <ShopBundle category="bundles" />
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
        path: '/orderHistory',
        element: <OrderHistory />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/terms',
        element: <Terms />
      },
      {
        path: '/shipping',
        element: <Shipping />
      },
      {
        path: '/returns',
        element: <Returns />
      },
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
