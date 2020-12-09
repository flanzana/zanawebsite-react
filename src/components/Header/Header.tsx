import React, { useState } from "react"
import {
  StyledBanner,
  StyledBannerHeading,
  StyledHamburgerIcon,
  StyledHeader,
  StyledNavbar,
  StyledNavbarMenu,
} from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Particles from "react-particles-js"
import { NAVBAR_HEIGHT, PARTICLES_PARAMS_DESKTOP, PARTICLES_PARAMS_MOBILE } from "../../consts"
import Sidebar from "./Sidebar"
import { useWindowScrollYPosition, useWindowSize } from "../../helpers/customHooks"
import { MEDIA_QUERY_BREAKPOINT } from "../../theme/consts"

type ItemProps = {
  href: string
  title: string
  onClick?: () => void
}

export const Item: React.FC<ItemProps> = ({ href, title, onClick }: ItemProps) => (
  <li>
    <a href={href} onClick={onClick}>
      {title}
    </a>
  </li>
)

const Header: React.FC = () => {
  const windowSize = useWindowSize()
  const windowScrollYPosition = useWindowScrollYPosition()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const isMobile = windowSize.width < MEDIA_QUERY_BREAKPOINT.TABLET
  const isScrolledOverHeader = windowScrollYPosition > windowSize.height / 2 - NAVBAR_HEIGHT

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <StyledHeader>
      <StyledNavbar isScrolledOverHeader={isScrolledOverHeader}>
        {isScrolledOverHeader ? <h1>Žana Flander</h1> : <div />}
        {isMobile ? (
          <StyledHamburgerIcon onClick={toggleSidebar} aria-label="Open sidebar menu">
            <FontAwesomeIcon icon={faBars} aria-hidden="true" />
          </StyledHamburgerIcon>
        ) : (
          <StyledNavbarMenu>
            <Item href="#aboutme" title="About me" />
            <Item href="#skills" title="Skills" />
            <Item href="#projects" title="Projects" />
          </StyledNavbarMenu>
        )}
      </StyledNavbar>
      {isMobile && isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
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
