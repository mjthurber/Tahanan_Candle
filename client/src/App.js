
import './App.css';
import Navbar from './components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Products from '../src/pages/Products';
import LoginSignup from '../src/pages/LoginSignup';
import ShoppingCart from '../src/pages/ShoppingCart';
import ShopCategory from '../src/pages/ShopCategory';

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
