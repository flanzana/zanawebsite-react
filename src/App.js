import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyle';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import ContactButtons from './components/ContactButtons.js';
import Footer from './components/Footer.js';
import { skills, projects } from './data/data.js';

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

class App extends Component {
	state = {
		theme: theme,
		skills: skills,
		projects: projects
	};

	render() {
		const { theme, skills, projects } = this.state;

		return (
			<ThemeProvider theme={theme}>
				<Wrapper>
					<Header/>
					<MainContent>
						<AboutMe/>
						<Skills skills={skills} />
						<Projects projects={projects} />
					</MainContent>
					<Footer/>
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
