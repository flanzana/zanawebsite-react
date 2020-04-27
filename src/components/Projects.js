import React from 'react';
import { MainSection, MainTitle } from '../theme/globalStyle';
import styled from 'styled-components';
import imgsah from '../data/img/project-chess.png';
import imgmemory from '../data/img/project-memory.png';
import imgarcade from '../data/img/project-arcade.png';
import imgalmeria from '../data/img/project-almeria.png';
import imgtravellist from '../data/img/project-travel-list.png';

const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectItem = styled.a`
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    color: ${props => props.theme.textNormal};

    .project-name {
        text-decoration: none;
        text-align: center;
        margin: 3px 0;
    }

    &:hover {
        color: ${props => props.theme.textSecondary};
    }
`;

const Projects = ({ projects }) => (
    <MainSection id="projects">
        <MainTitle>Projects</MainTitle>
        <ProjectsWrapper>
            {projects.map((project, index) => (
                <ProjectItem key={index} href={project.url} target='_blank' rel="noopener noreferrer">
                    <p className='project-name'>{project.name}</p>
                    {(project.name==='Travel packing list') && (<img className='project-img' src={imgtravellist} alt={`Screenshot of ${project.name}`} width='180'/>)}
                    {(project.name==='Almería map') && (<img className='project-img' src={imgalmeria} alt={`Screenshot of ${project.name}`} width='180'/>)}
                    {(project.name==='Arcade game') && (<img className='project-img' src={imgarcade} alt={`Screenshot of ${project.name}`} width='180'/>)}
                    {(project.name==='Memory game') && (<img className='project-img' src={imgmemory} alt={`Screenshot of ${project.name}`} width='180'/>)}
                    {(project.name==='Website of chess club Braslovče') && (<img className='project-img' src={imgsah} alt={`Screenshot of ${project.name}`} width='180'/>)}
                </ProjectItem>
            ))}
        </ProjectsWrapper>
    </MainSection>
)

export default Projects;