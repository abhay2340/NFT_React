import React from "react";
import styled from "styled-components";

function CollectionCard(props) {
  return (
    <>
      <GridcontainerWrapper>
        <Gridcontainer>
          <Item1>
            <img alt="x" src={props.image1}></img>
          </Item1>
          <div>
            <Item2>
              <img alt="x" src={props.image2}></img>
            </Item2>
            <Item3>
              <img alt="x" src={props.image3}></img>
            </Item3>
            <Item4>
              <img alt="x" src={props.image4}></img>
            </Item4>
          </div>
        </Gridcontainer>
        <CollectionInfo>
          <h3>DSGN Animals</h3>
          <div>
            <img alt="x" src={props.image5}></img>
            <span>MrFox</span>
          </div>
        </CollectionInfo>
      </GridcontainerWrapper>
    </>
  );
}

export default CollectionCard;

const GridcontainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Gridcontainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }
`;
const Item1 = styled.div``;
const Item2 = styled.div``;
const Item3 = styled.div``;
const Item4 = styled.div``;

const CollectionInfo = styled.div`
  color: white;
  div {
    display: flex;
    align-items: flex-start;
    margin-top: -10px;
    span {
      margin-left: 5px;
    }
  }
`;
