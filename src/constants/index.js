import {
    globe,
    menu_app,
    blogged,
    figmaland,
    profolio,
    clone, 
    sketch,
    atomic_habits,
    novice,
    Book,
    css,
    greatestSalesman,
    harry,
    headfirstJS,
    Improbable,
    jsVisually,
    secrets,
    smarter,
    steal,
    vulture,
    data,
    modern,
    eloquent,
} from '../assets'

import {
  CSS,
  figma,
  Github,
  html,
  javascript,
  nodejs,
  reactjs,
  redux,
  tailwind,
  chatgpt,
  discord,
  duolingo,
  firebase,
  framer,
  graphql,
  next,
  slack,
  notion,
  ts,
  trello,
  vercel,
  vscode,
  netlify,
  spotify

} from '../assets/tech'

const projects = [
  {
 name: "ProFolio",
 description:
   "ProFolio is a resume builder web app. It is designed to streamline the process of crafting professional resumes, and it leverages modern web technologies like Firebase for authentication and data storage, and JsPdf to convert the resume into a downloadable document.",
 tags: [
   {
     name: "reactJS",
     color: "blue-text-gradient",
   },
   {
     name: "firebase",
     color: "green-text-gradient",
   },
   {
     name: "jsPdf",
     color: "pink-text-gradient",
   },
 ],
 image: profolio,
 source_code_link: "https://github.com/sefeoluwa/ResumeBuilder",
 live_preview_link: "https://profolio-app.netlify.app/"
},
{
 name: "Blog",
 description:
   "A blog page built with ReactJS. The data sent from the create post page is sent to the Firestore Database and retrieved to be rendered on the blog page. A user can signin with Google to create a new post. Only an authenticated user can create a new post or delete a post.",
 tags: [
   {
     name: "reactJS",
     color: "blue-text-gradient",
   },
   {
     name: "firebase",
     color: "green-text-gradient",
   },
   {
     name: "firestore",
     color: "pink-text-gradient",
   },
 ],
 image: blogged,
 source_code_link: "https://github.com/sefeoluwa/blog_project",
 live_preview_link: "https://blogpage-project.netlify.app/"
},
{
 name: "Slate",
 description:
   "Slate is a fully mobile responsive sass landing page. It is built to perfectly replicate a figma design. It also combines framer motion and AOS to create captivating animation onScroll and while elements are in view.",
 tags: [
   {
     name: "reactJS",
     color: "blue-text-gradient",
   },
   {
     name: "framer-motion",
     color: "green-text-gradient",
   },
   {
     name: "aos",
     color: "pink-text-gradient",
   },
 ],
 image: figmaland,
 source_code_link: "https://github.com/sefeoluwa/figmaLand",
 live_preview_link: "https://figma-landing.netlify.app/"
},
{
 name: "Menu App",
 description:
   "A landing page for downloading a mobile app. The figma design was made by a product designer and we worked together to bring the website to life with confetties and framer-motion.",
 tags: [
   {
     name: "reactJS",
     color: "blue-text-gradient",
   },
   {
     name: "tailwindcss",
     color: "green-text-gradient",
   },
   {
     name: "figma",
     color: "pink-text-gradient",
   },
 ],
 image: menu_app,
 source_code_link: "https://github.com/sefeoluwa/menu-app",
 live_preview_link: "https://mennu-app.netlify.app/"
},
{
 name: "Company home page",
 description:
   "A landing page for a company website. It includes 3D images animated with framer-motion and AOS library. The page is fully responsive and perfectly tailored to the figma design.",
 tags: [
   {
     name: "reactjs",
     color: "blue-text-gradient",
   },
   {
     name: "tailwindcss",
     color: "green-text-gradient",
   },
   {
     name: "figma",
     color: "pink-text-gradient",
   },
 ],
 image: globe,
 source_code_link: "https://github.com/sefeoluwa/globe-landing-page/tree/main",
 live_preview_link: "https://globe-landing-page-git-main-sefeoluwa.vercel.app/"
},
{
 name: "Instagram Clone",
 description:
   "Instagram profile page web application clone built with ReactJS. User can add new images to their profile, change bio, and profile picture. Page data saves with indexDB.",
 tags: [
   {
     name: "react",
     color: "blue-text-gradient",
   },
   {
     name: "css3",
     color: "green-text-gradient",
   },
   {
     name: "jsx",
     color: "pink-text-gradient",
   },
 ],
 image: clone,
 source_code_link: "https://github.com/sefeoluwa/insta-clone",
 live_preview_link: "https://yisola-insta-clone.netlify.app/"
},
{
 name: "Etch-a-Sketch",
 description:
   "A sketchpad built with vanilla JavaScript. User can choose colors, change pad size, and draw on pad with mouse or touch.",
 tags: [
   {
     name: "javascript",
     color: "blue-text-gradient",
   },
   {
     name: "css",
     color: "green-text-gradient",
   },
   {
     name: "html",
     color: "pink-text-gradient",
   },
 ],
 image: sketch,
 source_code_link: "https://github.com/sefeoluwa/etch-a-sketch",
 live_preview_link: "https://sefeoluwa.github.io/etch-a-sketch/"
},
];

