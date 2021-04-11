/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css, keyframes } from "styled-components"
import { NAVBAR_HEIGHT } from "../../consts"
import { ThemeType } from "../../types"
import { CSS_MEDIA_QUERY } from "../../theme/consts"

type StyledProps = {
  theme: ThemeType
}

type StyledPropsWithIsScrolledOverHeader = {
  theme: ThemeType
  isScrolledOverHeader: boolean
}

const moveSidebarDesktop = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 300px;
    }
`

const moveSidebarMobile = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

export const StyledHeader = styled.header`
  position: relative; // because of Particles
  height: 50vh;
  width: 100%;
  background-color: ${(props: StyledProps) => props.theme.backgroundPrimary};
`

export const StyledNavbar = styled.nav`
  height: ${NAVBAR_HEIGHT}px;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  padding: 0 10px 0 20px;
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
    letter-spacing: 2px;
    font-size: 28px;
    margin: 0;
  }

  @media ${CSS_MEDIA_QUERY.MIN_TABLET} {
    width: calc(100% - 20px);
    padding: 0 0 0 20px;
  }
`

export const StyledItem = styled.a`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: ${(props: StyledProps) => props.theme.textWhite};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.4s;
  outline: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: ${(props: StyledProps) => props.theme.backgroundPrimaryHover};
  }
}
`

export const StyledNavbarMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  height: 100%;

  ${StyledItem} {
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
`

export const StyledHamburgerIcon = styled.button`
  color: ${(props: StyledProps) => props.theme.textWhite};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props: StyledProps) => props.theme.buttonBackgroundHover};
    transition: 0.4s;
  }
`

export const StyledCloseSidebarIcon = styled.button`
  color: ${(props: StyledProps) => props.theme.textWhite};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  outline: none;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props: StyledProps) => props.theme.buttonBackgroundHover};
    transition: 0.4s;
  }
`

export const StyledSidebar = styled.aside`
  background-color: ${(props: StyledProps) => props.theme.backgroundSidebar};
  margin: 0;
  padding: ${NAVBAR_HEIGHT}px 0 0 0;
  width: 100%;
  height: 100vh;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  animation: ${moveSidebarMobile} 0.6s ease;
  position: fixed;
  z-index: 910;

  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    animation: ${moveSidebarDesktop} 0.6s ease;
    width: 300px;
  }
`

export const StyledSidebarMenu = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;

  ${StyledItem} {
    display: block;
    width: 100%;
    padding: 16px 0;
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
  font-size: 60px;
  letter-spacing: 4px;
  margin: 0 40px;
  text-shadow: 0 2px 4px ${(props: StyledProps) => props.theme.buttonBoxShadow};

  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    font-size: 80px;
    letter-spacing: 6px;
    margin: 0 60px;
  }

  @media ${CSS_MEDIA_QUERY.MIN_TABLET} {
    font-size: 100px;
    letter-spacing: 8px;
  }
`
