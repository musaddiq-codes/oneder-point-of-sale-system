import React from 'react'
// import HeaderAppBar from '../../HeaderContainer/HeaderAppBar'
import { Outlet } from "react-router-dom"
import OrderPageAppBar from './OrderPageAppBar/OrderPageAppBar'





const OrderPageHeader = () => {
  return (
    <>
      <OrderPageAppBar />
      <Outlet />
    </>
  )
}

export default OrderPageHeader