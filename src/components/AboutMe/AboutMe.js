// @flow
import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"

const AboutMeWrapper = styled.div`
  max-width: 800px;
  padding: 0 50px;
`

const StyledText = styled.p`
  line-height: 1.5em;
`

const StyledTextLink = styled.a`
  color: ${props => props.theme.textPrimary};
  outline: none;

  &:hover {
    color: ${props => props.theme.textSecondary};
  }

  &:active,
  &:focus {
    background-color: ${props => props.theme.backgroundNormalHover};
    border-radius: 4px;
    color: ${props => props.theme.textSecondary};
  }
`

const AboutMe = () => (
  <SectionLayout id="aboutme" title="About me">
    <AboutMeWrapper>
      <StyledText>
        Hi! My name is Žana Flander and I am passionate about frontend web development and web
        design. I have gained expertise in frontend web development, cartography, GIS and land
        surveying. My full work experience and education can be seen on{" "}
        <StyledTextLink
          href="https://www.linkedin.com/in/zanaflander"
          target="_blank"
          rel="noopener noreferrer"
        >
          my LinkedIn profile
        </StyledTextLink>
        . I am fluent in English, Slovenian and Spanish. My hobbies are yoga, volleyball and chess.
        I am always eager to learn and engage in new things.
      </StyledText>
    </AboutMeWrapper>
  </SectionLayout>
)

export default AboutMe
