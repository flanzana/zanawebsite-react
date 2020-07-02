import React from "react"
import styled from "styled-components"
import SkillBullets from "./SkillBullets"
import type { SkillList } from "../../types"

const StyledSkillCard = styled.div`
  padding: 15px 20px;
`

const StyledSkillTitle = styled.h2`
  font-size: 1.2em;
  color: ${props => props.theme.textPrimary};
  margin: 0 0 0.7em 0;
`

const StyledSkillList = styled.ul`
  width: 225px;
  font-size: 0.95em;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledSkillItem = styled.li`
  padding: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    span {
      font-weight: bold;
    }

    svg {
      padding: 0 3.5px;
    }

    svg:last-of-type {
      padding-right: 0;
    }
  }
`

const StyledSkillLevel = styled.span`
  color: ${props => props.theme.textSecondary};
  font-weight: bold;
`

type Props = {
  title: string
  list: SkillList[]
}

const SkillCard: React.FC<Props> = ({ title, list }: Props) => (
  <StyledSkillCard>
    <StyledSkillTitle>{title}</StyledSkillTitle>
    <StyledSkillList>
      {list.map(item => (
        <StyledSkillItem key={item.name}>
          <span>{item.name}</span>
          {typeof item.level === "number" ? (
            <SkillBullets level={item.level} />
          ) : (
            <StyledSkillLevel>{item.level}</StyledSkillLevel>
          )}
        </StyledSkillItem>
      ))}
    </StyledSkillList>
  </StyledSkillCard>
)

export default SkillCard
