import { THEME_DARK_MODE, THEME_LIGHT_MODE } from "./theme/consts"

export type ThemeType = typeof THEME_DARK_MODE | typeof THEME_LIGHT_MODE

export type SkillList = {
  name: string
  level?: string
}

export type SkillType = {
  title: string
  list: SkillList[]
}

export type SkillsType = SkillType[]

export type ProjectType = {
  name: string
  img: string
  urlWeb: string
  urlCode: string
  description: string
  tech: string[]
}

export type ProjectsType = ProjectType[]
