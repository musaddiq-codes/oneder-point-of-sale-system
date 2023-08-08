import React from 'react'
import { useState } from 'react'
// import CategoryForm from '../../components/Forms/Category'
import Discount from '../../components/Forms/Discount'
import DiscountForm from '../../components/Forms/Discount'
import ModefierForm from '../../components/Forms/Modifiers'
import ProductForm from '../../components/Forms/Products'
import Restorants from '../../components/Forms/Restaurants';
import TablesForm from '../../components/Forms/Tables'
// import ControlledTreeView from '../../components/Library/TreeViews/TreeViewA/TreeView'
const Category = () => {
  const [rightform, setRightForm] = useState('category')
  if (rightform == 'category') {
    return ( 
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
       
        {/* <CategoryForm /> */}
      </div>
    )
  } else if (rightform == 'discount') {
    return ( 
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <DiscountForm />
      </div>
    )
  } else if (rightform == 'modefier') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <ModefierForm />
      </div>
    )
  } else if (rightform == 'products') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <ProductForm />
      </div>
    )
  } else if (rightform == 'restorants') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <Restorants />
      </div>
    )
  } else if (rightform == 'tables') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <TablesForm />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <Discount />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <Discount />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        {/* <ControlledTreeView setRightForm={setRightForm} rightform={rightform} /> */}
        <Discount />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <Discount />
    )
  }
}

export default Category