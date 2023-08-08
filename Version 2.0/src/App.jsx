import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import Error from "./components/ErrorPage/Error"
import HeaderAppBar from "./components/HeaderContainer/AppBarComp/HeaderAppBar"
import NestedHeaderNavBar from "./components/OrderPage/OrderPageAppBar/NestedHeaderNavBar"
import OrderPage from "./components/OrderPage/OrderPage"
import SignIn from './components/Forms/SignIn'
import SignUp from './components/Forms/SignUp'
// import Auth from './components/Forms/Auth/Auth'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderAppBar />} >
            <Route index element={<HomePage />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            {/* <Route path="auth" element={<Auth />} /> */}
          </Route>
          <Route path="/orders" element={<NestedHeaderNavBar />}>
            <Route index element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
