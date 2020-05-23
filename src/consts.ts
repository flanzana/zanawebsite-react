import { IParticlesParams, OutMode, MoveDirection } from "react-particles-js"

export const NAVBAR_HEIGHT = 70 // px

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
