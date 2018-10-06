import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/globalStyle";
import Header from "./components/Header.js";

const Wrapper = styled.div`
  text-align: center;
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
          <Header/>
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
