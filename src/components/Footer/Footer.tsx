import React from "react"
import styled from "styled-components"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Button from "../common/Button"
import { CSS_MEDIA_QUERY } from "../../theme/consts"

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.backgroundPrimary};
  color: ${props => props.theme.textWhite};
  height: calc(120px + 2vmin);
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

  a {
    color: inherit;
    font-weight: 900;
    outline: none;
    transition: 0.4s;

    &:hover,
    &:focus {
      color: ${props => props.theme.textSecondary};
    }
  }
`

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;

  @media ${CSS_MEDIA_QUERY.MIN_MOBILE_L} {
    width: calc(280px + 2vmin);
  }
`

const Footer: React.FC = () => (
  <FooterWrapper id="contact">
    <ContactButtonsWrapper>
      <Button
        iconName={faLinkedinIn}
        href="https://www.linkedin.com/in/zanaflander"
        type="contact"
        ariaLabel="LinkedIn"
      />
      <Button
        iconName={faGithub}
        href="https://github.com/flanzana"
        type="contact"
        ariaLabel="GitHub"
      />
      <Button
        iconName={faTwitter}
        href="https://twitter.com/flanzana"
        type="contact"
        ariaLabel="Twitter"
      />
      <Button
        iconName={faEnvelope}
        href="mailto:zana.flander@gmail.com"
        type="contact"
        ariaLabel="E-mail"
      />
    </ContactButtonsWrapper>
    <StyledDescription>
      Coded and designed with ❤ by <a href="https://flanzana.github.io">Žana Flander</a>. ©
      2018-2020
    </StyledDescription>
  </FooterWrapper>
)

export default Footer
