// @flow
import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import ProjectCard from "./ProjectCard"
import type { ProjectsType } from "../../types"

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

type Props = {|
  projects: ProjectsType,
|}

const Projects = ({ projects }: Props) => (
  <SectionLayout id="projects" title="Projects">
    <ProjectsWrapper>
      {projects.map(project => (
        <ProjectCard
          key={project.name}
          name={project.name}
          url={project.url}
          img={<img src={project.img} alt={`Screenshot of ${project.name}`} />}
        />
      ))}
    </ProjectsWrapper>
  </SectionLayout>
)

export default Projects
