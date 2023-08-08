import React from 'react'
import SearchBar from './RCComponents/SearchBar'
import OCContainer from './RCComponents/OCContainer'
import RCDetails from './RCComponents/TableData'
import RCFooter from './RCComponents/RCFooter'
import TableHeader from './RCComponents/TableHeader'
// style={{ display: 'flex', flexDirection: 'column', height: '100vh', }}
const RightContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width:'23%', height: '100vh', marginLeft: "10px", marginRight: '10px' }}>
      <div>
        <SearchBar />
      </div>
      <div>
        <TableHeader />
      </div>
      <div style={{ height: "550px" }}>
        <OCContainer />
        <OCContainer />
        <OCContainer />
      </div>
      <div>
        <RCDetails />
      </div>
      <div>
        <RCFooter />
      </div>
    </div>
  )
}

export default RightContainer