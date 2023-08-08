import React from 'react'
import RightContainerCards from './RCComponents/RightContainerCards'
import RCDetails from './RCComponents/TableData'
import RightContainerHeader from './RCComponents/RightContainerHeader'
import { Button } from '@mui/material'
import rightcontainerstyles from './rightcontainer.module.css'

const RightContainer = (props) => {

  return (
    <div className={rightcontainerstyles.rightcontainer} style={props.themeStyles}>
      <RightContainerHeader />
      <div className={rightcontainerstyles.nesteddiv1} style={props.themeStyles}>
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

