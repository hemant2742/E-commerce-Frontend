import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { useState } from "react";
import mobile from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-color: lightcyan;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIdx * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin: 0px 0px 0px 200px;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoConatiner = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 1.1rem;
  font-size: 1.25rem;
  background-color: transparent;
  letter-spacing: 1.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 2.6rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2ee59d;
    box-shadow: #${(props) => props.bg};
    color: #fff;
    transform: translateY(-7px);
  }
`;

const Slider = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const handleClick = (direction) => {
    const size = sliderItems.length;
    if (direction === "left") {
      setSlideIdx(slideIdx > 0 ? slideIdx - 1 : size - 1);
    } else {
      setSlideIdx(slideIdx >= size - 1 ? 0 : slideIdx + 1);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIdx={slideIdx}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoConatiner>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button bg={item.bg}>SHOP NOW</Button>
            </InfoConatiner>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("left")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
