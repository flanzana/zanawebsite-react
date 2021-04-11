import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { ThemeType } from "../../types"

type TextLinkType = "primary" | "secondary"
type TextLinkStyle = "content" | "contentHover" | "backgroundActive"

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
  theme: ThemeType
}

const StyledTextLink = styled.a`
  font-size: 14px;
  font-weight: 900;
  color: ${(props: StyledProps) => getTextLinkStyles("content", props.type, props.theme)};
  cursor: pointer;
  outline: none;
  text-decoration: none;
  transition: 0.4s;

  svg {
    font-size: 10px;
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
  display: inline-flex;
  align-items: center;
`

type Props = {
  type: TextLinkType
  href?: string
  iconName?: IconDefinition
  ariaLabel?: string
  children: string
}

const TextLink: React.FC<Props> = ({ type, href, iconName, ariaLabel, children }: Props) => (
  <StyledTextLink
    type={type}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
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
