// @flow
import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import SkillCard from "./SkillCard"
import type { SkillsType } from "../../types"

const SkillSection = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1200px;
`

type Props = {|
  skills: SkillsType,
|}

const Skills = ({ skills }: Props) => (
  <SectionLayout id="skills" title="Skills">
    <SkillSection>
      {skills.map(skill => (
        <SkillCard key={skill.type} title={skill.title} list={skill.list} />
      ))}
    </SkillSection>
  </SectionLayout>
)

export default Skills
