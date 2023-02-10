import React from "react"
import { Outlet } from "react-router-dom"
import Products from "../components/products/Products"

const ProductsPage = ({ onClick, product }) => {
  return (
    <>
      <div>{product ? <Outlet /> : <Products onClick={onClick} />}</div>
    </>
  )
}

export default ProductsPage
