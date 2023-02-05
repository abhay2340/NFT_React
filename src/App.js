import Navbar from "./Components/navbar/Navbar";
import styled from "styled-components";
import Hero from "./Components/herosection/Hero";
import Trending from "./Components/trending/Trending";
import Creators from "./Components/Creators/Creators";
function App() {
  return (
    <>
      <Container>
      <Navbar />
      <Container2>
        <Hero />
        <Trending />
        <Creators/>
        </Container2>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
background-color: #00101b;
background-image: linear-gradient(158deg, #00101b 0%, #00564d 50%, #000633 100%);

  overflow:hidden;
`;
const Container2 = styled.div`
  margin: 0 7rem;
`;
