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
import Customers from './pages/Customers'
// import FormDialog from './components/Forms/FormsDialog'
// import EmptyPage from './components/SectionB/HomePageB/EmptyPage'
// import UpDownCards from './components/SectionB/SectionContainer'

// import Cards from './components/Pages/Cards'



function App(props) {
  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* Make a home route which contains tab */}
          <Route path="/" element={<HomePageAppBar toggleTheme={props.toggleTheme} themeStyles={props.themeStyles}/>} >
            <Route index element={<HomePage toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/takemodal" element={<FormDialog />} /> */}
          </Route>
          <Route path="/orders" element={<OrderPageAppBar />}>
            <Route index element={<OrderPage />} />
            {/* <Route path="/orders/customers" element={<Customers />} /> */}
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
