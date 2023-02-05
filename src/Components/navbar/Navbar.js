import React from "react";
import { HiArchive } from "react-icons/hi";
import { MdManageAccounts } from "react-icons/md";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <NavbarWrap>
        <Left>
          <HiArchive size={20} color={"#A259FF"} />
          <p>NFT Marketplace</p>
        </Left>
        <Right>
          <a href="#">Marketplace</a>
          <a href="#">Rankings</a>
          <a href="#">Connect a wallet</a>
          <Button>
            <MdManageAccounts size={30} color={"white"}/>
            <span>Sign Up</span>
          </Button>
        </Right>
      </NavbarWrap>
    </>
  );
}

export default Navbar;

const NavbarWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 50px;
`;
const Left = styled.div`
p{
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 3px;

font-weight:700;
color:white;
margin-left:10px;
}
display: flex;
align-items: center;
justify-content: center;`;
const Right = styled.div`
a{
font-family: 'Roboto Mono', monospace;

  text-decoration:none;
  color:white;
font-weight: 500;

}
display: flex;
align-items: center;
justify-content: center;
display: flex;
gap: 25px;
`;
const Button = styled.button`
border-style:none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 12px;
width: 152px;
height: 60px;

background: #04aaa5;
border-radius: 20px;
span{
  color:white;
font-size: 16px;
font-weight: 400;
text-align: center;

}
`;
