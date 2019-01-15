import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyle';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import { skills, projects } from './data/data.js';

const Wrapper = styled.div`
	text-align: center;
`;

const MainContentWrapper = styled.div`
	color: ${props => props.theme.dark};
	background-color: ${props => props.theme.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${props => props.isNavbarFixed ? 0: "70px"};
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: theme,
			skills: skills,
			projects: projects,
			isNavbarFixed: false,
			scrollFromTop: 0,
			width: window.innerWidth,
			shouldShowMenu: false,
		};
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleWindowSizeChange);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	handleScroll = () => {
		let headerheight = document.getElementById('header').clientHeight;
		this.setState({ scrollFromTop: window.scrollY });

		if ((this.state.scrollFromTop) > headerheight) {
			this.setState({ isNavbarFixed: true });
		}
		else {
			this.setState({ isNavbarFixed: false });
		}
	};

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	toggleMenu = () => {
		const menuShow = this.state.shouldShowMenu;
		this.setState({ shouldShowMenu: !menuShow });
	}

	render() {
		const { theme, skills, projects, isNavbarFixed, width, shouldShowMenu } = this.state;

		return (
			<ThemeProvider theme={theme}>
				<Wrapper>
					<Header isNavbarFixed={isNavbarFixed} />
					<NavBar isNavbarFixed={isNavbarFixed} width={width} toggleMenu={this.toggleMenu} />
					{(width < 700) && shouldShowMenu && <SideBar isNavbarFixed={isNavbarFixed} />}
					<MainContentWrapper>
						<AboutMe />
						<Skills skills={skills} />
						<Projects projects={projects} />
					</MainContentWrapper>
					<Footer />
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
