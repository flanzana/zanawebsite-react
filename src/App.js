import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themePurple, themeBlue, themeGreen, themeOrange, themeRed, themeDark } from './theme/globalStyle';
import Header from './components/Header.js';
import ColorChanger from './components/ColorChanger.js';
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
			theme: themePurple,
			isNavbarFixed: false,
			scrollFromTop: 0,
			windowWidth: window.innerWidth,
			shouldShowMenu: false,
		};
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleWindowSizeChange);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleWindowSizeChange);
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
		this.setState({ windowWidth: window.innerWidth });
	};

	handleColorChange = (event) => {
		let clickedTheme = event.target.getAttribute('name');
		switch(clickedTheme) {
			case "themeRed":
				this.setState({ theme: themeRed });
				break
			case "themeOrange":
				this.setState({ theme: themeOrange });
				break
			case "themeGreen":
				this.setState({ theme: themeGreen });
				break
			case "themeBlue":
				this.setState({ theme: themeBlue });
				break
			case "themePurple":
				this.setState({ theme: themePurple });
				break
			case "themeDark":
				this.setState({ theme: themeDark });
				break
			default:
				this.setState({ theme: themePurple });
		}
	}

	toggleMenu = () => {
		const menuShow = this.state.shouldShowMenu;
		this.setState({ shouldShowMenu: !menuShow });
	}

	render() {
		const { theme, isNavbarFixed, windowWidth, shouldShowMenu } = this.state;

		return (
			<ThemeProvider theme={theme}>
				<Wrapper>
					<Header isNavbarFixed={isNavbarFixed} />
					<NavBar isNavbarFixed={isNavbarFixed} width={windowWidth} toggleMenu={this.toggleMenu} />
					{(windowWidth < 700) && shouldShowMenu && <SideBar isNavbarFixed={isNavbarFixed} />}
					<MainContentWrapper>
						<AboutMe />
						<Skills skills={skills} />
						<ColorChanger handleColorChange={this.handleColorChange} />
						<Projects projects={projects} />
					</MainContentWrapper>
					<Footer />
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
