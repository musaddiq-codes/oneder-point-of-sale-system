import React from 'react'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'


const HomePage = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <LeftContainer />
                <RightContainer />
            </div>

        </>
    )
}

export default HomePage

