import React from 'react';
import HomeLeftContainer from './LeftContainer/HomeLeftContainer'
import HomeRightContainer from './RightContainer/HomeRightContainer'

const HomePage = (props) => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <HomeLeftContainer toggleTheme={props.toggleTheme}  themeStyles={props.themeStyles} />
                <HomeRightContainer themeStyles={props.themeStyles} />
            </div>

        </>
    )
}

export default HomePage

