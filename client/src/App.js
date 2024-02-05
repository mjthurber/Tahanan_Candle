
import './App.css';
import Navbar from './Components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import ShoppingCart from './Pages/ShoppingCart';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/candles" element={<ShopCategory category="candles" />} /> 
        <Route path="/bundles" element={<ShopCategory category="bundles"/>} />
        <Route path="/products" element={<Products/>} />
          <Route path=":productId" element={<Products/>} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
