import React from "react"
import { StyledItem } from "./style"

type Props = {
  href: string
  title: string
  onClick?: () => void
}

export const MenuItem: React.FC<Props> = ({ href, title, onClick }: Props) => (
  <li>
    <StyledItem href={href} onClick={onClick}>
      {title}
    </StyledItem>
  </li>
)

export default MenuItem
