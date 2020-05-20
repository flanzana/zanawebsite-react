// @flow
import imgmemory from "../data/img/project-memory.png"
import imgarcade from "../data/img/project-arcade.png"
import imgalmeria from "../data/img/project-almeria.png"
import imgtravellist from "../data/img/project-travel-list.png"
import imgzana from "../data/img/project-zana.png"

export type LevelType = 1 | 2 | 3 | 4 | 5

type LanguageSkill = {|
  name: string,
  level: string,
|}

type OtherSkill = {|
  name: string,
  level: LevelType,
|}

export type SkillsType = {|
  language: Array<LanguageSkill>,
  webdev: Array<OtherSkill>,
  design: Array<OtherSkill>,
  engineering: Array<OtherSkill>,
|}

export const SKILLS = {
  language: [
    { name: "Slovenian", level: "Native" },
    { name: "English", level: "C1" },
    { name: "Spanish", level: "B2" },
  ],

  webdev: [
    { name: "CSS", level: 5 },
    { name: "Cypress", level: 4 },
    { name: "Git", level: 3 },
    { name: "HTML", level: 5 },
    { name: "JavaScript", level: 4 },
    { name: "Jest", level: 4 },
    { name: "ReactJS", level: 4 },
    { name: "Redux", level: 2 },
    { name: "TypeScript", level: 2 },
  ],

  design: [
    { name: "Adobe Photoshop", level: 4 },
    { name: "Inkscape", level: 2 },
  ],

  engineering: [
    { name: "ArcGIS", level: 5 },
    { name: "AutoCAD", level: 3 },
    { name: "MATLAB", level: 3 },
    { name: "OCAD", level: 5 },
    { name: "SketchUp", level: 2 },
  ],
}

type Project = {|
  name: string,
  img: string,
  url: string,
|}

export type ProjectsType = Array<Project>

export const PROJECTS = [
  {
    name: "Travel packing list",
    img: imgtravellist,
    url: "https://flanzana.github.io/travel-packing-list",
  },
  {
    name: "Personal website",
    img: imgzana,
    url: "https://flanzana.github.io",
  },
  {
    name: "Almería map",
    img: imgalmeria,
    url: "https://flanzana.github.io/almeria-map",
  },
  {
    name: "Arcade game",
    img: imgarcade,
    url: "https://flanzana.github.io/arcade-game",
  },
  {
    name: "Memory game",
    img: imgmemory,
    url: "https://flanzana.github.io/memory-game-zana",
  },
]
