import React from 'react'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'


const HomePage = () => {
    return (
        <div style={{ display:'flex', flexDirection:'row', height:'100vh'}}>
            {/* <div style={{width:'75%'}}> */}
                <LeftContainer />
            {/* </div> */}
            {/* <div style={{width:'25%', marginTop:'-65px'}}> */}
                <RightContainer />
            {/* </div> */}
        </div>
    )
}

export default HomePage