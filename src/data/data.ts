import imgmemory from "../data/img/project-memory.png"
import imgarcade from "../data/img/project-arcade.png"
import imgalmeria from "../data/img/project-almeria.png"
import imgtravellist from "../data/img/project-travel-list.png"
import imgzana from "../data/img/project-zana.png"

export default {
  skills: [
    {
      type: "languages",
      title: "Languages",
      list: [
        { name: "Slovenian", level: "Native" },
        { name: "English", level: "C1" },
        { name: "Spanish", level: "B2" },
      ],
    },
    {
      type: "webdev",
      title: "Web development",
      list: [
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
    },
    {
      type: "engineering",
      title: "Engineering",
      list: [
        { name: "ArcGIS", level: 5 },
        { name: "AutoCAD", level: 3 },
        { name: "MATLAB", level: 3 },
        { name: "OCAD", level: 5 },
        { name: "SketchUp", level: 2 },
      ],
    },
    {
      type: "design",
      title: "Design",
      list: [
        { name: "Adobe Photoshop", level: 4 },
        { name: "Inkscape", level: 2 },
      ],
    },
  ],
  projects: [
    {
      name: "Travel packing list",
      img: imgtravellist,
      urlDemo: "https://flanzana.github.io/travel-packing-list",
      urlCode: "https://github.com/flanzana/travel-packing-list",
    },
    {
      name: "Personal website",
      img: imgzana,
      urlDemo: "https://flanzana.github.io",
      urlCode: "https://github.com/flanzana/flanzana.github.io",
    },
    {
      name: "Almería map",
      img: imgalmeria,
      urlDemo: "https://flanzana.github.io/almeria-map",
      urlCode: "https://github.com/flanzana/almeria-map",
    },
    {
      name: "Arcade game",
      img: imgarcade,
      urlDemo: "https://flanzana.github.io/arcade-game",
      urlCode: "https://github.com/flanzana/arcade-game",
    },
    {
      name: "Memory game",
      img: imgmemory,
      urlDemo: "https://flanzana.github.io/memory-game-zana",
      urlCode: "https://github.com/flanzana/memory-game-zana",
    },
  ],
}
