// Variables
const images = {
  traversyMedia:
    "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s88-c-k-c0x00ffffff-no-rj",
  codeWithHarry:
    "https://yt3.googleusercontent.com/ytc/AMLnZu8dZQJYCt6Ffcd-pl113huuo_HJ3PpvgkyFk5FkrQ=s176-c-k-c0x00ffffff-no-rj",
  developerJunaid:
    "https://yt3.googleusercontent.com/AuIhZ_-vPJuu6_mXHHrbyleWdJL-MsmIobvUe4-NWbI9ja7E5MB_QOkn3qZkqjw5y8QS_V3h=s176-c-k-c0x00ffffff-no-rj",
  dailyTuition:
    "https://yt3.ggpht.com/hkRZlmV18W3wm8DlqOZaQHe-g-h8ugcsIdeSk6ZpCOyhOXf1ReGTseiNi8ek92Waosv4r32G=s88-c-k-c0x00ffffff-no-rj",
  webCifar:
    "https://yt3.ggpht.com/ytc/AMLnZu9q7iNviaubWliGMv7rUTawzMqM11wE2KtjRlxJ=s88-c-k-c0x00ffffff-no-rj",
  easyTutorials:
    "https://yt3.ggpht.com/ytc/AMLnZu_l77sxmS1ZFUf2vZw_cYu3Sj02DEw_LeSejIT6kg=s88-c-k-c0x00ffffff-no-rj",
  code4Education:
    "https://yt3.ggpht.com/ytc/AMLnZu-pumJatjMbrTK2SeHk5HUnMC6fowrihjke0jPL=s88-c-k-c0x00ffffff-no-rj",
  devEd:
    "https://yt3.ggpht.com/JfcqVinxsIc8dYsPIrp6IBDRMBb420BqVd2bzS9wqcMWBTzmnjUJ74Q0VByY1gUA8p-AYZQzxQ=s88-c-k-c0x00ffffff-no-rj",
  anujBhaiya:
    "https://yt3.ggpht.com/ytc/AMLnZu8pzDZIxsUyu_z7kL3Y8KoNBeH8a5pwUJv_dQZD=s88-c-k-c0x00ffffff-no-rj",
  freeCodeCamp:
    "https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj",
  bedimcode:
    "https://yt3.ggpht.com/WB8m66eXH9BSgahLoh48FgSefJe66JlnIbT8Jv3R6B7O6guwCN_Dy4snBP-XsDwu4A3JCuZJsg=s88-c-k-c0x00ffffff-no-rj",
  tech2etc:
    "https://yt3.ggpht.com/biGpxniyoG6DRZL_UEBNtwGKllsJdv5t42l3X1fbFUMbUBoZ6StWwBWSOC6FoRvvClKel4zO-A=s88-c-k-c0x00ffffff-no-rj",
  egator:
    "https://yt3.ggpht.com/nwyG0ql8sxARogaFb3sgpjoNd86v7hL9W2eeEysP2LryigBtYtX-J2Mw9H1lpcB9D4sw0aCx9w=s88-c-k-c0x00ffffff-no-rj",
  jsm: "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0x00ffffff-no-rj",
  techEd:
    "https://yt3.ggpht.com/75ebx3H4iXTXlf9K-cEzzxXlfzs9psOqnheFRJcGsRR9AvJSHlmeQ6ZXh_0nMwqZquy35gjWXw=s88-c-k-c0x00ffffff-no-rj",
  netNinja:
    "https://yt3.ggpht.com/ytc/AMLnZu_vx2QaoABpOD1MFk3nvLibUr8EDUv_Z_xyvOAk6A=s88-c-k-c0x00ffffff-no-rj",
  thapaTechnical:
    "https://yt3.ggpht.com/ytc/AL5GRJVyAJpYsYcRKdIU9Y-OFnIoCPyR6U4H7xe5JpGL8Q=s48-c-k-c0x00ffffff-no-rj",
  lamaDev:
    "https://yt3.ggpht.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s48-c-k-c0x00ffffff-no-rj",
  edRoh:
    "https://yt3.ggpht.com/ytc/AL5GRJXI4vEE841AsaWRweFM43m0PPMbaSx7DGqyowX9=s48-c-k-c0x00ffffff-no-rj",
}

