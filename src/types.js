// @flow

export type LevelType = 1 | 2 | 3 | 4 | 5

export type SkillList = {|
  name: string,
  level: string | LevelType,
|}

type SkillType = {|
  type: string,
  title: string,
  list: Array<SkillList>,
|}

export type SkillsType = Array<SkillType>

type Project = {|
  name: string,
  img: string,
  url: string,
|}

export type ProjectsType = Array<Project>
