// @flow
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const StyledToggleThemeButton = styled.a`
  width: calc(${props => props.size} + 2vmin);
  height: calc(${props => props.size} + 2vmin);
  font-size: calc(${props => props.size} + 2vmin);
  color: ${props => props.theme.textWhite};
  background-color: ${props => props.theme.buttonToggleBackground};
  border-radius: 50%;
  padding: calc(${props => props.size} / 3 + 0.5vmin);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  z-index: 1;
  transition: 0.4s;
  box-shadow: 0 1px 3px 0 ${props => props.theme.buttonBoxShadow};

  &:hover {
    background-color: ${props => props.theme.buttonBackgroundHover};
    transition: 0.4s;
    box-shadow: 0 4px 8px 0 ${props => props.theme.buttonBoxShadow};
  }

  &:active {
    background-color: ${props => props.theme.buttonBackgroundHover};
    transition: 0.2s;
    box-shadow: 0 2px 4px 0 ${props => props.theme.buttonBoxShadow};
  }
`

type Props = {|
  onClick: () => void,
  isCurrentDarkMode: boolean,
|}

const ToggleThemeButton = ({ onClick, isCurrentDarkMode }: Props) => (
  <StyledToggleThemeButton
    onClick={onClick}
    onKeyPress={onClick}
    size="10px"
    tabIndex="0"
    aria-label={`Switch to ${isCurrentDarkMode ? "light" : "dark"} mode`}
  >
    <FontAwesomeIcon icon={isCurrentDarkMode ? faSun : faMoon} aria-hidden="true" />
  </StyledToggleThemeButton>
)

export default ToggleThemeButton
