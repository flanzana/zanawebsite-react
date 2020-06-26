import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import ProjectCard from "./ProjectCard"
import type { ProjectsType, ProjectType } from "../../types"

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;

  & > div {
    margin: 15px;

    @media (min-width: 768px) {
      margin: 30px;
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
