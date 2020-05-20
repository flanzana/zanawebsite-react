// @flow
import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: ${props => props.theme.textPrimary};
  text-transform: uppercase;
  font-size: 2em;
  margin-top: 0;
  line-height: 1.75em;
  border-bottom: 1px solid ${props => props.theme.textNormal};
  width: 280px;
`

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 65px 0 50px 0;
`

type Props = {
  id: string,
  title: string,
  children: React$Node,
}

const SectionLayout = ({ id, title, children }: Props) => (
  <StyledSection id={id}>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </StyledSection>
)

export default SectionLayout
