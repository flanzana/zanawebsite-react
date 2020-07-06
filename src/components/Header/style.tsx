/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css, keyframes } from "styled-components"
import { NAVBAR_HEIGHT } from "../../consts"
import { ThemeType } from "../../types"

type StyledProps = {
  theme: ThemeType
}

type StyledPropsWithIsScrolledOverHeader = {
  theme: ThemeType
  isScrolledOverHeader: boolean
}

const moveSideBar = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 200px;
    }
`

export const StyledHeader = styled.div`
  position: relative; // because of Particles
  height: 50vh;
  width: 100%;
  background-color: ${(props: StyledProps) => props.theme.backgroundPrimary};
`

export const StyledNavBar = styled.div`
  height: ${NAVBAR_HEIGHT}px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  padding-left: 20px;
  position: fixed;
  z-index: 900;
  ${(props: StyledPropsWithIsScrolledOverHeader) =>
    props.isScrolledOverHeader &&
    css`
      box-shadow: 0 3px 8px ${props.theme.navbarBoxShadow};
      background-color: ${props.theme.backgroundPrimary};
    `}

  h1 {
    color: ${(props: StyledPropsWithIsScrolledOverHeader) => props.theme.textWhite};
    letter-spacing: 0.1em;
    font-size: 1.6em;
    margin: 0;
  }
`

export const StyledNavBarMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  height: 100%;

  li {
    height: 100%;
  }

  a {
    color: ${(props: StyledProps) => props.theme.textWhite};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    transition: 0.4s;
    outline: none;

    &:hover,
    &:focus {
      background-color: ${(props: StyledProps) => props.theme.backgroundPrimaryHover};
    }
  }
`

export const StyledHamburgerIcon = styled.button`
  color: ${(props: StyledProps) => props.theme.textWhite};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
  margin-right: 20px;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props: StyledProps) => props.theme.buttonBackgroundHover};
    transition: 0.4s;
  }
`

export const StyledSideBar = styled.ul`
  background-color: ${(props: StyledProps) => props.theme.backgroundSideBar};
  margin: ${NAVBAR_HEIGHT}px 0 0 0;
  padding: 0;
  width: 200px;
  list-style: none;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${moveSideBar} 0.6s ease;
  position: fixed;
  z-index: 800;

  a {
    color: ${(props: StyledProps) => props.theme.textWhite};
    white-space: nowrap;
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
    outline: none;

    &:hover,
    &:focus {
      background-color: ${(props: StyledProps) => props.theme.backgroundPrimaryHover};
    }
  }
`

export const StyledBanner = styled.div`
  position: absolute; // because of Particles
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledBannerHeading = styled.h1`
  color: ${(props: StyledProps) => props.theme.textWhite};
  text-transform: uppercase;
  font-size: calc(8px + 10vmin);
  letter-spacing: 0.1em;
  margin: 0.7em 30px;
  text-shadow: 0 2px 4px ${(props: StyledProps) => props.theme.buttonBoxShadow};
`
