import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeDarkMode, themeLightMode } from './theme/globalStyle';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import ToggleThemeButton from "./components/ToggleThemeButton";
import { skills, projects } from './data/data.js';

const Wrapper = styled.div`
	text-align: center;
`;

const MainContentWrapper = styled.div`
	color: ${props => props.theme.textNormal};
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
			theme: themeLightMode,
			isNavbarFixed: false,
			isToggleThemeModeVisible: false,
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
		let headerHeight = document.getElementById('header').clientHeight;
		let navbarHeight = document.getElementById('navbar').clientHeight;
		this.setState({ scrollFromTop: window.scrollY });

		if ((this.state.scrollFromTop) > headerHeight) {
			this.setState({ isNavbarFixed: true });
		} else {
			this.setState({ isNavbarFixed: false });
		}

		if ((this.state.scrollFromTop) > navbarHeight) {
			this.setState({ isToggleThemeModeVisible: true });
		} else {
			this.setState({ isToggleThemeModeVisible: false });
		}
	};

	handleWindowSizeChange = () => {
		this.setState({ windowWidth: window.innerWidth });
	};

	toggleMenu = () => {
		const menuShow = this.state.shouldShowMenu;
		this.setState({ shouldShowMenu: !menuShow });
	}

	toggleThemeMode = () => {
		const isCurrentDarkMode = this.state.theme === themeDarkMode;
		this.setState({ theme: isCurrentDarkMode ? themeLightMode : themeDarkMode });
		this.setState({ shouldShowMenu: false });
	}

	render() {
		const { theme, isNavbarFixed, isToggleThemeModeVisible, windowWidth, shouldShowMenu } = this.state;

		return (
			<ThemeProvider theme={theme}>
				<Wrapper>
					<Header isNavbarFixed={isNavbarFixed} />
					<NavBar isNavbarFixed={isNavbarFixed} width={windowWidth} toggleMenu={this.toggleMenu} />
					{(windowWidth < 700) && shouldShowMenu && <SideBar isNavbarFixed={isNavbarFixed} />}
					<MainContentWrapper>
						<AboutMe />
						<Skills skills={skills} />
						<Projects projects={projects} />
					</MainContentWrapper>
					<Footer />
					{isToggleThemeModeVisible && (
						<ToggleThemeButton onClick={this.toggleThemeMode} isCurrentDarkMode={theme.type === "dark"} />
					)}
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
