import React from "react"
import styled, { keyframes } from "styled-components"
import { NAVBAR_HEIGHT } from "../../consts"

const movesidebar = keyframes`
    0% {
        height: 30px;
    }
    100% {
        height: 153px;
    }
`

const SideBarWrapper = styled.div`
  background-color: ${props => props.theme.backgroundPrimary};
  margin-top: ${NAVBAR_HEIGHT}px;
  width: 200px;
  list-style: none;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${movesidebar} 0.6s ease-out 1;

  &.fixed {
    position: fixed;
    z-index: 800;
    top: 0;
  }

  a {
    color: ${props => props.theme.textWhite};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    display: block;
    width: 100%;
    height: 100%;
    padding: 16px 0;
    cursor: pointer;
    transition: 0.4s;
    cursor: pointer;
    transition: 0.4s;
    outline: none;

    &:hover,
    &:focus {
      background-color: ${props => props.theme.backgroundPrimaryHover};
    }
  }
`

type Props = {
  isNavbarFixed: boolean
}

type NavItemProps = {
  href: string
  title: string
}

const NavItem = ({ href, title }: NavItemProps) => (
  <li>
    <a href={href}>{title}</a>
  </li>
)

const SideBar: React.FC<Props> = ({ isNavbarFixed }: Props) => (
  <SideBarWrapper id="sidebar" className={isNavbarFixed ? "fixed" : ""}>
    <NavItem href="#aboutme" title="About me" />
    <NavItem href="#skills" title="Skills" />
    <NavItem href="#projects" title="Projects" />
  </SideBarWrapper>
)

export default SideBar
