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
          'Game of Life is my "Goto-Project" to learn a new programming language or framework',
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
  {
    id: 3,
    title: "Hardcore Writer",
    category: "Private Project",
    date: "2022",
    img: require("@/assets/images/projects/hardcore-writer-1.png"),
    projectData: {
      projectImages: [
        {
          id: 1,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/hardcore-writer-1.png"),
        },
        {
          id: 2,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/hardcore-writer-2.png"),
        },
        {
          id: 3,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/hardcore-writer-3.png"),
        },
      ],
      projectInfo: {
        clientHeading: "About",
        companyInfos: [
          {
            id: 1,
            title: "Website",
            details: "https://frankthefurter.github.io/hardcore_writer/#/",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "Hardcore Writer is inspired by the Most Dangerous Writing App which is a web application for free writing that combats writer's block by deleting all progress if the user stops typing for five seconds.",
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
              "Introducing Hardcore Writer, a unique and thrilling writing app inspired by the Most Dangerous Writing App. As a budding developer, I wanted to take up the challenge of creating my own version of this incredible tool to learn Flutter better. Hardcore Writer is my free version of the app, designed to offer the same exciting writing experience with a personalized touch.",
          },
          {
            id: 2,
            details:
              "With Hardcore Writer, you can unleash your creativity and let your thoughts flow freely without the fear of losing your work. The app allows you to set your writing session with two customizable features - interval time and session length. The interval time is the duration between your last keystroke and when your text gets deleted, while the session length is the overall duration of your writing session. You can choose the values for both these features according to your preference.",
          },
          {
            id: 3,
            details:
              "The app interface is user-friendly, with the timer displayed on the top right corner of the screen. You can keep track of the time remaining for your session and the time left before your text gets deleted. This feature adds an extra layer of excitement to your writing, making every moment count and encouraging you to keep writing.",
          },
          {
            id: 4,
            details:
              "Hardcore Writer is perfect for writers, bloggers, and anyone looking to hone their writing skills while having fun. Whether you're a beginner or a seasoned writer, this app offers a unique writing experience that will keep you engaged and motivated.",
          },
          {
            id: 5,
            details:
              "So, what are you waiting for? Try Hardcore Writer now with the link of the left side and take the first step towards improving your writing skills.",
          },
        ],
      },
    },
  },
  {
    id: 4,
    title: "HoloDraw - Ba-thesis",
    category: "VR",
    date: "2021",
    img: require("@/assets/images/projects/HoloDraw-hero.png"),
    projectData: {
      projectImages: [
        {
          id: 1,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/HoloDraw-content-1.png"),
        },
        {
          id: 2,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/HoloDraw-content-2.png"),
        },
        {
          id: 3,
          title: "Blazor-ERP",
          img: require("@/assets/images/projects/HoloDraw-content-3.png"),
        },
      ],
      projectInfo: {
        clientHeading: "About",
        companyInfos: [
          {
            id: 1,
            title: "Website",
            details: "https://frankthefurter.github.io/hardcore_writer/#/",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "Hardcore Writer is inspired by the Most Dangerous Writing App which is a web application for free writing that combats writer's block by deleting all progress if the user stops typing for five seconds.",
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
              "Introducing Hardcore Writer, a unique and thrilling writing app inspired by the Most Dangerous Writing App. As a budding developer, I wanted to take up the challenge of creating my own version of this incredible tool to learn Flutter better. Hardcore Writer is my free version of the app, designed to offer the same exciting writing experience with a personalized touch.",
          },
          {
            id: 2,
            details:
              "With Hardcore Writer, you can unleash your creativity and let your thoughts flow freely without the fear of losing your work. The app allows you to set your writing session with two customizable features - interval time and session length. The interval time is the duration between your last keystroke and when your text gets deleted, while the session length is the overall duration of your writing session. You can choose the values for both these features according to your preference.",
          },
          {
            id: 3,
            details:
              "The app interface is user-friendly, with the timer displayed on the top right corner of the screen. You can keep track of the time remaining for your session and the time left before your text gets deleted. This feature adds an extra layer of excitement to your writing, making every moment count and encouraging you to keep writing.",
          },
          {
            id: 4,
            details:
              "Hardcore Writer is perfect for writers, bloggers, and anyone looking to hone their writing skills while having fun. Whether you're a beginner or a seasoned writer, this app offers a unique writing experience that will keep you engaged and motivated.",
          },
          {
            id: 5,
            details:
              "So, what are you waiting for? Try Hardcore Writer now with the link of the left side and take the first step towards improving your writing skills.",
          },
        ],
      },
    },
  },
]

export default projects
