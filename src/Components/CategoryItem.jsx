import { Link } from "react-router-dom";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  height: 70vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 120px;
  border: none;
  padding: 10px;
  background-color: white;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1rem;
  color: gray;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    background-color: lightcyan;
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title} </Title>
        <Link to={`/products/${item.cat}`}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
