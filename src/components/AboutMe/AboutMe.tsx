import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"
import TextLink from "../common/TextLink"

const AboutMeWrapper = styled.div`
  max-width: 800px;
  padding: 0 50px;
`

const StyledText = styled.p`
  line-height: 1.5em;
`

const AboutMe: React.FC = () => (
  <SectionLayout id="aboutme" title="About me">
    <AboutMeWrapper>
      <StyledText>
        Hi! My name is Žana Flander and I am passionate about frontend web development and web
        design. I have gained expertise in frontend web development, cartography, GIS and land
        surveying. My full work experience and education can be seen on{" "}
        <TextLink href="https://www.linkedin.com/in/zanaflander" type="primary">
          my LinkedIn profile
        </TextLink>
        . I am fluent in English, Slovenian and Spanish. My hobbies are yoga, volleyball and chess.
        I am always eager to learn and engage in new things.
      </StyledText>
    </AboutMeWrapper>
  </SectionLayout>
)

export default AboutMe
