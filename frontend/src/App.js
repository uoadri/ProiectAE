import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
         
            <Link to="/">Royal Fashion</Link>
          </div>
          <div className="header-links">
            <div className="dropdown">
                <a href="#">Products</a>
                <ul className="dropdown-content">
                  <li>
                  <Link to="/category/Pants">Pants</Link>
                  <Link to="/category/Shirts">Shirts</Link>
                  <Link to="/category/Jackets">Jackets</Link>
                  </li>
                </ul>
            </div>
            <Link to="/products">Manage Products</Link>
          </div>
        </header>
        
        <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">Product Catalog</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
