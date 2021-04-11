import React from "react"
import styled from "styled-components"
import type { SkillType } from "../../types"

const StyledSkillCard = styled.div`
  width: 200px;
  height: fit-content;
  padding: 20px;
  text-decoration: none;
  color: ${props => props.theme.textNormal};
  border: 0.5px solid ${props => props.theme.backgroundNormalHover};
  border-radius: 10px;
  box-shadow: 1px 2px 6px 0 ${props => props.theme.projectBoxShadow};
`

const StyledSkillTitle = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.textPrimary};
  margin: 0 0 10px 0;
`

const StyledSkillListWithLevels = styled.ul`
  width: 100%;
  font-size: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledSkillItem = styled.li`
  padding: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-out;

  &:hover {
    font-weight: bold;
    letter-spacing: 0.5px;
  }
`

const StyledSkillLevel = styled.span`
  color: ${props => props.theme.textPrimary};
  font-weight: bold;
`

const StyledSkillListWithTags = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const StyledSkillTag = styled.div`
  font-size: 14px;
  letter-spacing: 0.3px;
  padding: 3px 5px;
  margin: 3px;
  border-radius: 5px;
  color: ${props => props.theme.textNormal};
  background: ${props => props.theme.backgroundNormalHover};
  transition: all 0.3s ease-out;

  &:hover {
    font-weight: bold;
    letter-spacing: 0.5px;
  }
`

const SkillCard: React.FC<SkillType> = ({ title, list }: SkillType) => {
  const isSkillListWithLevels = list.some(item => Boolean(item.level))
  return (
    <StyledSkillCard>
      <StyledSkillTitle>{title}</StyledSkillTitle>
      {isSkillListWithLevels ? (
        <StyledSkillListWithLevels>
          {list.map(item => (
            <StyledSkillItem key={item.name}>
              <span>{item.name}</span>
              <StyledSkillLevel>{item.level}</StyledSkillLevel>
            </StyledSkillItem>
          ))}
        </StyledSkillListWithLevels>
      ) : (
        <StyledSkillListWithTags>
          {list.map(item => (
            <StyledSkillTag key={item.name}>{item.name}</StyledSkillTag>
          ))}
        </StyledSkillListWithTags>
      )}
    </StyledSkillCard>
  )
}

export default SkillCard
