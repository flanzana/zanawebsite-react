import React, { useRef } from "react"
import { StyledCloseSidebarIcon, StyledSidebar } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Item } from "./Header"
import { useOnClickOutside } from "../../helpers/customHooks"
import { Section } from "../../consts"

type Props = {
  toggleSidebar: () => void
}

const Sidebar: React.FC<Props> = ({ toggleSidebar }: Props) => {
  const sidebarRef = useRef(null)
  useOnClickOutside(sidebarRef, toggleSidebar)
  return (
    <StyledSidebar ref={sidebarRef}>
      <StyledCloseSidebarIcon onClick={toggleSidebar} aria-label="Close sidebar menu">
        <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
      </StyledCloseSidebarIcon>
      <ul>
        <Item href={`#${Section.AboutMe}`} title="About me" onClick={toggleSidebar} />
        <Item href={`#${Section.Skills}`} title="Skills" onClick={toggleSidebar} />
        <Item href={`#${Section.Projects}`} title="Projects" onClick={toggleSidebar} />
      </ul>
    </StyledSidebar>
  )
}

export default Sidebar
