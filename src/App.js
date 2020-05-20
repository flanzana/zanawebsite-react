// @flow
import React, { useState, useRef } from "react"
import styled, { ThemeProvider } from "styled-components"
import { NAVBAR_HEIGHT, themeDarkMode, themeLightMode } from "./theme/globalStyle"
import Header from "./components/Header.js"
import NavBar from "./components/NavBar.js"
import SideBar from "./components/SideBar.js"
import AboutMe from "./components/AboutMe.js"
import Skills from "./components/Skills.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import ToggleThemeButton from "./components/ToggleThemeButton"
import { SKILLS, PROJECTS } from "./data/data.js"
import useWindowSize from "./helpers/useWindowSize"
import useWindowScrollYPosition from "./helpers/useWindowScrollYPosition"

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
          <Skills skills={SKILLS} />
          <Projects projects={PROJECTS} />
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
