import React from "react"
import styled from "styled-components"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Button from "../common/Button"
import { CSS_MEDIA_QUERY } from "../../theme/consts"
import { useMediaQuery } from "../../helpers/customHooks"

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.backgroundPrimary};
  color: ${props => props.theme.textWhite};
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`

const StyledDescription = styled.p`
  font-size: 12px;
  margin: 0 auto;
  padding: 0 20px;
`

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 270px;

  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    width: 350px;
  }
`

const Footer: React.FC = () => {
  const { isMobile } = useMediaQuery()
  const buttonSize = isMobile ? "normal" : "large"
  return (
    <FooterWrapper>
      <ContactButtonsWrapper>
        <Button
          iconName={faLinkedinIn}
          href="https://www.linkedin.com/in/zanaflander"
          type="contact"
          ariaLabel="LinkedIn"
          size={buttonSize}
        />
        <Button
          iconName={faGithub}
          href="https://github.com/flanzana"
          type="contact"
          ariaLabel="GitHub"
          size={buttonSize}
        />
        <Button
          iconName={faTwitter}
          href="https://twitter.com/flanzana"
          type="contact"
          ariaLabel="Twitter"
          size={buttonSize}
        />
        <Button
          iconName={faEnvelope}
          href="mailto:zana.flander@gmail.com"
          type="contact"
          ariaLabel="E-mail"
          size={buttonSize}
        />
      </ContactButtonsWrapper>
      <StyledDescription>Designed and coded with ❤ by Žana Flander © 2021</StyledDescription>
    </FooterWrapper>
  )
}

export default Footer
