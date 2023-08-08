import React from 'react'
// import SearchBar from '../HeaderContainer/SearchBar/SearchBar'
import RightContainerCards from './RCComponents/RightContainerCards'
import RCDetails from './RCComponents/TableData'
// import RCFooter from './RCComponents/RCFooter'
import RightContainerHeader from './RCComponents/RightContainerHeader'
import { Button } from '@mui/material'
import styles from './rightcontainer.module.css'

const RightContainer = () => {

  return (
    // <div>
    <div className={styles.rightcontainer}>
      <RightContainerHeader />
      <div style={{ height: "550px", backgroundColor: '#000312', marginTop: "4px" }} >
        <RightContainerCards />
        <RightContainerCards />
      </div>
      <RCDetails />
      <div style={{ display: 'flex', marginTop: 'auto' }}>
        <Button variant='contained' sx={{ width: "50%", padding: 1, backgroundColor: '#3538CE' }}>KOT</Button>
        <Button variant='contained' sx={{ width: "50%", padding: 1, backgroundColor: '#583AAB' }}>Place Order</Button>
      </div>
    </div>
  )
}

export default RightContainer

