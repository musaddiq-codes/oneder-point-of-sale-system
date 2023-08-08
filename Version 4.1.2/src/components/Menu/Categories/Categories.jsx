import React from 'react'
import CategoryForm from '../../Forms/Category'
import CategoryTreeView from '../../Library/TreeViews/CategoryTreeView'
const Categories = () => {
  return (
    <div style={{display:'flex'}}>
      <CategoryTreeView />
      <CategoryForm />
    </div>
  )
}

export default Categories