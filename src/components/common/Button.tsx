import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { ThemeType } from "../../types"

type ButtonType = "contact" | "theme"
type ButtonSize = "small" | "normal" | "large"
type ButtonStyle =
  | "backgroundButton"
  | "backgroundButtonHover"
  | "textButton"
  | "textButtonHover"
  | "boxShadowButton"
  | "boxShadowButtonHover"
  | "boxShadowButtonActive"

const getButtonSizes = (name: "fontSize" | "buttonSize" | "buttonPadding", size: ButtonSize) => {
  const tokens = {
    fontSize: {
      small: "16px",
      normal: "24px",
      large: "32px",
    },
    buttonSize: {
      small: "16px",
      normal: "24px",
      large: "32px",
    },
    buttonPadding: {
      small: "6px",
      normal: "8px",
      large: "10px",
    },
  }
  return tokens[name][size]
}

const getButtonStyles = (name: ButtonStyle, type: ButtonType, theme: ThemeType) => {
  const tokens = {
    backgroundButton: {
      contact: theme.buttonBackground,
      theme: theme.buttonToggleBackground,
    },
    backgroundButtonHover: {
      contact: theme.buttonBackgroundHover,
      theme: theme.buttonBackgroundHover,
    },
    boxShadowButton: {
      contact: `0 2px 4px 0 ${theme.buttonBoxShadow}`,
      theme: `0 1px 3px 0 ${theme.buttonBoxShadow}`,
    },
    boxShadowButtonHover: {
      contact: `0 4px 12px 0 ${theme.buttonBoxShadow}`,
      theme: `0 4px 8px 0 ${theme.buttonBoxShadow}`,
    },
    boxShadowButtonActive: {
      contact: `0 2px 6px 0 ${theme.buttonBoxShadow}`,
      theme: `0 2px 8px 0 ${theme.buttonBoxShadow}`,
    },
    textButton: {
      contact: theme.buttonText,
      theme: theme.textWhite,
    },
    textButtonHover: {
      contact: theme.buttonTextHover,
      theme: theme.textWhite,
    },
  }
  return tokens[name][type]
}

type StyledProps = {
  type: ButtonType
  size: ButtonSize
  theme: ThemeType
}

const StyledButton = styled.a`
  width: ${(props: StyledProps) => getButtonSizes("buttonSize", props.size)};
  height: ${props => getButtonSizes("buttonSize", props.size)};
  font-size: ${props => getButtonSizes("fontSize", props.size)};
  color: ${props => getButtonStyles("textButton", props.type, props.theme)};
  background-color: ${props => getButtonStyles("backgroundButton", props.type, props.theme)};
  border-radius: 50%;
  padding: ${props => getButtonSizes("buttonPadding", props.size)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.4s;
  box-shadow: ${props => getButtonStyles("boxShadowButton", props.type, props.theme)};
  outline: none;
  ${props =>
    props.type === "theme" &&
    css`
      position: fixed;
      right: 10px;
      bottom: 10px;
      z-index: 1;
    `};

  &:hover,
  &:focus {
    transition: 0.4s;
    background-color: ${props => getButtonStyles("backgroundButtonHover", props.type, props.theme)};
    color: ${props => getButtonStyles("textButtonHover", props.type, props.theme)};
    box-shadow: ${props => getButtonStyles("boxShadowButtonHover", props.type, props.theme)};
  }

  &:active {
    transition: 0.2s;
    box-shadow: ${props => getButtonStyles("boxShadowButtonActive", props.type, props.theme)};
  }
`

type Props = {
  type: ButtonType
  href?: string
  onClick?: () => void
  iconName: IconDefinition
  size?: ButtonSize
  ariaLabel: string
}

const Button: React.FC<Props> = ({
  type,
  href,
  onClick,
  iconName,
  size = "normal",
  ariaLabel,
}: Props) => (
  <StyledButton
    type={type}
    href={href}
    onClick={onClick}
    onKeyPress={onClick}
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={0}
    size={size}
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon icon={iconName} aria-hidden="true" />
  </StyledButton>
)

export default Button
