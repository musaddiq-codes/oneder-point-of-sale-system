import HomePage from './components/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import About from "./About"
// import Contacts from "./Contacts"  
import './App.css'
import Error from "./components/ErrorPage/Error"
import HeaderAppBar from "./components/HomePage/LeftContainer/LCComponents/AppBarComp/HeaderAppBar"
import NestedHeaderNavBar from "./components/OrderPage/OrderPageAppBar/NestedHeaderNavBar"
// import Customers from "./components/OrderPage/Customers"
import OrderPage from "./components/OrderPage/OrderPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderAppBar />} >
            <Route index element={<HomePage />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contacts />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/orders" element={<NestedHeaderNavBar />}>
            <Route index element={<OrderPage />} />
            {/* <Route path="/orders/customers" element={<Customers />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
