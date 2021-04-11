import React, { useState } from "react"
import { StyledBanner, StyledBannerHeading, StyledHeader } from "./style"
import Particles from "react-particles-js"
import { PARTICLES_PARAMS_DESKTOP, PARTICLES_PARAMS_MOBILE } from "../../consts"
import Sidebar from "./Sidebar"
import { useMediaQuery } from "../../helpers/customHooks"
import Navbar from "./Navbar"

const Header: React.FC = () => {
  const { isTablet } = useMediaQuery()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <StyledHeader>
      <Navbar toggleSidebar={toggleSidebar} />
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
