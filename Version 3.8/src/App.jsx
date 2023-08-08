
import './App.css'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageAppBar from './components/Headers/HomePageHeader/HomePageHeader';
import HomePage from './pages/HomePage/HomePage';
import Error from "./pages/ErrorPage/Error";
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';
import OrderPageAppBar from './components/Headers/OrderPageHeader/OrderPageHeader';
import OrderPage from './pages/OrderPage/OrderPage';
import Category from './components/Forms/Category'
import GetData from './components/GetData/GetData';
import DishesPage from './pages/DishesPage/DishesPage';
function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageAppBar toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} >
            <Route index element={<HomePage toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} />
            <Route path="*" element={<Error />} />
            <Route path="/catagaries" element={<Category />} />
            <Route path="/getcategory" element={<GetData />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/orders" element={<OrderPageAppBar toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />}>
            <Route index element={<OrderPage />} />
          </Route>
          <Route path="/dishes" element={<HomePageAppBar toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />}>
            <Route index element={<DishesPage />} />
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
