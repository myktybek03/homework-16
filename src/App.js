import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import ProductsPage from "./pages/ProductsPage"
import MyCart from "./pages/MyCart"
import MyOrders from "./pages/MyOrders"
import { createGlobalStyle } from "styled-components"
import "./App.css"
import Detail from "./pages/Detail"
import { useState } from "react"

function App() {
  const [product, setProduct] = useState(false)

  const openProductHandler = () => {
    setProduct(true)
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/productPage/"
            element={
              <ProductsPage onClick={openProductHandler} product={product} />
            }
          >
            {/* <Route path="products/" element={<Products />}> */}
            <Route
              path=":productId"
              element={<Detail product={setProduct} />}
            />
          </Route>
          <Route path="myCart" element={<MyCart />} />
          <Route path="myOrders" element={<MyOrders />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
body{
  background-color: grey;
}
`
