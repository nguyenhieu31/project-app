import NavBarPage from './pages/navbar-page'
import NewPage from './pages/new-page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import FooterPage from './pages/footer-page';
import ProductDetailPage from './pages/product-detail-page';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarPage />
        <Routes>
          <Route path="/" element={<NewPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/new/products/:id" element={<ProductDetailPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
