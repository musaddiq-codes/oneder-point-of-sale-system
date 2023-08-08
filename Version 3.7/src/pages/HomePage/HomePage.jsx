import React from 'react';
import LeftContainer from '../../components/LeftContainer/LeftContainer'
import RightContainer from '../../components/RightContainer/RightContainer'



const HomePage = (props) => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <LeftContainer toggleTheme={props.toggleTheme}  themeStyles={props.themeStyles} />
                <RightContainer themeStyles={props.themeStyles} />
            </div>

        </>
    )
}

export default HomePage

