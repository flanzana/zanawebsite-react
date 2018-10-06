import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/globalStyle";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";

const Wrapper = styled.div`
	text-align: center;
`;

const MainContent = styled.div`
	color: ${props => props.theme.dark};
	background-color: ${props => props.theme.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Footer = styled.div`
	background-color: ${props => props.theme.primary};
	color: ${props => props.theme.white};
	height: 100px;
	display: flex;
	align-items: center;

	p {
		font-size: 12px;
		margin: 0 auto;
	}
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
					<MainContent>
						<AboutMe/>
						<Skills/>
						<Projects/>
					</MainContent>
					<Footer>
						<p>Coded and designed with ❤ by Žana Flander. © 2018</p>
					</Footer>
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
