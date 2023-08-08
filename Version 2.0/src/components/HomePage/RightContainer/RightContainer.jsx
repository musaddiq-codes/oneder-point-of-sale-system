import React from 'react'
// import SearchBar from '../HeaderContainer/SearchBar/SearchBar'
import RightContainerCards from './RCComponents/RightContainerCards'
import RCDetails from './RCComponents/TableData'
// import RCFooter from './RCComponents/RCFooter'
import RightContainerHeader from './RCComponents/RightContainerHeader'
// style={{ display: 'flex', flexDirection: 'column', height: '100vh', }}
import { Button } from '@mui/material'
import styles from './rightcontainer.module.css'

const RightContainer = () => {

  return (
    // <div>
    <div className={styles.rightcontainer}>
      <RightContainerHeader />
      <div style={{ height: "550px", backgroundColor: '#000312', marginTop: "4px" }} >
        {/* <div className={rightcontainerstyles.rightcontainercards}><RightContainerC  ards /></div>
        <div className={rightcontainerstyles.rightcontainercards}><RightContainerCards /></div> */}
        <div style={{ marginTop: "6px", marginBottom: '6px', borderLeft: '4px solid green', borderRight: '4px solid green' }}><RightContainerCards /></div>
        <div style={{ marginTop: "4px", marginBottom: '6px', borderLeft: '4px solid green', borderRight: '4px solid green' }}><RightContainerCards /></div>
      </div>
      {/* <div>
        <RCDetails />
      </div> */}
      {/* <div style={{ marginTop: 'auto' }}>
        <div style={{ display: 'flex', }}>
          <div style={{ width: '50%', textAlign: 'center', marginLeft: '6px' }}>
            <Button variant='contained' sx={{ width: "100%", padding: 1, backgroundColor: '#3538CE' }}>KOT</Button>
          </div>
          <div style={{ width: '50%', textAlign: 'center', marginLeft: '6px' }}>
            <Button variant='contained' sx={{ width: "100%", padding: 1, backgroundColor: '#583AAB' }}>Place Order</Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export  default RightContainer