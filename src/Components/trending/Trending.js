import React from "react";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";
import data from "./Data.js";

function Trending() {
  return (
    <>
      <NFTWrapper>
        <TrendingText>
          <h1>Trending Collection</h1>
          <p>Checkout our weekly updated trending collection.</p>
        </TrendingText>
        <CardWrapper>
          {data.map((info) => (
            <CollectionCard
              image1={info.image1}
              image2={info.image2}
              image3={info.image3}
              image4={info.image4}
              image5={info.image5}
            />
          ))}
        </CardWrapper>
      </NFTWrapper>
    </>
  );
}

export default Trending;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const TrendingText = styled.div`
  color: white;
  h1 {
    font-size: 38px;
    font-weight: 600;
    line-height: 46px;
    text-align: left;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    line-height: 35px;
    text-align: left;
  }
  margin-bottom: 80px;
`;

const NFTWrapper = styled.div`
height: 836px;`;
