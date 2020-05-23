import React from "react"
import styled from "styled-components"
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Button from "../common/Button"

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.backgroundPrimary};
  color: ${props => props.theme.textWhite};
  height: calc(120px + 2vmin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  p {
    font-size: 12px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(280px + 2vmin);

  @media (max-width: 500px) {
    width: 250px;
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
    <p>Coded and designed with ❤ by Žana Flander. © 2018-2020</p>
  </FooterWrapper>
)

export default Footer