const channels = {
  traversyMedia: "Traversy Media",
  codeWithHarry: "CodeWithHarry",
  developerJunaid: "Developer Junaid",
  dailyTuition: "Daily Tuition",
  webCifar: "WEB CIFAR",
  easyTutorials: "Easy Tutorials",
  code4Education: "CODE4EDUCATION",
  devEd: "developedbyed",
  anujBhaiya: "Anuj Bhaiya",
  freeCodeCamp: "freeCodeCamp.org",
  bedimcode: "Bedimcode",
  tech2etc: "Tech2 etc",
  egator: "EGATOR",
  jsm: "JavaScript Mastery",
  techEd: "TECH_ED",
  netNinja: "The Net Ninja",
  thapaTechnical: "Thapa Technical",
  lamaDev: "Lama Dev",
  edRoh: "EdRoh",
}

export const collections = [
  {
    name: "Front-end Development",
    href: "/course/frontend",
    imageSrc:
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt: "Frontend Development",
    description: "HTML, CSS, JS, React.js, Bootstrap and more",
  },
  // {
  //   name: "Back-end Development",
  //   href: "/course/backend",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  //   imageAlt: "Back End",
  //   description: "JS, Firebase, Node.js, Express.js, MongoDB and more",
  // },
  {
    name: "Full-stack Development",
    href: "/course/fullstack",
    imageSrc:
      "https://images.unsplash.com/photo-1542837336-d14bdf342f9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGUlMjBkZXZlbG9wbWVudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Fullstack",
    description: "HTML, CSS, JS, React.js, Firebase and more",
  },
]

