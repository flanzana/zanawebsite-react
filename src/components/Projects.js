import React from 'react';
import styled from 'styled-components';
import SectionLayout from "./SectionLayout";

const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectItem = styled.a`
    width: 180px;
    padding: 10px;
    margin: 15px;
    text-decoration: none;
    color: ${props => props.theme.textNormal};
    border-radius: 10px;
    transition: .4s;
    box-shadow: 0 2px 4px 0 ${props => props.theme.projectBoxShadow};

    .project-name {
        text-decoration: none;
        text-align: center;
        margin: 3px 0;
        font-size: 13px;
    }

    &:hover {
      transition: .4s;
      background-color: ${props => props.theme.backgroundNormalHover};
      box-shadow: 0 4px 12px 0 ${props => props.theme.projectBoxShadow};
    }
    
    &:active {
      transition: .2s;
      background-color: ${props => props.theme.backgroundNormalHover};
      box-shadow: 0 2px 6px 0 ${props => props.theme.projectBoxShadow};
    }
`;

const Projects = ({ projects }) => (
    <SectionLayout id="projects" title="Projects">
        <ProjectsWrapper>
            {projects.map((project, index) => (
                <ProjectItem key={index} href={project.url} target='_blank' rel="noopener noreferrer">
                    <img className='project-img' src={project.img} alt={`Screenshot of ${project.name}`} width='180'/>
                    <span className='project-name'>{project.name}</span>
                </ProjectItem>
            ))}
        </ProjectsWrapper>
    </SectionLayout>
)

export default Projects;