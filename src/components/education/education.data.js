//id,title,logo,program,period,location,panels(label,icon,lines,link)
import logoUcr from "../../assets/img/ucr.png";
import logoSwu from "../../assets/img/swu.jpg";
import logoHilo from "../../assets/img/hilo.jpg";

export const educationData = [
  {
    id: "ucr",
    title: "2020 UCR Extension",
    school: "UCR Extension",
    logo: logoUcr,
    program: "Certificate in Full Stack Web Development (6-month program, avg. grade A+)",
    period: "Oct. 2019 - Apr. 2020",
    location: "Riverside, USA",
    panels: [
      {
        label: "What I learned",
        icon: "learn",
        lines: [
          "HTML, CSS, JavaScript, jQuery, RESTful APIs, AJAX, Node.js, MySQL, MongoDB, Express, Mongoose, React, OOP, MVC, ORM, data structures, algorithms, GitHub, Heroku",
        ],
        link: "https://bootcamp.extension.ucr.edu/coding/curriculum/",
      },
      {
        label: "How I was",
        icon: "person",
        lines: [
          "Average academic grade: A+",
          '"Great job... Using a while loop and setting an exit condition was a really good use of ensuring your requirement for min-max of characters. This was a professional-level solution... This is a best practice that will be appreciated by employers." (Adam Abundis, TA, Nov. 21, 2019)',
          '"Great job on the homework, including going above and beyond. Your work has vastly improved and your code looks very neat and organized. Great quality work overall." (Andy Huynh, TA, Apr. 8, 2020)',
        ],
      },
    ],
  },
  {
    id: "swu",
    title: "2013 Seoul Women's University",
    school: "Seoul Women's University",
    logo: logoSwu,
    program: "Bachelor of Engineering, Contents Design, with a focus on frontend engineering",
    period: "Mar. 2007 - Feb. 2013",
    location: "Seoul, South Korea",
    panels: [
      {
        label: "What I learned",
        icon: "learn",
        lines: [
          "Focused on UI/UX design, HCI (human-computer interaction), frontend, and programming (C++, data structures).",
        ]
      },
      {
        label: "How I was",
        icon: "person",
        lines: [
          "GPA: 4.1 / 4.5",
          "8-time scholarship recipient",
          "Graduated first in the department",
          "Top 5% of the university",
        ],
      },
    ],
  },
  {
    id: "hilo",
    title: "2012 University of Hawaii, Hilo",
    school: "University of Hawaii, Hilo",
    logo: logoHilo,
    program: "Exchange Student in Communication",
    period: "Aug. 2011 - May 2012",
    location: "Hawaii, USA",
    panels: [
      {
        label: "What I learned",
        icon: "learn",
        lines: [
          "Communication in multicultural workplaces, interpersonal communication, and more.",
        ],
      },
    ],
  },
];