export const frontendLinks = [
  {
    number: "01",
    name: "Full Stack Development & How to become one? | 2023 | Complete Guide with Resources | Urdu/Hindi 🔥",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/mAlmC3rYgxQ",
  },
  {
    number: "02",
    name: "HTML Tutorial For Beginners In Hindi (With Notes) 🔥",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/BsDoLVMnmZs",
  },
  {
    number: "03",
    name: "CSS Tutorial In Hindi (With Notes) 🔥",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/Edsxf_NBFrw",
  },
  {
    number: "04",
    name: "Project 1: Creating a Gym Website Using HTML5 & CSS3 | Web Development Tutorials #26",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/Sj5NX_br5WY",
  },
  {
    number: "05",
    name: "Creating Fully Responsive Website Project Using HTML & CSS in Hindi | Web Development Tutorials #39",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/8KVrdL0VcAk",
  },

  {
    number: "06",
    name: "One Page Full Website Project For Practice | HTML & CSS Responsive Website",
    channel: channels.webCifar,
    imageUrl: images.webCifar,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/ZFQkb26UD1Y",
  },
  {
    number: "07",
    name: "How To Make Website Using HTML & CSS | Full Responsive Multi Page Website Design Step by Step",
    channel: channels.easyTutorials,
    imageUrl: images.easyTutorials,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/oYRda7UtuhA",
  },
  {
    number: "08",
    name: "How To Make Ecommerce Website Using HTML And CSS Step By Step | Create e-Commerce Website",
    channel: channels.easyTutorials,
    imageUrl: images.easyTutorials,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/yQimoqo0-7g",
  },
  {
    number: "09",
    name: "How To Make Website Using HTML CSS | Crete Full Website Step by Step Tutorial",
    channel: channels.easyTutorials,
    imageUrl: images.easyTutorials,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/lBfshkPlMW8",
  },
  {
    number: "10",
    name: "Build a Responsive Grid CSS Website Layout From Scratch",
    channel: channels.traversyMedia,
    imageUrl: images.traversyMedia,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/moBhzSC455o",
  },
  {
    number: "11",
    name: "How to Make Complete Responsive Website Using Bootstrap/HTML/CSS",
    channel: channels.dailyTuition,
    imageUrl: images.dailyTuition,
    skills: "HTML, CSS, Bootstrap",
    stage: "English",
    href: "https://youtu.be/zhllkjYYUVE",
  },
  {
    number: "12",
    name: "Responsive Food And Restaurant Website Using Bootstrap 5 | Bootstrap 5 Responsive Website Design",
    channel: channels.code4Education,
    imageUrl: images.code4Education,
    skills: "HTML, CSS, Bootstrap",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/6zKLvZSYXmE",
  },
  {
    number: "13",
    name: "Complete Portfolio Website with Bootstrap - HTML/CSS",
    channel: channels.dailyTuition,
    imageUrl: images.dailyTuition,
    skills: "HTML, CSS, Bootstrap",
    stage: "English",
    href: "https://youtu.be/dgKSqz3it50",
  },
  {
    number: "14",
    name: "Tailwind Crash Course | Project From Scratch",
    channel: channels.traversyMedia,
    imageUrl: images.traversyMedia,
    skills: "HTML, Tailwind CSS",
    stage: "English",
    href: "https://youtu.be/dFgzHOX84xQ",
  },
  {
    number: "15",
    name: "Learn Sass In 20 Minutes | Sass Crash Course",
    channel: channels.devEd,
    imageUrl: images.devEd,
    skills: "HTML, CSS, SASS, SCSS",
    stage: "English",
    href: "https://youtu.be/Zz6eOVaaelI",
  },
  {
    number: "16",
    name: "Learn complete Git and Github in 1 video | Open-source Contribution | Linux commands & tricks",
    channel: channels.anujBhaiya,
    imageUrl: images.anujBhaiya,
    skills: "Git, GitHub, Version Control",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/uaeKhfhYE0U",
  },
  {
    number: "17",
    name: "Git & GitHub Tutorial For Beginners In Hindi - हिंदी में",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "Git, GitHub, Version Control",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/gwWKnnCMQ5c",
  },
  {
    number: "18",
    name: "How to Upload Website Code to GitHub using GitHub Desktop | Urdu/Hindi | 2022 👨‍💻",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "Git, GitHub, Version Control, GitHub Desktop",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/EBij5pDnrBQ",
  },
  {
    number: "19",
    name: "👨‍💻 Deploy Website to Netlify for Free in 4 Minutes Only | Custom URL | Urdu/Hindi | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "Netlify, Deployment",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/Pr_KsvrB8l8",
  },
  {
    number: "20",
    name: "How to Auto Deploy a Website on #Netlify with #GitHub using GitHub Desktop | Urdu/Hindi | 2022 - 23",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "GitHub, Netlify, CI/CE, Deployment",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/18y2eOaELbQ",
  },

  {
    number: "21",
    name: "Project 1: Build and Deploy a Portfolio Webpage using HTML & CSS | Urdu/Hindi | For Beginners | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML, CSS, Layout",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/IqSAdqMqJK4",
  },
  {
    number: "22",
    name: "Project 1 Part #2 Responsive Portfolio Webpage using HTML & CSS | Urdu/Hindi | For Beginners | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML, CSS, Responsiveness",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/5dg4nxWRxSU",
  },
  {
    number: "23",
    name: "Project 02 Foodpanda Clone using HTML & CSS | For Beginners | Urdu/Hindi | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML, CSS, Layout, Responsiveness",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/i5YXTOdTizY",
  },
  {
    number: "24",
    name: "JavaScript Tutorial In Hindi",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS, JavaScript",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/hKB-YGF14SY",
  },
  {
    number: "25",
    name: "JavaScript Programming - Full Course",
    channel: channels.freeCodeCamp,
    imageUrl: images.freeCodeCamp,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/jS4aFq5-91M",
  },
  {
    number: "26",
    name: "Build 5 Projects With HTML, CSS & JavaScript",
    channel: channels.traversyMedia,
    imageUrl: images.traversyMedia,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/JkeyKeK3V24",
  },
  {
    number: "27",
    name: "Personal Portfolio website using pure HTML, CSS and JavaScript",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS, JavaScript",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/eRTeF4MPnCg",
  },
  {
    number: "28",
    name: "Beginner Vanilla Javascript Project Tutorial",
    channel: channels.devEd,
    imageUrl: images.devEd,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/Ttf3CEsEwMQ",
  },
  {
    number: "29",
    name: "Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode",
    channel: channels.bedimcode,
    imageUrl: images.bedimcode,
    skills: "HTML, CSS, JavaScript",
    stage: "Only Music",
    href: "https://youtu.be/27JtRAI3QO8",
  },
  {
    number: "30",
    name: "Build and Deploy Ecommerce Website With HTML CSS JavaScript | Full Responsive Ecommerce Course FREE",
    channel: channels.tech2etc,
    imageUrl: images.tech2etc,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/P8YuWEkTeuE",
  },
  {
    number: "31",
    name: "Responsive Social Media Website With Theme Customization Using HTML CSS & JavaScript",
    channel: channels.egator,
    imageUrl: images.egator,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/AiFfDjmd0jUubelink",
  },
  {
    number: "32",
    name: "Creating a Weather App Using HTML, CSS and JavaScript 🔥",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS, JavaScript, API Integration",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/pFvWwFua6mw",
  },
  {
    number: "33",
    name: "Create A Food Recipe App Using Vanilla JavaScript For Beginners",
    channel: channels.webCifar,
    imageUrl: images.webCifar,
    skills: "HTML, CSS, JavaScript, API Integration",
    stage: "English",
    href: "https://youtu.be/x8EY0BlhPGk",
  },
  {
    number: "34",
    name: "Turn an API into a Startup?! Build & Sell an API with JavaScript",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript, API Integration",
    stage: "English",
    href: "https://youtu.be/be9sHQ7xqo0",
  },
  {
    number: "35",
    name: "JavaScript Fetch API - Simple Project for Beginners (In 9 Minutes)",
    channel: channels.techEd,
    imageUrl: images.techEd,
    skills: "JavaScript, API Integration",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/G7pUhxCc6SU",
  },
  {
    number: "36",
    name: "Full Modern React Tutorial (Playlist)",
    channel: channels.netNinja,
    imageUrl: images.netNinja,
    skills: "React.js | React.js Course",
    stage: "English",
    href: "https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
  },
  {
    number: "37",
    name: "React JS Full Course 2022 | Build an App and Master React in 1 Hour",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/b9eMGE7QtTk",
  },
  {
    number: "38",
    name: "React JavaScript Framework for Beginners – Project-Based Course",
    channel: channels.freeCodeCamp,
    imageUrl: images.freeCodeCamp,
    skills: "React.js | Projects",
    stage: "English",
    href: "https://youtu.be/u6gSSpfsoOQ",
  },
  {
    number: "39",
    name: "Learn Material UI in One Hour - React Material UI Project Tutorial [2022]",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "Material-UI, React.js",
    stage: "English",
    href: "https://youtu.be/Xoz31I1FuiY",
  },

  {
    number: "40",
    name: "Must Have Visual Studio Code Extensions",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "VS Code",
    stage: "English",
    href: "https://youtu.be/f71iwQXIOk0",
  },
  {
    number: "41",
    name: "Top 10 JavaScript Array Methods",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript",
    stage: "English",
    href: "https://youtu.be/NH_lCxa1hv8",
  },
  {
    number: "42",
    name: "JavaScript Map and Set Explained",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript",
    stage: "English",
    href: "https://youtu.be/hLgUTM3FOII",
  },
  {
    number: "43",
    name: "JavaScript Best Practices and Coding Conventions - Write Clean Code",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript",
    stage: "English",
    href: "https://youtu.be/RMN_bkZ1KM0",
  },
  {
    number: "44",
    name: "React Hooks - Most Used Features",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/-9M9CGSd69I",
  },
  {
    number: "45",
    name: "Build a COVID-19 Tracker Application - React JS Project (Hooks, Material UI, Charts js)",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js, Material-UI, Chart.js",
    stage: "English",
    href: "https://youtu.be/khJlrj3Y6Ls",
  },
  {
    number: "46",
    name: "Build and Deploy a YouTube Clone Application Using React",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/VPVzx1ZOVuw",
  },
  {
    number: "47",
    name: "🔴 Complete React JS Tutorial in Hindi with 5 Projects in 2022",
    channel: channels.thapaTechnical,
    imageUrl: images.thapaTechnical,
    skills: "React.js",
    stage: "Urdu/Hindi",
    href: "https://youtu.be/EHTWMpD6S_0",
  },
  {
    number: "48",
    name: "React Portfolio Website Tutorial | Responsive React Project Full Course for Beginners",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js",
    stage: "English",
    href: "#https://youtu.be/7WwtzsSHdpI",
  },
  {
    number: "49",
    name: "React Social Media App Design Tutorial | React.js UI Course Full",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/zM93yZ_8SvE",
  },
  {
    number: "50",
    name: "React Millionaire Quiz App Tutorial for Beginners",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/EPh_VbMxu4E",
  },
  {
    number: "51",
    name: "React Admin Dashboard Tutorial | React Admin Panel Design Course for Beginners",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js, React-Admin",
    stage: "English",
    href: "https://youtu.be/aTPkos3LKi8",
  },
  {
    number: "51",
    name: "Build and Deploy a Fully Responsive Modern UI/UX Website in React JS",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/LMagNcngvcU",
  },
  {
    number: "52",
    name: "Build and Deploy a Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/4oV65GVVits",
  },
  {
    number: "53",
    name: "Build and Deploy a Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
    channel: channels.edRoh,
    imageUrl: images.edRoh,
    skills: "React.js, Material-UI, Data-Grid",
    stage: "English",
    href: "https://youtu.be/wYpCWwD1oz0",
  },
  {
    number: "54",
    name: "Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "Coming soon ...",
    stage: "Coming soon ...",
    href: "#_",
  },
]

