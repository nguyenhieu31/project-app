import NavBarPage from './pages/navbar-page'
import NewPage from './pages/new-page'
// import HomePage from './pages/home-page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarPage />
        <Routes>
          <Route path="/" element={<NewPage />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
