import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageAppBar from './components/Headers/HomeHeader/HomePageHeader';
import HomePage from './pages/HomePage/HomePage';
import Error from "./pages/ErrorPage/Error";
import SignIn from './components/Forms/UserSignIn';
import SignUp from './components/Forms/UserSignUp';
import AllForms from './pages/FormsPage/AllForms';
import GetData from './components/GetData/GetData';
import DeshboardHeader from './components/Headers/DeshboardHeader/DeshboardHeader';
import DeshboardPage from './pages/DeshboardPage/DeshboardPage';
import OrderHeader from './components/Headers/OrderHeader/OrderHeader';
import OrderPage from './pages/OrderPage/OrderPage';
// import Products from './components/Forms/Products';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import CategoryForm from './components/Forms/Category';
import DiscountForm from './components/Forms/Discount';
import Products from './components/Forms/Products';
import TablesForm from './components/Forms/Tables';
import ModefierForm from './components/Forms/Modifiers';
import PrinterForm from './components/Forms/Printers'


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} >
            <Route index element={<SignIn />} />
            <Route path="*" element={<Error />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/home" element={<HomePageAppBar toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} >
            <Route index element={<HomePage toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} />
            {/* <Route path="/printers" element={<Printers />} /> */}
            {/* <Route path="/modifiers" element={<Modifiers />} /> */}
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/catagaries" element={<Category />} /> */}
          </Route>
          <Route path="/deshboard" element={<DeshboardHeader toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />}>
            <Route index element={<DeshboardPage />} />
            <Route path="/deshboard/allforms" element={<AllForms />} />
            <Route path="/deshboard/categoryform" element={<CategoryForm />} />
            <Route path="/deshboard/discountform" element={<DiscountForm />} />
            {/* <Route path="/deshboard/getcategory" element={<GetData />} /> */}
            {/* <Route path="/deshboard/printerform" element={<PrinterForm />} /> */}
            <Route path="/deshboard/productform" element={<Products />} />
            <Route path="/deshboard/tableform" element={<TablesForm />} />
            <Route path="/deshboard/modefierform" element={<ModefierForm />} />
            <Route path="/deshboard/printerform" element={<PrinterForm />} />
          </Route>
          <Route path="/orders" element={<OrderHeader toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />}>
            <Route index element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

// export default App



const lightTheme = {
  backgroundColor: 'white',
  color: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  color: 'white',
};

function ThemeToggle(props) {
  // Initialize the theme state with the light theme
  const [theme, setTheme] = useState(lightTheme);

  // Define the function to toggle the theme
  function toggleTheme() {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }
  // 
  // Render the component with the current theme styles applied

  return (
    <div style={theme} className='maindiv' >


      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <App toggleTheme={toggleTheme} themeStyles={theme} />

      {props.children}

    </div>
  );

}

export default ThemeToggle;
