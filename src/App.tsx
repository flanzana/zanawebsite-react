import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "./components/Header/Header"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Button from "./components/common/Button"
import data from "./data/data"
import { useWindowSize, useWindowScrollYPosition } from "./helpers/customHooks"
import GlobalStyle from "./theme/GlobalStyle"
import { MEDIA_QUERY_BREAKPOINT, THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme/consts"
import { NAVBAR_HEIGHT } from "./consts"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeType } from "./types"

type StyledProps = {
  theme: ThemeType
}

const MainContentWrapper = styled.div`
  color: ${(props: StyledProps) => props.theme.textNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundNormal};
`

const App: React.FC = () => {
  const windowSize = useWindowSize()
  const windowScrollYPosition = useWindowScrollYPosition()
  const [theme, setTheme] = useState(THEME_LIGHT_MODE)
  const [shouldShowSideBar, setShouldShowSideBar] = useState(false)

  const isMobile = windowSize.width < MEDIA_QUERY_BREAKPOINT.TABLET
  const isCurrentDarkMode = theme.type === "dark"
  const isScrolledOverHeader = windowScrollYPosition > windowSize.height / 2 - NAVBAR_HEIGHT

  const toggleSideBar = () => {
    setShouldShowSideBar(!shouldShowSideBar)
  }
  const toggleThemeMode = () => {
    setTheme(isCurrentDarkMode ? THEME_LIGHT_MODE : THEME_DARK_MODE)
    setShouldShowSideBar(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header
          isMobile={isMobile}
          toggleSideBar={toggleSideBar}
          isScrolledOverHeader={isScrolledOverHeader}
          shouldShowSideBar={shouldShowSideBar}
        />
        <MainContentWrapper>
          <AboutMe />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
        </MainContentWrapper>
        <Footer />
        <Button
          type="theme"
          size="small"
          onClick={toggleThemeMode}
          iconName={isCurrentDarkMode ? faSun : faMoon}
          ariaLabel={`Switch to ${isCurrentDarkMode ? "light" : "dark"} mode`}
        />
      </>
    </ThemeProvider>
  )
}

export default App
