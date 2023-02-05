import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { GoRocket } from "react-icons/go";

function Creators() {
  return (
    <>
      <Headline>
        <div>
          <h1>Top Creators</h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <Button>
          <GoRocket size={30} color="white"></GoRocket>
          <span>View Ranking</span>
        </Button>
      </Headline>
      <CardGrid>
        <Card></Card>
      </CardGrid>
    </>
  );
}

export default Creators;

const Headline = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
  color: white;
  h1 {
    font-size: 38px;
    font-weight: 600;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 160%;
    text-transform: capitalize;
  }
`;
const Button = styled.button`
  border-style: none;
  display: flex;
  justify-content: center;
  min-width: 224px;
  height: 60px;
  padding: 20px;
  gap: 12px;
  background: none;
  border: 2px solid #04aaa5;
  border-radius: 20px;
  span {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
`;


const CardGrid=styled.div``