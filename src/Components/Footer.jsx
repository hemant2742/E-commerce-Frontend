import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 1rem 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcons = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #${(props) => props.bgc};
  color: whitesmoke;
  margin-right: 1.25rem;
`;
const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
`;
const Title = styled.h3`
  margin-bottom: 2rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 1.25rem;

  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Fashnest.</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
          magnam? Perspiciatis, nemo ab eaque adipisci quia nam iure
          repellendus, aliquam at natus ipsum corrupti nesciunt. Porro nobis
          nisi fugiat officiis?
        </Desc>
        <SocialContainer>
          <SocialIcons bgc="3B5999">
            <FacebookIcon />
          </SocialIcons>
          <SocialIcons bgc="E4405F">
            <InstagramIcon />
          </SocialIcons>
          <SocialIcons bgc="E60023">
            <PinterestIcon />
          </SocialIcons>
          <SocialIcons bgc="55ACEE">
            <TwitterIcon />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          22, Prafulla Sarkar St, Esplanade, Chowringhee North, Bow Barracks,
          Kolkata, West Bengal 700072
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> (033) 2586471
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} /> contact@jui.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
