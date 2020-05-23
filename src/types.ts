import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme/consts"

export type ThemeType = typeof THEME_DARK_MODE | typeof THEME_LIGHT_MODE

export type SkillList = {
  name: string
  level: string | number
}

export type SkillType = {
  type: string
  title: string
  list: SkillList[]
}

export type SkillsType = SkillType[]

export type ProjectType = {
  name: string
  img: string
  url: string
}

export type ProjectsType = ProjectType[]
