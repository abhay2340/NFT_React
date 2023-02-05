import React from "react";
import styled from "styled-components";
import { GoRocket } from "react-icons/go";

function Hero() {
  return (
    <>
      <Container>
        <Left>
          <h1>
            Discover <br></br>digital art & <br /> Collect NFTs
          </h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Button>
            <GoRocket color="white" size={25}></GoRocket>
            <span>Get Started</span>
          </Button>
          <AddtionalInfo>
            <TotalSale>
              <p>240k+</p>
              <p>Total Sale</p>
            </TotalSale>
            <Auctions>
              <p>240k+</p>
              <p>Total Sale</p>
            </Auctions>
            <Artists>
              <p>240k+</p>
              <p>Total Sale</p>
            </Artists>
          </AddtionalInfo>
        </Left>
        <Right>
          <HighlightedNFT>
            <img alt="sd" src='assets/highlightNFT.png'></img>
            <AboutNFT>
              {" "}
              <span>Space walking</span>
              <div>
                {" "}
                <img alt="s" src="./assets/Avatar1.png"></img>
                <span>Animakid</span>
              </div>
            </AboutNFT>
          </HighlightedNFT>
        </Right>
      </Container>
    </>
  );
}

export default Hero;

const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: row;
  align-items: space-around;
  justify-content: center;
  flex: 1;
  padding:125px 0px;;
  gap: 80px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  h1 {
    margin-top: -13px;
    font-size: 67px;
    font-weight: 600;
    line-height: 74px;
    text-align: left;
  }
  p {
    margin-top: -20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const Button = styled.button`
  border-style: none;
  display: flex;
  justify-content: center;

  width: 224px;
  height: 60px;
  padding: 20px;
  gap: 12px;

  background: #04aaa5;
  border-radius: 20px;
  span {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
`;
// const Button = styled.button`
// border-style:none;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// gap: 12px;
// width: 152px;
// height: 60px;

// background: #A259FF;
// border-radius: 20px;
// p{
//   color:white;
// font-size: 16px;
// font-weight: 600;
// text-align: center;

// }
// `;
const TotalSale = styled.div``;
const Auctions = styled.div``;
const Artists = styled.div``;

const AddtionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  height: 77px;
  font-family: "Roboto Mono", monospace;
  margin-top: 40px;
`;
const Right = styled.div``;
const HighlightedNFT = styled.div`
  background-color: #024f4c;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  border-radius: 20px 20px 20px 20px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutNFT = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
  div {
    margin-top: 7px;
    display: flex;
    justify-content: center;
    align-items: space-between;
    gap: 5px;
    font-weight: 400;
    font-size: 16px;
  }
`;
