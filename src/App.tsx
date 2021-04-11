import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "./components/Header/Header"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Button from "./components/common/Button"
import GlobalStyle from "./theme/GlobalStyle"
import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme/consts"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeType } from "./types"
import { useMediaQuery } from "./helpers/customHooks"

type StyledProps = {
  theme: ThemeType
}

const StyledMain = styled.main`
  color: ${(props: StyledProps) => props.theme.textNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundNormal};
`

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { isMobile } = useMediaQuery()

  return (
    <ThemeProvider theme={isDarkMode ? THEME_DARK_MODE : THEME_LIGHT_MODE}>
      <>
        <GlobalStyle />
        <Header />
        <StyledMain>
          <AboutMe />
          <Skills />
          <Projects />
        </StyledMain>
        <Footer />
        <Button
          type="theme"
          size={isMobile ? "small" : "normal"}
          onClick={() => setIsDarkMode(!isDarkMode)}
          iconName={isDarkMode ? faSun : faMoon}
          ariaLabel={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        />
      </>
    </ThemeProvider>
  )
}

export default App
