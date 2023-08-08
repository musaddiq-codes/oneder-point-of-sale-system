import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import Error from "./components/ErrorPage/Error"
import HeaderAppBar from "./components/HeaderContainer/HeaderAppBar"
import NestedHeaderNavBar from "./components/OrderPage/OrderPageAppBar/NestedHeaderNavBar"
import OrderPage from "./components/OrderPage/OrderPage"
import SignIn from './components/Forms/SignIn'
import SignUp from './components/Forms/SignUp'
import Customers from './components/Pages/Customers'
// import FormDialog from './components/Forms/FormsDialog'
// import EmptyPage from './components/SectionB/HomePageB/EmptyPage'
// import UpDownCards from './components/SectionB/SectionContainer'

import Cards from './components/Pages/Cards'

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* Make a home route which contains tab */}
          <Route path="/" element={<HeaderAppBar />} >
            <Route index element={<HomePage />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/takemodal" element={<FormDialog />} /> */}
          </Route>

          <Route path="/orders" element={<NestedHeaderNavBar />}>
            <Route index element={<OrderPage />} />
            <Route path="/orders/customers" element={<Customers />} />
          </Route>

        </Routes>

        {/* <Routes>
          <Route path="/" element={<HeaderAppBar />} >
            <Route index element={<HomePage />} />
            <Route path="*" element={<Error />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route path="/orders" element={<NestedHeaderNavBar />}>
            <Route index element={<OrderPage />} />
            <Route path="/orders/customers" element={<Customers />} />
          </Route>

        </Routes> */}

      </BrowserRouter>
    </>
  )
}

export default App
