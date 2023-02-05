import Navbar from './Components/navbar/Navbar'
import styled from 'styled-components';
import Hero from './Components/herosection/Hero';
function App() {
  return (
    <>

    <Container>
    <Navbar/>
    <Hero/>
    </Container>
    </>
  );
}

export default App;

const Container=styled.div`
background-color: #2B2B2B
;

`
