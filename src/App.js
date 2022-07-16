import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './components/header/header'
import Header from './components/header/header';
import Home from './components/home/home';
import DetailProduct from './pages/detail-product/detail-product'
import DashboardAdmin from './pages/dashboard-admin/dashboard-admin';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Products from './components/home/products';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Cart from './components/cart/cart';
import Checkout from './pages/checkout/checkout';
import {DataContext} from './context/context'
import { createContext, useState } from 'react'
import SearchBar from './pages/search/search'

function App() {
  const [dataSearch, setDataSearch] = useState([]);
  return <DataContext.Provider value={{ dataSearch, setDataSearch }}> (
    <div>
      <Header />
      <Container className="mt-5">
        <Routes>
          <Route path='/' element={<>
            <Home />
            <Products />
          </>
          } />
          <Route path='/detail-product/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/dashboard-admin' element={<DashboardAdmin />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
  </DataContext.Provider>
}

export default App;
