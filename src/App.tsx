import React, { useState, useRef } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import SideBar from "./components/NavBar/SideBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Button from "./components/common/Button"
import data from "./data/data"
import { useWindowSize, useWindowScrollYPosition } from "./helpers/customHooks"
import GlobalStyle from "./theme/GlobalStyle"
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme/consts"
import { NAVBAR_HEIGHT } from "./consts"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeType } from "./types"

type StyledProps = {
  theme: ThemeType
  isNavbarFixed: boolean
}

const MainContentWrapper = styled.div`
  color: ${(props: StyledProps) => props.theme.textNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.isNavbarFixed ? 0 : `${NAVBAR_HEIGHT}px`)};
  background-color: ${props => props.theme.backgroundNormal};
`

const App: React.FC = () => {
  const windowSize = useWindowSize()
  const windowScrollYPosition = useWindowScrollYPosition()
  const [theme, setTheme] = useState(THEME_LIGHT_MODE)
  const [shouldShowSideBar, setShouldShowSideBar] = useState(false)
  const navBarRef = useRef<HTMLHeadingElement>(null)

  const shouldShowHamburgerIcon = windowSize.width < 700
  const isToggleThemeModeVisible = windowScrollYPosition > NAVBAR_HEIGHT
  const isNavbarFixed = windowScrollYPosition > windowSize.height
  const isArrowVisible = windowScrollYPosition < 40
  const isCurrentDarkMode = theme.type === "dark"

  const toggleSideBar = () => {
    setShouldShowSideBar(!shouldShowSideBar)
  }
  const toggleThemeMode = () => {
    setTheme(isCurrentDarkMode ? THEME_LIGHT_MODE : THEME_DARK_MODE)
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
        <MainContentWrapper isNavbarFixed={isNavbarFixed}>
          <AboutMe />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
        </MainContentWrapper>
        <Footer />
        {isToggleThemeModeVisible && (
          <Button
            type="theme"
            size="small"
            onClick={toggleThemeMode}
            iconName={isCurrentDarkMode ? faSun : faMoon}
            ariaLabel={`Switch to ${isCurrentDarkMode ? "light" : "dark"} mode`}
          />
        )}
      </>
    </ThemeProvider>
  )
}

export default App
