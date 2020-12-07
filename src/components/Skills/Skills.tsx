import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import SkillCard from "./SkillCard"
import type { SkillsType, SkillType } from "../../types"
import { CSS_MEDIA_QUERY } from "../../theme/consts"

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;

  & > div {
    margin: 10px;

    @media ${CSS_MEDIA_QUERY.MIN_TABLET} {
      margin: 20px;
    }
  }
`

type Props = {
  skills: SkillsType
}

const Skills: React.FC<Props> = ({ skills }: Props) => (
  <SectionLayout id="skills" title="Skills">
    <SkillsWrapper>
      {skills.map((skill: SkillType) => (
        <SkillCard key={skill.title} title={skill.title} list={skill.list} />
      ))}
    </SkillsWrapper>
  </SectionLayout>
)

export default Skills
