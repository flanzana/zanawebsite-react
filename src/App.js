import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from "styled-components";
import { theme } from "./theme/globalStyle";

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.div`
  height: 100vh;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(16px + 2vmin);
`;

const HeaderTitle = styled.h1`
  font-weight: 900;
`;

const Main = styled.div`
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.h1`
  font-weight: 400;
  color: ${props => props.theme.secondary}
`;

class App extends Component {
  state = {
    theme: theme
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Header>
            <HeaderTitle>Žana Flander</HeaderTitle>
          </Header>
          <Main>
            <MainTitle>Under construction</MainTitle>
            <p>Under construction</p>
          </Main>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
