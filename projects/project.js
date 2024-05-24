const Projects = [
  {
    name: "Clone of Amazon.in",
    about: "Clone of amazon web page",
    img: "./amazon.png",
    gitrepo: "https://github.com/",
    // blog: "https://medium.com/@vdbhavani.648/agoda-clone-eb28c930815e",
    tech_stack: "HTML | CSS ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      // `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      // `<img src="https://img.icons8.com/color/50/000000/react-native.png"/>`,
      // `<img src="https://img.icons8.com/color/48/000000/redux.png"/>`,
      // `<img src="https://img.icons8.com/windows/48/000000/node-js.png"/>`,
      // `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
      // `<img src="https://img.icons8.com/color/48/000000/express.png"/>`,
    ],
    project_link: "https://kunal-gopewar-github.github.io/amazon-clone-demo/",
    project_type: "Individual Project",
  },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ""}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ""}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ""}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ""}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ""}
      </span>
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
