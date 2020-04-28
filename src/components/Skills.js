import React from 'react';
import styled from 'styled-components';
import SkillBullets from './SkillBullets.js';
import SectionLayout from "./SectionLayout";

const SkillSection = styled.div`
    width: calc(100vw - 40px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1200px;

    .skl {
        padding: 15px 20px;
    }
`;

const SkillTitle = styled.h2`
    font-family: Coda, cursive;
    font-size: 1.2em;
    font-weight: 900;
    color: ${props => props.theme.textPrimary};
    text-align: center;
    margin-top: 0;
`;

const SkillList = styled.ul`
    width: 230px;
    font-size: 0.95em;
    list-style: none;
	margin: 0;
    padding: 0;
`;

const SkillItem = styled.li`
    padding: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:hover {
        span {
            font-weight: bold;
        }

        .fa-circle {
            padding: 0 4px;
        }

        .fa-circle:last-of-type {
            padding-right: 0;
        }
    }

    .lng {
        color: ${props => props.theme.textSecondary};
        font-weight: bold;
    }
`;

const Skills = ({ skills }) => (
    <SectionLayout id="skills" title="Skills">
        <SkillSection>
            <div className='skl'>
                <SkillTitle>Languages</SkillTitle>
                <SkillList>
                    {skills.language.map((lang, index) => (
                        <SkillItem key={index}>
                            <span className='skill-name'>{lang.name}</span>
                            <span className='skill-level lng'>{lang.level}</span>
                        </SkillItem>
                    ))}
                </SkillList>
            </div>
            <div className='skl'>
                <SkillTitle>Engineering</SkillTitle>
                <SkillList>
                    {skills.engineering.map((eng, index) => (
                        <SkillItem key={index}>
                            <span className='skill-name'>{eng.name}</span>
                            <SkillBullets level={eng.level} />
                        </SkillItem>
                    ))}
                </SkillList>
            </div>
            <div className='skl'>
                <SkillTitle>Web development</SkillTitle>
                <SkillList>
                    {skills.webdev.map((dev, index) => (
                        <SkillItem key={index}>
                            <span className='skill-name'>{dev.name}</span>
                            <SkillBullets level={dev.level} />
                        </SkillItem>
                    ))}
                </SkillList>
            </div>
            <div className='skl'>
                <SkillTitle>Design</SkillTitle>
                <SkillList>
                    {skills.design.map((des, index) => (
                        <SkillItem key={index}>
                            <span className='skill-name'>{des.name}</span>
                            <SkillBullets level={des.level} />
                        </SkillItem>
                    ))}
                </SkillList>
            </div>
        </SkillSection>
    </SectionLayout>
)

export default Skills;