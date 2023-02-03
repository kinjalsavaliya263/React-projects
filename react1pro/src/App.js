// import logo from './logo.svg';
import './App.css';
// import { createContext } from 'react';
// import UseReducer from './Component/UseReducer';
// import List_View from './Component/List_View';
// import Life_cycle from './Component/Life_cycle';
// import Life_Cycle_func from './Component/Life_Cycle_func';
import Home from './new web/Home';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Product from './new web/Product';
import AboutUs from './new web/AboutUs';
import LogIn from './new web/LogIn';
import SignUp from './new web/SignUp';
import Singlepage from './new web/Singlepage';
// import Admin from './Admin/Admin';




function App() {
  return (
    <>
      <div>

        {/* <header className="App-header">
          {/* <h1>The "React Way" to Render a List </h1> */}
        {/* <h1>React</h1> */}
        {/* <UseReducer /> */}
        {/* <List_View /> */}
        {/* <Life_cycle /> */}
        {/* <Life_Cycle_func /> */}

        {/* </header> */}
        <BrowserRouter>


          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/LogIn" element={<LogIn />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Singlepage/:id" element={<Singlepage />}></Route>
            {/* <Route path="/Admin" element={<Admin />}></Route> */}

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       <h1 style={{ color: "red" }}>Hello... kinjal savaliya</ h1>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  // );
}

export default App;
