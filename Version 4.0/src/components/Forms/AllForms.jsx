import React from 'react'
import CategoryForm from './CategaryForm'
import { useState } from 'react'
import ControlledTreeView from '../Library/TreeViews/TreeView'
import Discount from './Discount'
import DiscountForm from './Discount'
import ModefierForm from './Modifiers'
import ProductForm from './Products'
import Restorants from './Restaurants';
import TablesForm from './Tables'
const Category = () => {
  const [rightform, setRightForm] = useState('category')
  if (rightform == 'category') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <CategoryForm />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <DiscountForm />
      </div>
    )
  } else if (rightform == 'modefier') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <ModefierForm />
      </div>
    )
  } else if (rightform == 'products') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <ProductForm />
      </div>
    )
  } else if (rightform == 'restorants') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <Restorants />
      </div>
    )
  } else if (rightform == 'tables') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <TablesForm />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <Discount />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
        <Discount />
      </div>
    )
  } else if (rightform == 'discount') {
    return (
      <div style={{ display: 'flex', width: "100%" }}>
        <ControlledTreeView setRightForm={setRightForm} rightform={rightform} />
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