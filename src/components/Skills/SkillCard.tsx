import React from "react"
import styled from "styled-components"
import SkillBullets from "./SkillBullets"
import type { SkillList } from "../../types"

const StyledSkillCard = styled.div`
  width: 230px;
  height: fit-content;
  padding: 20px;
  text-decoration: none;
  color: ${props => props.theme.textNormal};
  border: 0.5px solid ${props => props.theme.backgroundNormalHover};
  border-radius: 10px;
  box-shadow: 1px 2px 6px 0 ${props => props.theme.projectBoxShadow};
`

const StyledSkillTitle = styled.h2`
  font-size: 1.1em;
  color: ${props => props.theme.textPrimary};
  margin: 0 0 10px 0;
`

const StyledSkillList = styled.ul`
  width: 100%;
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
