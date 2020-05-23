import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const Circle = styled(FontAwesomeIcon)`
  font-size: 0.8em;
  padding: 0 2.5px;
  transition: all 0.3s ease-out;

  &.full {
    color: ${props => props.theme.textSecondary};
  }

  &.empty {
    color: ${props => props.theme.textSecondary};
    opacity: 0.2;
  }

  &:last-of-type {
    padding-right: 0;
  }
`

type Props = {
  level: number
}

const SkillBullets: React.FC<Props> = ({ level }: Props) => {
  if (level < 1 || level > 5) {
    throw new Error("Skill level has to be in range from 1 to 5.")
  }

  return (
    <span aria-label={`${level}/5`}>
      {level === 5 && (
        <>
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
        </>
      )}
      {level === 4 && (
        <>
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
        </>
      )}
      {level === 3 && (
        <>
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
        </>
      )}
      {level === 2 && (
        <>
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
        </>
      )}
      {level === 1 && (
        <>
          <Circle icon={faCircle} className="full" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
          <Circle icon={faCircle} className="empty" aria-hidden="true" />
        </>
      )}
    </span>
  )
}

export default SkillBullets