const know = [
    {
        name: 'About me',
        description: 'Who I am and what I do.',
        linkName: 'Visit site',
        id: 'about',
    },
    {
        name: 'Tech Stack',
        description: 'The dev tools and apps I use.',
        linkName: 'Visit site',
        id: 'stack',
    },
    {
        name: 'Bookshelf',
        description: "Books and pieces of wisdom I've enjoyed reading",
        linkName: 'Visit site',
        id: 'bookshelf',
    },
];

const footlinks = [
 {
  name: 'Links',
  links: [
    {
      name: 'About',
      id: '/about',
    },
    {
      name: 'Projects',
      id: '/#projects',
    },
    {
      name: 'Tech Stack',
      id: '/stack',
    },
    {
      name: 'Contact',
      id: '/contact',
    },
  ]
 },
 {
  name: 'Elsewhere',
  links: [
    {
      name: 'Email',
      id: 'mailto:sefeoluwaakinbeye@gmail.com',
    },
    {
      name: 'LinkedIn',
      id: 'https://www.linkedin.com/in/sefeakinbeye/',
    },
    {
      name: 'GitHub',
      id: 'https://github.com/sefeoluwa',
    },
  ]
 }

]

const shelf = [
    atomic_habits,
    novice,
    Book,
    css,
    greatestSalesman,
    harry,
    headfirstJS,
    Improbable,
    jsVisually,
    secrets,
    smarter,
    steal,
    vulture,
    data,
    modern,
    eloquent,
]

const tech = {
  dev: [
    {
      logo: reactjs,
      name: 'ReactJS',
      description: 'Web Framework',
    },
    {
      logo: javascript,
      name: 'JavaScript',
      description: 'Web Framework',
    },
    {
      logo: next,
      name: 'NextJS',
      description: 'Web Framework',
    },
    {
      logo: nodejs,
      name: 'NodeJS',
      description: 'Web Framework',
    },
    {
      logo: ts,
      name: 'TypeScript',
      description: 'Web Framework',
    },
    {
      logo: html,
      name: 'HTML5',
      description: 'Web Framework',
    },
    {
      logo: CSS,
      name: 'CSS3',
      description: 'CSS',
    },
    {
      logo: tailwind,
      name: 'TailwindCSS',
      description: 'CSS',
    },
    {
      logo: redux,
      name: 'Redux',
      description: 'State Management',
    },
    {
      logo: figma,
      name: 'Figma',
      description: 'Design',
    },
    {
      logo: graphql,
      name: 'GraphQL',
      description: 'Database',
    },
    {
      logo: firebase,
      name: 'Firebase',
      description: 'Database',
    },
    {
      logo: vercel,
      name: 'Vercel',
      description: 'Deployment',
    },
    {
      logo: netlify,
      name: 'Netlify',
      description: 'Deployment',
    },
    {
      logo: framer,
      name: 'Framer Motion',
      description: 'Animation',
    },
    {
      logo: vscode,
      name: 'VSCode',
      description: 'Editor',
    },
  ],

  app: [
    {
      logo: slack,
      name: 'Slack',
      description: 'Communication',
    },
    {
      logo: trello,
      name: 'Trello',
      description: 'Productivity',
    },
    {
      logo: notion,
      name: 'Notion',
      description: 'Notes',
    },
    {
      logo: Github,
      name: 'Github',
      description: 'Version Control',
    },
    {
      logo: chatgpt,
      name: 'ChatGPT',
      description: 'Productivity',
    },
    {
      logo: discord,
      name: 'Discord',
      description: 'Communication',
    },
    {
      logo: duolingo,
      name: 'Duolingo',
      description: 'Education',
    },
    {
      logo: spotify,
      name: 'Spotify',
      description: 'Music',
    }
  ]
}

export { 
    projects,
    know,
    footlinks,
    shelf,
    tech,
}