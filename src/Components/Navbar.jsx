import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import mobile from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  margin-left: 25px;
  padding: 5px;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  ${mobile({ margin: "0px 5px 0px 10px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  color: #712B75;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  color: black;
`;
const UserName = styled.div`
  font-size: 20px;

  margin-left: 25px;
  font-style: oblique;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  color: black;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ fontSize: "16", color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>E-SHOPE</Logo>
          </Link>
        </Center>

        <Right>
          {user ? (
            <UserName>Hello ,{user.username}</UserName>
          ) : (
            <Link to="/register" style={{ textDecoration: "none" }}>
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}

          {user ? (
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
