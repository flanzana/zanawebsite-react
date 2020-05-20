// @flow
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import type { LevelType } from "../data/data"

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
  level: LevelType,
}

const SkillBullets = ({ level }: Props) => (
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

export default SkillBullets
