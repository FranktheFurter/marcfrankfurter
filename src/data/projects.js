// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "Custom ERP System with Blazor Server",
    category: "Web Application",
    date: "Jul 2022 - Now",
    img: require("@/assets/images/projects/erp-hero.png"),
    projectData: {
      projectImages: [
        {
          id: 1,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/erp-content-1.png"),
        },
        {
          id: 2,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/erp-content-2.png"),
        },
        {
          id: 3,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/erp-content-3.png"),
        },
      ],
      projectInfo: {
        clientHeading: "About Client",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Scheppach GmbH",
          },
          {
            id: 2,
            title: "Services",
            details: "UI Design & Frontend Development",
          },
          {
            id: 3,
            title: "Website",
            details: "https://www.scheppach.com/de",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "The previous ERP system MyFactory was to be gradually replaced by a new ERP system developed in-house based on Blazor Server.",
        technologies: [
          {
            title: "Tools & Technologies",
            techs: ["HTML", "CSS", "JavaScript", "Blazor", "C#", "Figma"],
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: [
          {
            id: 1,
            details:
              "Since both the old system MyFactory and the new system are to be operated in parallel, they must be compatible with each other and data must be stored in the same backend.",
          },
          {
            id: 2,
            details:
              "Users must be able to log in via Active Directory and are assigned various user rights via login",
          },
          {
            id: 3,
            details:
              "With Blazor and the .Net stack a lot is possible, but to manipulate the DOM directly you have to work with Javascript interop.",
          },
          {
            id: 4,
            details:
              "Given the large number of possible operations that an ERP system offers, it is very important to integrate these carefully into a UI so that users do not feel overwhelmed by the sheer abundance and the system can be operated intuitively.",
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Flutter Game of Life",
    category: "Private Project",
    date: "2022",
    img: require("@/assets/images/projects/game-of-life-flutter-1.jpg"),
    projectData: {
      projectImages: [
        {
          id: 1,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/game-of-life-flutter-1.jpg"),
        },
        {
          id: 2,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/game-of-life-flutter-2.jpg"),
        },
        {
          id: 3,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/game-of-life-flutter-3.jpg"),
        },
      ],
      projectInfo: {
        clientHeading: "About",
        companyInfos: [
          {
            id: 1,
            title: "Website",
            details: "https://github.com/FranktheFurter/game_of_life_flutter",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          'TGame of Life is my "Goto-Project" to learn a new programming language or framework',
        technologies: [
          {
            title: "Tools & Technologies",
            techs: ["Flutter", "Dart"],
          },
        ],
        projectDetailsHeading: "About Project",
        projectDetails: [
          {
            id: 1,
            details:
              "I have implemented Game of Life in many languages but I like the Flutter implementation the most. It is very easy to implement and the UI is very responsive. I have also implemented speed slider that allows you to change the speed of the game.",
          },
          {
            id: 2,
            details: "You can try it via the link",
          },
        ],
      },
    },
  },
]

export default projects
