import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Home from './component/Home';
// import Abut from './component/Abut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        {/* <Route path="/Abut" element={<Abut />}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
