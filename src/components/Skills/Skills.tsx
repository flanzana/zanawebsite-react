import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import SkillCard from "./SkillCard"
import type { SkillType } from "../../types"
import { CSS_MEDIA_QUERY } from "../../theme/consts"
import { Section } from "../../consts"
import { skills } from "../../data/data"

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

const Skills: React.FC = () => (
  <SectionLayout id={Section.Skills} title="Skills">
    <SkillsWrapper>
      {skills.map((skill: SkillType) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </SkillsWrapper>
  </SectionLayout>
)

export default Skills
