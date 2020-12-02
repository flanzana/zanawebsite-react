import imgmemory from "../data/img/project-memory.png"
import imgalmeria from "../data/img/project-almeria.png"
import imgtravellist from "../data/img/project-travel-list.png"
import imgzana from "../data/img/project-zana.png"
import imgworkshop from "../data/img/project-workshop.png"

export default {
  skills: [
    {
      title: "Languages",
      list: [
        { name: "Slovenian", level: "Native" },
        { name: "English", level: "C1" },
        { name: "Spanish", level: "B2" },
      ],
    },
    {
      title: "Web development",
      list: [
        { name: "CSS" },
        { name: "Cypress" },
        { name: "ESLint" },
        { name: "Flow" },
        { name: "Gherkin" },
        { name: "Git" },
        { name: "HTML" },
        { name: "JavaScript" },
        { name: "Jest" },
        { name: "React" },
        { name: "Redux" },
        { name: "styled-components" },
        { name: "Testing Library" },
        { name: "TypeScript" },
      ],
    },
    {
      title: "Design",
      list: [{ name: "Adobe Photoshop" }, { name: "Figma" }, { name: "Inkscape" }],
    },
  ],
  projects: [
    {
      name: "Travel packing list",
      img: imgtravellist,
      urlWeb: "https://flanzana.github.io/travel-packing-list",
      urlCode: "https://github.com/flanzana/travel-packing-list",
      description:
        "An extensive travel packing checklist for your next trip in English, Spanish and Slovenian language.",
      tech: [
        "React",
        "JavaScript",
        "i18next",
        "design system Orbit",
        "Flow",
        "Jest",
        "Testing Library",
      ],
    },
    {
      name: "Portfolio website",
      img: imgzana,
      urlWeb: "https://flanzana.github.io",
      urlCode: "https://github.com/flanzana/flanzana.github.io",
      description: "Portfolio website displaying my skills, interesting projects and contacts.",
      tech: ["React", "TypeScript", "styled-components"],
    },
    {
      name: "Workshop",
      img: imgworkshop,
      urlWeb: "https://codesandbox.io/s/p2rvv0q2yj?file=/src/Portfolio.js",
      urlCode: "https://github.com/flanzana/portfolio-orbit",
      description:
        'Example of portfolio from my workshop "Perks of using a design system in frontend development" at conference "Women in Tech".',
      tech: ["React", "design system Orbit"],
    },
    {
      name: "Almería map",
      img: imgalmeria,
      urlWeb: "https://flanzana.github.io/almeria-map",
      urlCode: "https://github.com/flanzana/almeria-map",
      description:
        "Map of city Almería is displaying the best places from Foursquare API on Google Maps API.",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      name: "Memory game",
      img: imgmemory,
      urlWeb: "https://flanzana.github.io/memory-game-zana",
      urlCode: "https://github.com/flanzana/memory-game-zana",
      description:
        "Classic memory game allows you to test your memory by turning over pairs of matching cards.",
      tech: ["JavaScript", "jQuery", "CSS", "HTML"],
    },
  ],
}
