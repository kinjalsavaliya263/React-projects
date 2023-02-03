
// import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Viewproducts from './Component/Viewproducts';
import Addproducts from './Component/Addproducts';
import Home from './Component/Home';
import Edit from './Component/Edit';
import Login from './Component/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Viewproducts" element={<Viewproducts />}></Route>
          <Route path="/Addproducts" element={<Addproducts />}></Route>
          <Route path="/Edit" element={<Edit />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
