import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { ThemeType } from "../../types"

type TextLinkType = "primary" | "secondary"
type TextLinkSize = "small" | "normal" | "large"
type TextLinkStyle = "content" | "contentHover" | "backgroundActive"

const getTextLinkSizes = (name: "fontSize" | "iconSize", size: TextLinkSize) => {
  const tokens = {
    fontSize: {
      small: "0.9em",
      normal: "1em",
      large: "1.2em",
    },
    iconSize: {
      small: "0.7em",
      normal: "0.9em",
      large: "1.1em",
    },
  }
  return tokens[name][size]
}

const getTextLinkStyles = (name: TextLinkStyle, type: TextLinkType, theme: ThemeType) => {
  const tokens = {
    content: {
      primary: theme.textPrimary,
      secondary: theme.textNormal,
    },
    contentHover: {
      primary: theme.textSecondary,
      secondary: theme.textSecondary,
    },
    backgroundActive: {
      primary: theme.backgroundNormalHover,
      secondary: theme.backgroundNormalHover,
    },
  }
  return tokens[name][type]
}

type StyledProps = {
  type: TextLinkType
  size: TextLinkSize
  theme: ThemeType
}

const StyledTextLink = styled.a`
  font-size: ${(props: StyledProps) => getTextLinkSizes("fontSize", props.size)};
  font-weight: 900;
  color: ${props => getTextLinkStyles("content", props.type, props.theme)};
  cursor: pointer;
  outline: none;
  text-decoration: underline;
  transition: 0.4s;

  svg {
    font-size: ${(props: StyledProps) => getTextLinkSizes("iconSize", props.size)};
    padding-right: 4px;
  }

  &:hover {
    color: ${props => getTextLinkStyles("contentHover", props.type, props.theme)};
  }

  &:active,
  &:focus {
    color: ${props => getTextLinkStyles("contentHover", props.type, props.theme)};
    background-color: ${props => getTextLinkStyles("backgroundActive", props.type, props.theme)};
    border-radius: 4px;
  }
`

const StyledContent = styled.div`
  display: inline;
  align-items: center;
  padding: 4px;
`

type Props = {
  type: TextLinkType
  href?: string
  iconName?: IconDefinition
  size?: TextLinkSize
  ariaLabel?: string
  children: string
}

const TextLink: React.FC<Props> = ({
  type,
  href,
  iconName,
  size = "normal",
  ariaLabel,
  children,
}: Props) => (
  <StyledTextLink
    type={type}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    size={size}
    aria-label={ariaLabel}
  >
    {iconName ? (
      <StyledContent>
        <FontAwesomeIcon icon={iconName} aria-hidden="true" />
        {children}
      </StyledContent>
    ) : (
      children
    )}
  </StyledTextLink>
)

export default TextLink
