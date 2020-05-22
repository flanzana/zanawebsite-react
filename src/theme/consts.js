// @flow

// color palette
const PRIMARY_NORMAL = "#4f3b78"
const PRIMARY_LIGHT = "#927fbf"
// const PRIMARY_LIGHTER = '#c4bbf0'
const SECONDARY_NORMAL = "#61c0bf"
const INK_LIGHT = "#505568"
const INK_NORMAL = "#363b4e"
const CLOUD_NORMAL = "#eff2f5"
const CLOUD_DARK = "#e8edf1"
const SHADOW_COLOR_DARK = "rgba(0, 0, 0, 0.3)"
const SHADOW_COLOR_DARKER = "rgba(0, 0, 0, 0.6)"

const commonColors = {
  backgroundPrimary: PRIMARY_NORMAL,
  backgroundPrimaryHover: SECONDARY_NORMAL,
  buttonBackground: CLOUD_NORMAL,
  buttonToggleBackground: PRIMARY_LIGHT,
  buttonBackgroundHover: SECONDARY_NORMAL,
  buttonText: PRIMARY_NORMAL,
  buttonTextHover: CLOUD_NORMAL,
  textSecondary: SECONDARY_NORMAL,
  textWhite: CLOUD_NORMAL,
  navbarBoxShadow: SHADOW_COLOR_DARK,
  buttonBoxShadow: SHADOW_COLOR_DARKER,
  projectBoxShadow: SHADOW_COLOR_DARK,
}

export const themeLightMode = {
  type: "light",
  backgroundNormal: CLOUD_NORMAL,
  backgroundNormalHover: CLOUD_DARK,
  textNormal: INK_NORMAL,
  textPrimary: PRIMARY_NORMAL,
  ...commonColors,
}
export const themeDarkMode = {
  type: "dark",
  backgroundNormal: INK_NORMAL,
  backgroundNormalHover: INK_LIGHT,
  textNormal: CLOUD_DARK,
  textPrimary: PRIMARY_LIGHT,
  ...commonColors,
}