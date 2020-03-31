import projMovieMap from "../../assets/img/proj_moviemap.gif";
import projKitchen from "../../assets/img/proj_kitchen.png";
import projHrTracker from "../../assets/img/proj_hr.gif";
import projBurger from "../../assets/img/proj_burger.gif";
import projTeamProfile from "../../assets/img/proj_teamProfile.gif";
import projProfile from "../../assets/img/proj_profile.gif";
import projWeather from "../../assets/img/proj_weather.gif";
import projNewspaper from "../../assets/img/proj_newspaper.gif";
import projPassword from "../../assets/img/proj_password.gif";
import projPlaner from "../../assets/img/proj_planner.gif";
import projBudget from "../../assets/img/proj_budget.gif";
import projWorkout from "../../assets/img/proj_workout.gif";
import projDirectory from "../../assets/img/proj_directory.gif";

export const projectData = [
  {
    title: "Movie Map",
    linkDeploy: "https://gentle-savannah-70403.herokuapp.com/",
    linkRepo: "https://github.com/fguzmanrs/reimagined-results",
    image: projMovieMap,
    type: "Team",
    role:
      "Role: Backend(RESTful APIs, Authentication - JWT & Cookie, Error Handling), Client-side rendering(except styling, design)",
    description:
      "The app has been created to help film buffs who want targeted movie reccomendatios and the information and resources to watch their finds.",
    tech: [
      "Node.js",
      "MySQL",
      "Sequelize",
      "JWT",
      "Cookie",
      "Javascript",
      "jQuery",
      "Materialize",
      "HTML",
      "CSS",
      "Heroku"
    ]
  },
  {
    title: "Workout Tracker",
    linkDeploy: "https://desolate-brushlands-16007.herokuapp.com/",
    linkRepo: "https://github.com/bluerainmango/workout",
    image: projWorkout,
    type: "Indv",
    role: "",
    description:
      "Build your own exercise plan and keep track of your daily workouts so that it helps to achieve your fitness goal.",
    tech: [
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Express",
      "JavaScript",
      "CSS",
      "Materialize",
      "HTML",
      "Heroku"
    ]
  },
  {
    title: "Employee Directory",
    linkDeploy: "https://simple-employees-directory.herokuapp.com/",
    linkRepo: "https://github.com/bluerainmango/user-directory",
    image: projDirectory,
    type: "Indv",
    role: "",
    description:
      "Simple employee directory page that supports quick filtering and sorting.",
    tech: [
      "React",
      "Redux",
      "Material-UI",
      "JavaScript",
      "CSS",
      "HTML",
      "Heroku"
    ]
  },
  {
    title: "PWA Budget Tracker",
    linkDeploy: "https://pwa-budget-tracker-app.herokuapp.com/",
    linkRepo: "https://github.com/bluerainmango/budget-tracker",
    image: projBudget,
    type: "Indv",
    role: "",
    description: "Simple budget tracker that works online and offline.",
    tech: [
      "Progressive Web App(PWA)",
      "IndexedDB",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Express",
      "JavaScript",
      "HTML",
      "Heroku"
    ]
  },
  {
    title: "Eclectic Kitchen",
    linkDeploy: "https://fguzmanrs.github.io/eclecticKitchen/",
    linkRepo: "https://github.com/fguzmanrs/eclecticKitchen",
    image: projKitchen,
    type: "Team",
    role:
      "Role: AJAX, Client-side rendering(except styling, design), App functionality(Favorite, Validation, Modal etc), Core app concept",
    description:
      "The eclecticKitchen App is for the aspiring cook that needs some help combining ingredients. It suggests dishes you can make with the ingredients you have, also it will show any ingrediens you may still be missing.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Materialize",
      "AJAX",
      "API-Spoonacular"
    ]
  },
  {
    title: "HR Tracker",
    linkDeploy: "",
    linkRepo: "https://github.com/bluerainmango/HRtracker",
    image: projHrTracker,
    type: "Indv",
    role: "",
    description:
      "CMS(Content Management System) for Human Resource. Manage the departments, roles and employees in companies to keep track of current business situation.",
    tech: ["MySQL", "Node.js", "Express"]
  },
  {
    title: "Yummy Burger",
    linkDeploy: "https://shielded-ridge-77965.herokuapp.com/",
    linkRepo: "https://github.com/bluerainmango/burger",
    image: projBurger,
    type: "Indv",
    role: "",
    description:
      "A fun burger logger with MySQL, Node.js, Express, Handlebars and ORM!",
    tech: [
      "MySQL",
      "Node.js",
      "Express",
      "Handlebars",
      "ORM",
      "JavaScript",
      "CSS",
      "HTML",
      "Heroku"
    ]
  },
  {
    title: "Team Profile Generator",
    linkDeploy: "",
    linkRepo: "https://github.com/bluerainmango/teamProfileGenerator",
    image: projTeamProfile,
    type: "Indv",
    role: "",
    description:
      "Quick and easy Node CLI generating a software engineering team profile. As a team member or manager, you can simply create a team profile including all members basic info, so that you can easily access to their emails and GitHub profiles.",
    tech: ["Node.js", "Express", "Jest", "OOP"]
  },
  {
    title: "Github Profile Generator",
    linkDeploy: "",
    linkRepo: "https://github.com/bluerainmango/profileGenerator",
    image: projProfile,
    type: "Indv",
    role: "",
    description:
      "A command-line app that generates a Github profile in PDF format from a username. Quickly generate a profile by providing a Github username and save it as a document so that you can easily prepare for meetings, reports, stakeholders etc.",
    tech: ["Node.js", "Express"]
  },
  {
    title: "Weather Dashboard",
    linkDeploy: "https://bluerainmango.github.io/weatherSearch/",
    linkRepo: "https://github.com/bluerainmango/weatherSearch",
    image: projWeather,
    type: "Indv",
    role: "",
    description:
      "Check the current weather and up-to 5 day forcast of multiple cities so that you can get prepared in advance for any personal or business outdoor occasion.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "AJAX",
      "API-Open Weather"
    ]
  },
  {
    title: "New York Times Search",
    linkDeploy: "https://bluerainmango.github.io/newYorkTimes/",
    linkRepo: "https://github.com/bluerainmango/newYorkTimes",
    image: projNewspaper,
    type: "Indv",
    role: "",
    description: "Quick & Easy to search New York Times articles.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "AJAX",
      "API-New York Times"
    ]
  },
  {
    title: "Password Generator",
    linkDeploy: "https://bluerainmango.github.io/passwordGenerator/",
    linkRepo: "https://github.com/bluerainmango/passwordGenerator",
    image: projPassword,
    type: "Indv",
    role: "",
    description: "Generate a strong password that meets your own criteria.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Daily Planner",
    linkDeploy: "https://bluerainmango.github.io/dailyPlanner/",
    linkRepo: "https://github.com/bluerainmango/dailyPlanner",
    image: projPlaner,
    type: "Indv",
    role: "",
    description:
      "Manage your work quick & easy! Individuals can save a to-do list so that they can effectively achieve their hourly & daily goals.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "API-Moment"]
  }
];
