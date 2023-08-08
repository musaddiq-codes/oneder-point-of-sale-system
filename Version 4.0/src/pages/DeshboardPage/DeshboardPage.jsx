import React from 'react'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'

const DeshboardPage = (props) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <LeftContainer toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />
        <RightContainer themeStyles={props.themeStyles} />
      </div>

    </>)
}

export default DeshboardPage
