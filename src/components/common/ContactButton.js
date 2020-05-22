// @flow
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledContactButton = styled.a`
  width: calc(${props => props.size} + 2vmin);
  height: calc(${props => props.size} + 2vmin);
  font-size: calc(${props => props.size} + 2vmin);
  background-color: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  border-radius: 50%;
  padding: calc(${props => props.size} / 3 + 0.5vmin);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0 2px 4px 0 ${props => props.theme.buttonBoxShadow};

  &:hover {
    transition: 0.4s;
    background-color: ${props => props.theme.buttonBackgroundHover};
    color: ${props => props.theme.buttonTextHover};
    box-shadow: 0 4px 12px 0 ${props => props.theme.buttonBoxShadow};
  }

  &:active {
    transition: 0.2s;
    background-color: ${props => props.theme.buttonBackgroundHover};
    color: ${props => props.theme.buttonTextHover};
    box-shadow: 0 2px 6px 0 ${props => props.theme.buttonBoxShadow};
  }
`

type Props = {|
  href: string,
  iconName: string,
  size: string,
  ariaLabel: string,
|}

const ContactButton = ({ href, iconName, size, ariaLabel }: Props) => (
  <StyledContactButton
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    size={size}
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon icon={iconName} aria-hidden="true" />
  </StyledContactButton>
)

export default ContactButton