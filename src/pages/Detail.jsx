import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

const Detail = ({ product }) => {
  const { productId } = useParams()
  const navigate = useNavigate()

  const exitHandler = () => {
    navigate(-1)
    product(false)
  }

  return (
    <StyleCart>
      <h2>Product information {productId}</h2>
      <Button onClick={exitHandler}>Go Back!</Button>
    </StyleCart>
  )
}

export default Detail

const StyleCart = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 20px;
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
