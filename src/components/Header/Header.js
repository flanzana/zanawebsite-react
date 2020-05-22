// @flow
import React from "react"
import styled, { keyframes } from "styled-components"
import Particles from "react-particles-js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import ContactButton from "../common/ContactButton.js"
import { PARTICLES_PARAMS_DESKTOP, PARTICLES_PARAMS_MOBILE } from "../../consts"
import useWindowSize from "../../helpers/useWindowSize"

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
  font-size: 22px;
  animation: ${bounce} 1.5s ease infinite;
  text-decoration: none;
  cursor: pointer;
`

type Props = {|
  isArrowVisible: boolean,
  onArrowClick: () => void,
|}

const Header = ({ isArrowVisible, onArrowClick }: Props) => {
  const isMobile = useWindowSize().width < 700
  return (
    <StyledHeader>
      <HeaderWrapper id="header">
        <h1>Žana Flander</h1>
        <ContactButtonsWrapper>
          <ContactButton
            iconName={faLinkedinIn}
            href="https://www.linkedin.com/in/zanaflander"
            size="24px"
            ariaLabel="LinkedIn"
          />
          <ContactButton
            iconName={faGithub}
            href="https://github.com/flanzana"
            size="24px"
            ariaLabel="GitHub"
          />
        </ContactButtonsWrapper>
        {isArrowVisible && (
          <ArrowDown onClick={onArrowClick} aria-label="Scroll to content">
            <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" />
          </ArrowDown>
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