export const backendLinks = [
  {
    number: "01",
    name: "HTML Tutorial For Beginners In Hindi (With Notes) 🔥",
    channel: "CodeWithHarry",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AMLnZu8dZQJYCt6Ffcd-pl113huuo_HJ3PpvgkyFk5FkrQ=s176-c-k-c0x00ffffff-no-rj",
    skills: "HTML",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/BsDoLVMnmZs",
  },
]

export const fullstackLinks = [
  {
    number: "01",
    name: "Full Stack Development & How to become one? | 2023 | Complete Guide with Resources | Urdu/Hindi 🔥",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/mAlmC3rYgxQ",
  },
  {
    number: "02",
    name: "HTML Tutorial For Beginners In Hindi (With Notes) 🔥",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/BsDoLVMnmZs",
  },
  {
    number: "03",
    name: "CSS Tutorial In Hindi (With Notes) 🔥",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/Edsxf_NBFrw",
  },
  {
    number: "04",
    name: "Project 1: Creating a Gym Website Using HTML5 & CSS3 | Web Development Tutorials #26",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/Sj5NX_br5WY",
  },
  {
    number: "05",
    name: "Creating Fully Responsive Website Project Using HTML & CSS in Hindi | Web Development Tutorials #39",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/8KVrdL0VcAk",
  },

  {
    number: "06",
    name: "One Page Full Website Project For Practice | HTML & CSS Responsive Website",
    channel: channels.webCifar,
    imageUrl: images.webCifar,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/ZFQkb26UD1Y",
  },
  {
    number: "07",
    name: "How To Make Website Using HTML & CSS | Full Responsive Multi Page Website Design Step by Step",
    channel: channels.easyTutorials,
    imageUrl: images.easyTutorials,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/oYRda7UtuhA",
  },
  {
    number: "08",
    name: "How To Make Ecommerce Website Using HTML And CSS Step By Step | Create e-Commerce Website",
    channel: channels.easyTutorials,
    imageUrl: images.easyTutorials,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/yQimoqo0-7g",
  },
  {
    number: "09",
    name: "How To Make Website Using HTML CSS | Crete Full Website Step by Step Tutorial",
    channel: channels.easyTutorials,
    imageUrl: images.easyTutorials,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/lBfshkPlMW8",
  },
  {
    number: "10",
    name: "Build a Responsive Grid CSS Website Layout From Scratch",
    channel: channels.traversyMedia,
    imageUrl: images.traversyMedia,
    skills: "HTML, CSS",
    stage: "English",
    href: "https://youtu.be/moBhzSC455o",
  },
  {
    number: "11",
    name: "How to Make Complete Responsive Website Using Bootstrap/HTML/CSS",
    channel: channels.dailyTuition,
    imageUrl: images.dailyTuition,
    skills: "HTML, CSS, Bootstrap",
    stage: "English",
    href: "https://youtu.be/zhllkjYYUVE",
  },
  {
    number: "12",
    name: "Responsive Food And Restaurant Website Using Bootstrap 5 | Bootstrap 5 Responsive Website Design",
    channel: channels.code4Education,
    imageUrl: images.code4Education,
    skills: "HTML, CSS, Bootstrap",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/6zKLvZSYXmE",
  },
  {
    number: "13",
    name: "Complete Portfolio Website with Bootstrap - HTML/CSS",
    channel: channels.dailyTuition,
    imageUrl: images.dailyTuition,
    skills: "HTML, CSS, Bootstrap",
    stage: "English",
    href: "https://youtu.be/dgKSqz3it50",
  },
  {
    number: "14",
    name: "Tailwind Crash Course | Project From Scratch",
    channel: channels.traversyMedia,
    imageUrl: images.traversyMedia,
    skills: "HTML, Tailwind CSS",
    stage: "English",
    href: "https://youtu.be/dFgzHOX84xQ",
  },
  {
    number: "15",
    name: "Learn Sass In 20 Minutes | Sass Crash Course",
    channel: channels.devEd,
    imageUrl: images.devEd,
    skills: "HTML, CSS, SASS, SCSS",
    stage: "English",
    href: "https://youtu.be/Zz6eOVaaelI",
  },
  {
    number: "16",
    name: "Learn complete Git and Github in 1 video | Open-source Contribution | Linux commands & tricks",
    channel: channels.anujBhaiya,
    imageUrl: images.anujBhaiya,
    skills: "Git, GitHub, Version Control",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/uaeKhfhYE0U",
  },
  {
    number: "17",
    name: "Git & GitHub Tutorial For Beginners In Hindi - हिंदी में",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "Git, GitHub, Version Control",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/gwWKnnCMQ5c",
  },
  {
    number: "18",
    name: "How to Upload Website Code to GitHub using GitHub Desktop | Urdu/Hindi | 2022 👨‍💻",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "Git, GitHub, Version Control, GitHub Desktop",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/EBij5pDnrBQ",
  },
  {
    number: "19",
    name: "👨‍💻 Deploy Website to Netlify for Free in 4 Minutes Only | Custom URL | Urdu/Hindi | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "Netlify, Deployment",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/Pr_KsvrB8l8",
  },
  {
    number: "20",
    name: "How to Auto Deploy a Website on #Netlify with #GitHub using GitHub Desktop | Urdu/Hindi | 2022 - 23",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "GitHub, Netlify, CI/CE, Deployment",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/18y2eOaELbQ",
  },

  {
    number: "21",
    name: "Project 1: Build and Deploy a Portfolio Webpage using HTML & CSS | Urdu/Hindi | For Beginners | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML, CSS, Layout",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/IqSAdqMqJK4",
  },
  {
    number: "22",
    name: "Project 1 Part #2 Responsive Portfolio Webpage using HTML & CSS | Urdu/Hindi | For Beginners | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML, CSS, Responsiveness",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/5dg4nxWRxSU",
  },
  {
    number: "23",
    name: "Project 02 Foodpanda Clone using HTML & CSS | For Beginners | Urdu/Hindi | 2022",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "HTML, CSS, Layout, Responsiveness",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/i5YXTOdTizY",
  },
  {
    number: "24",
    name: "JavaScript Tutorial In Hindi",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS, JavaScript",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/hKB-YGF14SY",
  },
  {
    number: "25",
    name: "JavaScript Programming - Full Course",
    channel: channels.freeCodeCamp,
    imageUrl: images.freeCodeCamp,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/jS4aFq5-91M",
  },
  {
    number: "26",
    name: "Build 5 Projects With HTML, CSS & JavaScript",
    channel: channels.traversyMedia,
    imageUrl: images.traversyMedia,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/JkeyKeK3V24",
  },
  {
    number: "27",
    name: "Personal Portfolio website using pure HTML, CSS and JavaScript",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS, JavaScript",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/eRTeF4MPnCg",
  },
  {
    number: "28",
    name: "Beginner Vanilla Javascript Project Tutorial",
    channel: channels.devEd,
    imageUrl: images.devEd,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/Ttf3CEsEwMQ",
  },
  {
    number: "29",
    name: "Responsive Personal Portfolio Website Using HTML CSS And JavaScript | Dark/Light Mode",
    channel: channels.bedimcode,
    imageUrl: images.bedimcode,
    skills: "HTML, CSS, JavaScript",
    stage: "Only Music",
    href: "https://youtu.be/27JtRAI3QO8",
  },
  {
    number: "30",
    name: "Build and Deploy Ecommerce Website With HTML CSS JavaScript | Full Responsive Ecommerce Course FREE",
    channel: channels.tech2etc,
    imageUrl: images.tech2etc,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/P8YuWEkTeuE",
  },
  {
    number: "31",
    name: "Responsive Social Media Website With Theme Customization Using HTML CSS & JavaScript",
    channel: channels.egator,
    imageUrl: images.egator,
    skills: "HTML, CSS, JavaScript",
    stage: "English",
    href: "https://youtu.be/AiFfDjmd0jUubelink",
  },
  {
    number: "32",
    name: "Creating a Weather App Using HTML, CSS and JavaScript 🔥",
    channel: channels.codeWithHarry,
    imageUrl: images.codeWithHarry,
    skills: "HTML, CSS, JavaScript, API Integration",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/pFvWwFua6mw",
  },
  {
    number: "33",
    name: "Create A Food Recipe App Using Vanilla JavaScript For Beginners",
    channel: channels.webCifar,
    imageUrl: images.webCifar,
    skills: "HTML, CSS, JavaScript, API Integration",
    stage: "English",
    href: "https://youtu.be/x8EY0BlhPGk",
  },
  {
    number: "34",
    name: "Turn an API into a Startup?! Build & Sell an API with JavaScript",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript, API Integration",
    stage: "English",
    href: "https://youtu.be/be9sHQ7xqo0",
  },
  {
    number: "35",
    name: "JavaScript Fetch API - Simple Project for Beginners (In 9 Minutes)",
    channel: channels.techEd,
    imageUrl: images.techEd,
    skills: "JavaScript, API Integration",
    stage: "Urdu | Hindi",
    href: "https://youtu.be/G7pUhxCc6SU",
  },
  {
    number: "36",
    name: "Full Modern React Tutorial (Playlist)",
    channel: channels.netNinja,
    imageUrl: images.netNinja,
    skills: "React.js | React.js Course",
    stage: "English",
    href: "https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
  },
  {
    number: "37",
    name: "React JS Full Course 2022 | Build an App and Master React in 1 Hour",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/b9eMGE7QtTk",
  },
  {
    number: "38",
    name: "React JavaScript Framework for Beginners – Project-Based Course",
    channel: channels.freeCodeCamp,
    imageUrl: images.freeCodeCamp,
    skills: "React.js | Projects",
    stage: "English",
    href: "https://youtu.be/u6gSSpfsoOQ",
  },
  {
    number: "39",
    name: "Learn Material UI in One Hour - React Material UI Project Tutorial [2022]",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "Material-UI, React.js",
    stage: "English",
    href: "https://youtu.be/Xoz31I1FuiY",
  },

  {
    number: "40",
    name: "Must Have Visual Studio Code Extensions",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "VS Code",
    stage: "English",
    href: "https://youtu.be/f71iwQXIOk0",
  },
  {
    number: "41",
    name: "Top 10 JavaScript Array Methods",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript",
    stage: "English",
    href: "https://youtu.be/NH_lCxa1hv8",
  },
  {
    number: "42",
    name: "JavaScript Map and Set Explained",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript",
    stage: "English",
    href: "https://youtu.be/hLgUTM3FOII",
  },
  {
    number: "43",
    name: "JavaScript Best Practices and Coding Conventions - Write Clean Code",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "JavaScript",
    stage: "English",
    href: "https://youtu.be/RMN_bkZ1KM0",
  },
  {
    number: "44",
    name: "React Hooks - Most Used Features",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/-9M9CGSd69I",
  },
  {
    number: "45",
    name: "Build a COVID-19 Tracker Application - React JS Project (Hooks, Material UI, Charts js)",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js, Material-UI, Chart.js",
    stage: "English",
    href: "https://youtu.be/khJlrj3Y6Ls",
  },
  {
    number: "46",
    name: "Build and Deploy a YouTube Clone Application Using React",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/VPVzx1ZOVuw",
  },
  {
    number: "47",
    name: "🔴 Complete React JS Tutorial in Hindi with 5 Projects in 2022",
    channel: channels.thapaTechnical,
    imageUrl: images.thapaTechnical,
    skills: "React.js",
    stage: "Urdu/Hindi",
    href: "https://youtu.be/EHTWMpD6S_0",
  },
  {
    number: "48",
    name: "React Portfolio Website Tutorial | Responsive React Project Full Course for Beginners",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js",
    stage: "English",
    href: "#https://youtu.be/7WwtzsSHdpI",
  },
  {
    number: "49",
    name: "React Social Media App Design Tutorial | React.js UI Course Full",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/zM93yZ_8SvE",
  },
  {
    number: "50",
    name: "React Millionaire Quiz App Tutorial for Beginners",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/EPh_VbMxu4E",
  },
  {
    number: "51",
    name: "React Admin Dashboard Tutorial | React Admin Panel Design Course for Beginners",
    channel: channels.lamaDev,
    imageUrl: images.lamaDev,
    skills: "React.js, React-Admin",
    stage: "English",
    href: "https://youtu.be/aTPkos3LKi8",
  },
  {
    number: "51",
    name: "Build and Deploy a Fully Responsive Modern UI/UX Website in React JS",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/LMagNcngvcU",
  },
  {
    number: "52",
    name: "Build and Deploy a Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
    channel: channels.jsm,
    imageUrl: images.jsm,
    skills: "React.js",
    stage: "English",
    href: "https://youtu.be/4oV65GVVits",
  },
  {
    number: "53",
    name: "Build and Deploy a Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
    channel: channels.edRoh,
    imageUrl: images.edRoh,
    skills: "React.js, Material-UI, Data-Grid",
    stage: "English",
    href: "https://youtu.be/wYpCWwD1oz0",
  },
  {
    number: "54",
    name: "Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode",
    channel: channels.developerJunaid,
    imageUrl: images.developerJunaid,
    skills: "Coming soon ...",
    stage: "Coming soon ...",
    href: "#_",
  },
]
