import React from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const products = [
  {
    title: "Product Name1",
    id: "1",
  },
  {
    title: "Product Name2",
    id: "2",
  },
  {
    title: "Product Name3",
    id: "3",
  },
]

const Products = ({ onClick }) => {
  const navigate = useNavigate()

  const exitHandler = () => {
    navigate(-1)
  }
  return (
    <>
      <div>
        <StyleUl>
          {products.map((product) => (
            <StyleLi key={product.id}>
              {product.title}
              <StyleLink to={`${product.id}`} onClick={onClick}>
                Detail
              </StyleLink>
            </StyleLi>
          ))}
          <Button onClick={exitHandler}>Go back</Button>
        </StyleUl>
      </div>
    </>
  )
}

export default Products

const StyleUl = styled.ul`
  display: grid;
  margin: 0;
  list-style: none;
  padding: 20px;
  justify-content: center;
  gap: 20px;
`

const StyleLi = styled.li`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 20px;
`

const StyleLink = styled(Link)`
  padding: 15px 30px;
  text-decoration: none;
  background-color: green;
  color: white;
  border-radius: 30px;
`

const Button = styled.button`
  text-align: center;
  padding: 20px 30px;
  background-color: #19ae9f;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`
