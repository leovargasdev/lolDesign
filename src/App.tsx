import React from 'react';
import GlobalStyle from './styles/global';
import styled from 'styled-components';

import Form from './components/Form';
// import Logo from './assets/logo_loldesign_white.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
`;


const App: React.FC = () => (
  <>
    <Container>
      {/* <img src={Logo} width="100" height="auto" /> */}

      <Form />
    </Container>
    <GlobalStyle />
  </>
);

export default App;
