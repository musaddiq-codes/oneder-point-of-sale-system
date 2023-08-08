import React from 'react';
// import HeaderAppBar from '../../HeaderContainer/HeaderAppBar';
import { Outlet } from "react-router-dom";
import OrderAppBar from './OrderAppBar/OrderAppBar';


const OrderPageHeader = () => {
  return (
    <>
      <OrderAppBar />
      <Outlet />
    </>
  )
}

export default OrderPageHeader