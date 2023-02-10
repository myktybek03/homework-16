import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const MyCart = () => {
  const navigate = useNavigate()

  const exitHandler = () => {
    navigate(-1)
  }
  return (
    <>
      <StyleCart>
        <p>My Cart Page</p>
        <Button onClick={exitHandler}>Go back</Button>
      </StyleCart>
    </>
  )
}

export default MyCart

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
