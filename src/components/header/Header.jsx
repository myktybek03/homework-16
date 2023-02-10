import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyleLi>
          <h1>Logo</h1>
          <li>
            <StyledLink to="/productPage">Products</StyledLink>
          </li>
          <li>
            <StyledLink to="/myCart">My Cart</StyledLink>
          </li>
          <li>
            <StyledLink to="/myOrders">My Orders</StyledLink>
          </li>
        </StyleLi>
      </StyledHeader>
      <Outlet />
    </>
  )
}

export default Header

const StyledHeader = styled.header`
  background-color: #63c3e9;
  width: 100%;
  padding: 10px;
  color: white;
`

const StyleLi = styled.ul`
  list-style: none;
  display: flex;
  color: white;
  font-size: 20px;
  justify-content: space-around;
  color: white;
  align-items: center;
  li {
    cursor: pointer;
  }
`
const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  :hover {
    color: #3b3a3a;
  }
  &.active {
    color: #3b3a3a;
  }
`
