import React from "react"
import styled, { keyframes } from "styled-components"
import Particles from "react-particles-js"
import ContactButton from "./ContactButton.js"
import { PARTICLES_PARAMS_DESKTOP, PARTICLES_PARAMS_MOBILE } from "../consts"
import useWindowSize from "../helpers/useWindowSize"

const bounce = keyframes`
  0%   { transform: translateY(0); }
  40%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`

const StyledHeader = styled.div`
  height: 100vh;
  width: 100%;
  position: relative; // because of Particles
  background-color: ${props => props.theme.backgroundPrimary};
`

const HeaderWrapper = styled.div`
  position: absolute; // because of Particles
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.textWhite};
    text-transform: uppercase;
    font-size: calc(18px + 10vmin);
    letter-spacing: 0.1em;
    padding: 0 10px;
    text-shadow: 0 2px 4px ${props => props.theme.buttonBoxShadow};
  }
`

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: calc(250px + 2vmin);
`

const ArrowDown = styled.a`
  position: absolute;
  bottom: 5px;
  color: ${props => props.theme.textWhite};
  font-size: 28px;
  animation: ${bounce} 1.5s ease infinite;
  text-decoration: none;
  cursor: pointer;
`

const Header = ({ isArrowVisible, onArrowClick }) => {
  const isMobile = useWindowSize().width < 700
  return (
    <StyledHeader>
      <HeaderWrapper id="header">
        <h1>Žana Flander</h1>
        <ContactButtonsWrapper>
          <ContactButton
            iconName="fa fa-linkedin"
            href="https://www.linkedin.com/in/zanaflander"
            size="24px"
            ariaLabel="LinkedIn"
          />
          <ContactButton
            iconName="fa fa-github"
            href="https://github.com/flanzana"
            size="24px"
            ariaLabel="GitHub"
          />
        </ContactButtonsWrapper>
        {isArrowVisible && (
          <ArrowDown
            className="fa fa-angle-double-down"
            onClick={onArrowClick}
            aria-label="Scroll to content"
          />
        )}
      </HeaderWrapper>
      <Particles
        width="100%"
        height="100vh"
        params={isMobile ? PARTICLES_PARAMS_MOBILE : PARTICLES_PARAMS_DESKTOP}
      />
    </StyledHeader>
  )
}

export default Header
