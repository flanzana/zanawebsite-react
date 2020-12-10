import React from "react"
import styled from "styled-components"
import SectionLayout from "../common/SectionLayout"

const AboutMeWrapper = styled.div`
  max-width: 700px;
  padding: 0 50px;
`

const StyledText = styled.p`
  line-height: 1.5em;
`

const AboutMe: React.FC = () => (
  <SectionLayout id="aboutme" title="About me">
    <AboutMeWrapper>
      <StyledText>
        Hi! My name is Žana Flander and I am a frontend developer. I changed my career from geodesy
        to web development. Designing and building websites is my passion, and I am always eager to
        learn and engage in new things. I also love to play beach volleyball, chess and do yoga.
      </StyledText>
    </AboutMeWrapper>
  </SectionLayout>
)

export default AboutMe
