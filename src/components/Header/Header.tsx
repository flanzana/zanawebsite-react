import React from "react"
import {
  StyledBanner,
  StyledBannerHeading,
  StyledHamburgerIcon,
  StyledHeader,
  StyledNavBar,
  StyledNavBarMenu,
  StyledSideBar,
} from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Particles from "react-particles-js"
import { PARTICLES_PARAMS_DESKTOP, PARTICLES_PARAMS_MOBILE } from "../../consts"

type ItemProps = {
  href: string
  title: string
  toggleSideBar?: () => void
}

const Item = ({ href, title, toggleSideBar }: ItemProps) => (
  <li>
    <a href={href} onClick={toggleSideBar}>
      {title}
    </a>
  </li>
)

type Props = {
  isMobile: boolean
  toggleSideBar: () => void
  isScrolledOverHeader: boolean
  shouldShowSideBar: boolean
}

const Header: React.FC<Props> = ({
  isMobile,
  toggleSideBar,
  isScrolledOverHeader,
  shouldShowSideBar,
}: Props) => {
  return (
    <StyledHeader>
      <StyledNavBar isScrolledOverHeader={isScrolledOverHeader}>
        {isScrolledOverHeader ? <h1>Žana Flander</h1> : <div />}
        {isMobile ? (
          <StyledHamburgerIcon onClick={toggleSideBar} aria-label="Toggle dropdown menu">
            <FontAwesomeIcon icon={faBars} aria-hidden="true" />
          </StyledHamburgerIcon>
        ) : (
          <StyledNavBarMenu>
            <Item href="#aboutme" title="About me" />
            <Item href="#skills" title="Skills" />
            <Item href="#projects" title="Projects" />
          </StyledNavBarMenu>
        )}
      </StyledNavBar>
      {isMobile && shouldShowSideBar && (
        <StyledSideBar>
          <Item href="#aboutme" title="About me" toggleSideBar={toggleSideBar} />
          <Item href="#projects" title="Projects" toggleSideBar={toggleSideBar} />
          <Item href="#skills" title="Skills" toggleSideBar={toggleSideBar} />
        </StyledSideBar>
      )}
      <StyledBanner>
        <StyledBannerHeading>Žana Flander</StyledBannerHeading>
      </StyledBanner>
      <Particles
        width="100%"
        height="50vh"
        params={isMobile ? PARTICLES_PARAMS_MOBILE : PARTICLES_PARAMS_DESKTOP}
      />
    </StyledHeader>
  )
}

export default Header
