import React from 'react';
import styled from 'styled-components';
import SectionLayout from "./SectionLayout";

const AboutMeWrapper = styled.div`
    max-width: 900px;
    padding: 0 50px;

    a {
        color: ${props => props.theme.textPrimary};
    }

    a:hover {
        color: ${props => props.theme.textSecondary}
    }
`;

const AboutMe = () => (
  <SectionLayout id="aboutme" title="About me">
        <AboutMeWrapper>
            <p>Hi! My name is Žana Flander from Slovenia and I am passionate about frontend web development and web design. I have gained expertise in frontend web development, cartography, GIS and land surveying. I am fluent in English, Slovenian and Spanish. My full work experience and education can be seen on <a href="https://www.linkedin.com/in/zanaflander" target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>. My hobbies are yoga, volleyball and chess. I am always eager to learn and engage in new things.</p>
        </AboutMeWrapper>
  </SectionLayout>
)

export default AboutMe;