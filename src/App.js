// @flow
import React, { useState, useRef } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "./components/Header/Header.js"
import NavBar from "./components/NavBar/NavBar.js"
import SideBar from "./components/NavBar/SideBar.js"
import AboutMe from "./components/AboutMe/AboutMe.js"
import Skills from "./components/Skills/Skills.js"
import Projects from "./components/Projects/Projects.js"
import Footer from "./components/Footer/Footer.js"
import ToggleThemeButton from "./components/common/ToggleThemeButton"
import data from "./data/data.js"
import useWindowSize from "./helpers/useWindowSize"
import useWindowScrollYPosition from "./helpers/useWindowScrollYPosition"
import GlobalStyle from "./theme/GlobalStyle"
import { themeDarkMode, themeLightMode } from "./theme/consts"
import { NAVBAR_HEIGHT } from "./consts"

const MainContentWrapper = styled.div`
  color: ${props => props.theme.textNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.isNavbarFixed ? 0 : `${NAVBAR_HEIGHT}px`)};
  background-color: ${props => props.theme.backgroundNormal};
`

const App = () => {
  const windowSize = useWindowSize()
  const windowScrollYPosition = useWindowScrollYPosition()
  const [theme, setTheme] = useState(themeLightMode)
  const [shouldShowSideBar, setShouldShowSideBar] = useState(false)
  const navBarRef = useRef<null | HTMLElement>(null)

  const shouldShowHamburgerIcon = windowSize.width < 700
  const isToggleThemeModeVisible = windowScrollYPosition > NAVBAR_HEIGHT
  const isNavbarFixed = windowScrollYPosition > windowSize.height
  const isArrowVisible = windowScrollYPosition < 40
  const isCurrentDarkMode = theme.type === "dark"

  const toggleSideBar = () => {
    setShouldShowSideBar(!shouldShowSideBar)
  }
  const toggleThemeMode = () => {
    setTheme(isCurrentDarkMode ? themeLightMode : themeDarkMode)
    setShouldShowSideBar(false)
  }
  const scrollIntoNavBar = () => {
    navBarRef.current && navBarRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header isArrowVisible={isArrowVisible} onArrowClick={scrollIntoNavBar} />
        <NavBar
          isNavbarFixed={isNavbarFixed}
          shouldShowHamburgerIcon={shouldShowHamburgerIcon}
          toggleSideBar={toggleSideBar}
          ref={navBarRef}
        />
        {shouldShowHamburgerIcon && shouldShowSideBar && <SideBar isNavbarFixed={isNavbarFixed} />}
        <MainContentWrapper>
          <AboutMe />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
        </MainContentWrapper>
        <Footer />
        {isToggleThemeModeVisible && (
          <ToggleThemeButton onClick={toggleThemeMode} isCurrentDarkMode={isCurrentDarkMode} />
        )}
      </>
    </ThemeProvider>
  )
}

export default App
