import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;

const Announcement = () => {
  return (
    <Conatiner>Super Deal! Free Shipping on Orders Over &#8377;500</Conatiner>
  );
};

export default Announcement;
