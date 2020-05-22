// @flow
import React, { forwardRef } from "react"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { NAVBAR_HEIGHT } from "../../consts"

const movenavbar = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: ${NAVBAR_HEIGHT}px;
    }
`

const NavBarWrapper = styled.div`
  height: ${NAVBAR_HEIGHT}px;
  width: calc(100% - 20px);
  background-color: ${props => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 900;
  position: relative;
  animation: ${movenavbar} 0.3s ease-out 1;
  margin-bottom: -${NAVBAR_HEIGHT}px;
  top: 0;
  padding-left: 20px;
  box-shadow: 0 3px 8px ${props => props.theme.navbarBoxShadow};

  &.fixed {
    position: fixed;
  }

  h1 {
    color: ${props => props.theme.textWhite};
    letter-spacing: 0.1em;
    font-size: 30px;
    margin: 0;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    height: 100%;
  }

  li {
    height: 100%;
  }

  a {
    color: ${props => props.theme.textWhite};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    transition: 0.4s;

    &:hover {
      background-color: ${props => props.theme.backgroundPrimaryHover};
    }
  }
`

const StyledHamburgerIcon = styled.button`
  color: ${props => props.theme.textWhite};
  background-color: ${props => props.theme.backgroundPrimary};
  border: none;
  font-size: 30px;
  cursor: pointer;
  margin-right: 20px;
`

type Props = {|
  isNavbarFixed: boolean,
  shouldShowHamburgerIcon: boolean,
  toggleSideBar: () => void,
|}

type NavItemProps = {|
  href: string,
  title: string,
|}

const NavItem = ({ href, title }: NavItemProps) => (
  <li>
    <a href={href}>{title}</a>
  </li>
)

const NavBar = ({ isNavbarFixed, shouldShowHamburgerIcon, toggleSideBar }: Props, ref) => (
  <NavBarWrapper id="navbar" className={isNavbarFixed ? "fixed" : ""}>
    <h1 ref={ref}>Žana Flander</h1>

    {shouldShowHamburgerIcon ? (
      <StyledHamburgerIcon id="hamburger-icon" onClick={toggleSideBar}>
        <FontAwesomeIcon icon={faBars} aria-hidden="true" />
      </StyledHamburgerIcon>
    ) : (
      <ul>
        <NavItem href="#aboutme" title="About me" />
        <NavItem href="#skills" title="Skills" />
        <NavItem href="#projects" title="Projects" />
      </ul>
    )}
  </NavBarWrapper>
)

export default forwardRef<Props, HTMLElement>(NavBar)
