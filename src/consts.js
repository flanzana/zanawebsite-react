// @flow

export const PARTICLES_PARAMS_DESKTOP = {
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
      direction: "bottom",
      out_mode: "out",
    },
  },
}

export const PARTICLES_PARAMS_MOBILE = {
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
      direction: "bottom",
      out_mode: "out",
    },
  },
}
