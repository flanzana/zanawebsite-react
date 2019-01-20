import React from 'react';
import styled from 'styled-components';
import { MainSection, MainTitle } from '../theme/globalStyle';

const AboutMeWrapper = styled.div`
    max-width: 900px;
    padding: 0 50px;

    a {
        color: ${props => props.theme.primary};
    }

    a:hover {
        color: ${props => props.theme.secondary}
    }
`;

const AboutMe = () => (
    <MainSection bgl id="aboutme">
        <MainTitle>About me</MainTitle>
        <AboutMeWrapper>
            <p>Hi! My name is Žana Flander from Slovenia and I am passionate about frontend web development and cartography. I gained expertise in cartography, GIS, land surveying, frontend web development and customer service. I am fluent in English, Slovenian and Spanish. I have studied and worked abroad. My full work experience and education can be seen on <a href="https://www.linkedin.com/in/zanaflander" target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>. My hobbies are yoga, volleyball and chess. I am always eager to learn and engage in new things.</p>
        </AboutMeWrapper>
    </MainSection>
)

export default AboutMe;