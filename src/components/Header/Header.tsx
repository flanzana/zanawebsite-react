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
import {
  NAVBAR_HEIGHT,
  PARTICLES_PARAMS_DESKTOP,
  PARTICLES_PARAMS_MOBILE,
  Section,
} from "../../consts"
import Sidebar from "./Sidebar"
import { useMediaQuery, useWindowScrollYPosition, useWindowSize } from "../../helpers/customHooks"

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
  const { isTablet } = useMediaQuery()
  const windowSize = useWindowSize()
  const windowScrollYPosition = useWindowScrollYPosition()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const isScrolledOverHeader = windowScrollYPosition > windowSize.height / 2 - NAVBAR_HEIGHT

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <StyledHeader>
      <StyledNavbar isScrolledOverHeader={isScrolledOverHeader}>
        {isScrolledOverHeader ? <h1>Žana Flander</h1> : <div />}
        {isTablet ? (
          <StyledHamburgerIcon onClick={toggleSidebar} aria-label="Open sidebar menu">
            <FontAwesomeIcon icon={faBars} aria-hidden="true" />
          </StyledHamburgerIcon>
        ) : (
          <StyledNavbarMenu>
            <Item href={`#${Section.AboutMe}`} title="About me" />
            <Item href={`#${Section.Skills}`} title="Skills" />
            <Item href={`#${Section.Projects}`} title="Projects" />
          </StyledNavbarMenu>
        )}
      </StyledNavbar>
      {isTablet && isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <StyledBanner>
        <StyledBannerHeading>Žana Flander</StyledBannerHeading>
      </StyledBanner>
      <Particles
        width="100%"
        height="50vh"
        params={isTablet ? PARTICLES_PARAMS_MOBILE : PARTICLES_PARAMS_DESKTOP}
      />
    </StyledHeader>
  )
}

export default Header
