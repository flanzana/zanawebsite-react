import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import ProjectCard from "./ProjectCard"
import type { ProjectType } from "../../types"
import { CSS_MEDIA_QUERY } from "../../theme/consts"
import { Section } from "../../consts"
import { projects } from "../../data/data"

const ProjectsWrapper = styled.div`
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

const Projects: React.FC = () => (
  <SectionLayout id={Section.Projects} title="Projects">
    <ProjectsWrapper>
      {projects.map((project: ProjectType) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </ProjectsWrapper>
  </SectionLayout>
)

export default Projects
