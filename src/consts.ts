import { IParticlesParams, OutMode, MoveDirection } from "react-particles-js"

export const NAVBAR_HEIGHT = 60 // px

export const PARTICLES_PARAMS_DESKTOP: IParticlesParams = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.4,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 0.5,
      direction: MoveDirection.bottom,
      out_mode: OutMode.out,
    },
  },
}

export const PARTICLES_PARAMS_MOBILE: IParticlesParams = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.4,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 0.3,
      direction: MoveDirection.bottom,
      out_mode: OutMode.out,
    },
  },
}

export enum Section {
  AboutMe = "aboutme",
  Skills = "skills",
  Projects = "projects",
}

export enum Tech {
  CSS = "CSS",
  Cypress = "Cypress",
  ESLint = "ESLint",
  Flow = "Flow",
  Gherkin = "Gherkin",
  Git = "Git",
  HTML = "HTML",
  JavaScript = "JavaScript",
  Jest = "Jest",
  React = "React",
  Redux = "Redux",
  styledComponents = "styled-components",
  TestingLibrary = "Testing Library",
  TypeScript = "TypeScript",
  jQuery = "jQuery",
  Orbit = "design system Orbit",
  i18next = "i18next",
}
