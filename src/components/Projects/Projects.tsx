import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import ProjectCard from "./ProjectCard"
import type { ProjectsType, ProjectType } from "../../types"
import { CSS_MEDIA_QUERY } from "../../theme/consts"

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

type Props = {
  projects: ProjectsType
}

const Projects: React.FC<Props> = ({ projects }: Props) => (
  <SectionLayout id="projects" title="Projects">
    <ProjectsWrapper>
      {projects.map((project: ProjectType) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          urlWeb={project.urlWeb}
          urlCode={project.urlCode}
          img={<img src={project.img} alt={`Screenshot of ${project.name}`} />}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </ProjectsWrapper>
  </SectionLayout>
)

export default Projects
