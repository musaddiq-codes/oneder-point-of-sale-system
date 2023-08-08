import React from 'react'
import LeftContainer from '../../components/LeftContainer/LeftContainer'
import RightContainer from '../../components/RightContainer/RightContainer'

const DishesPage = (props) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <LeftContainer toggleTheme={props.toggleTheme} themeStyles={props.themeStyles} />
        <RightContainer themeStyles={props.themeStyles} />
      </div>

    </>)
}

export default DishesPage
