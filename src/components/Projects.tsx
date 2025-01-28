import spotifyCloneImage from "../assets/Screenshot_1.png";
import multistepformImage from "../assets/Screenshot_2.png";
import landingPagePlanetas from "../assets/Screenshot_3.png";
import javascriptQuiz from "../assets/Screenshot_4.png";
import { GithubLogo } from "../icons/GithubLogo";
import { LinkIcon } from "../icons/LinkIcon";

const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    className: "bg-[#003159] text-white",
    icon: "https://svgl.app/library/tailwindcss.svg",
  },
  ZUSTAND: {
    name: "Zustand",
    className: "bg-white text-black",
    icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
  },
  TANSTACK_ROUTER: {
    name: "TanStack Router",
    className: "bg-red-100 text-black",
    icon: "https://svgl.app/library/reactrouter.svg",
  },
  ZOD: {
    name: "Zod",
    className: "bg-white text-black",
    icon: "https://svgl.app/library/zod.svg",
  },
  REACT_HOOK_FORM: {
    name: "React Hook Form",
    className: "bg-blue-100 text-black",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDMiIGhlaWdodD0iMjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggZD0iTTE1Ny45OTUgOC41YzEwLjA4IDAgMTkuMjA2IDQuMDg3IDI1LjgxMiAxMC42OTJTMTk0LjUgMzQuOTI0IDE5NC41IDQ1LjAwM2gwdjExMS45OTRjMCAxMC4wOC00LjA4NiAxOS4yMDYtMTAuNjkyIDI1LjgxMmEzNi4zOSAzNi4zOSAwIDAgMS0yNS44MTMgMTAuNjkxaDAtMTEyLjk5Yy0xMC4wOCAwLTE5LjIwNi00LjA4Ny0yNS44MTItMTAuNjkyUzguNSAxNjcuMDc2IDguNSAxNTYuOTk3aDBWNDUuMDAzYzAtMTAuMDggNC4wODYtMTkuMjA2IDEwLjY5Mi0yNS44MTJBMzYuMzkgMzYuMzkgMCAwIDEgNDUuMDA1IDguNWgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjE3IiBmaWxsPSIjZWM1OTkwIi8+PHBhdGggZD0iTTEzMy4zODUgNTEuNjA0aC0yMC44NjhjLTEuNTMtNC43NjYtNS45ODEtOC4wMDEtMTEuMDA5LTguMDAxcy05LjQ3OSAzLjIzNS0xMS4wMDkgOC4wMDFINjkuNjE2Yy04LjIyMiAwLTE0Ljg4NyA2LjYzMi0xNC44ODcgMTQuODEzdjc3LjE3N2MwIDguMTgxIDYuNjY1IDE0LjgxMyAxNC44ODcgMTQuODEzaDYzLjc2OWM4LjIyMiAwIDE0Ljg4Ny02LjYzMiAxNC44ODctMTQuODEzVjY2LjQxN2MwLTguMTgxLTYuNjY1LTE0LjgxMy0xNC44ODctMTQuODEzaDB6TTkxLjU0IDU0LjI5N2ExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4wNjRjLjg4Ni00LjA0NiA0LjQ4Ni02LjkzMiA4LjY0OC02LjkzMnM3Ljc2MiAyLjg4NSA4LjY0OCA2LjkzMmExLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4wNjRoNy4yODF2OC44MjFjMCAyLjIzMS0xLjgxOCA0LjA0LTQuMDYgNC4wNEg4OC4zMDVjLTIuMjQyIDAtNC4wNi0xLjgwOS00LjA2LTQuMDR2LTguODIxaDcuMjk0em01NC4wMjUgODkuMjk3YzAgNi42OTQtNS40NTMgMTIuMTItMTIuMTggMTIuMTJINjkuNjE2Yy02LjcyNyAwLTEyLjE4LTUuNDI2LTEyLjE4LTEyLjEyVjY2LjQxN2MwLTYuNjk0IDUuNDUzLTEyLjEyIDEyLjE4LTEyLjEyaDExLjkyM3Y4LjgyMWMwIDMuNzE5IDMuMDMgNi43MzMgNi43NjcgNi43MzNoMjYuMzljMy43MzcgMCA2Ljc2Ny0zLjAxNSA2Ljc2Ny02LjczM3YtOC44MjFoMTEuOTIzYzYuNzI3IDAgMTIuMTggNS40MjYgMTIuMTggMTIuMTJ2NzcuMTc3em0tMTQuODMzLTQ3Ljk4MWgtMjMuODE5YTEuMzUgMS4zNSAwIDAgMC0xLjM1MyAxLjM0NyAxLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4zNDdoMjMuODE5YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NiAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjgxOWExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6bTM1LjI1NCAzMi41ODloLTIzLjg4NmExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3SDEzMC44YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NyAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjg4NmExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+",
  },
};
const PROJECTS = [
  {
    title: "Spotify Clone",
    description:
      "A simple Spotify clone. I learned how to manage a store and the HTML audio component.",
    link: "https://spotify-clone-tan-one.vercel.app/",
    github: "https://github.com/DantePrograma/Spotify-Clone",
    image: spotifyCloneImage,
    tags: [TAGS.TAILWIND, TAGS.ZUSTAND, TAGS.TANSTACK_ROUTER],
  },

  {
    title: "Multi Step form from Frontend Mentor",
    description:
      "Multi step form with data validation. A challenge from Frontend Mentor.",
    link: "https://muti-step-form-frontendmentor.netlify.app/",
    github: "https://github.com/DantePrograma/multi-step-form-frontendmentor",
    image: multistepformImage,
    tags: [TAGS.ZOD, TAGS.TAILWIND, TAGS.REACT_HOOK_FORM],
  },
  {
    title: "Planets fact site from Frontend Mentor",
    description:
      "8-page fact site for all planets in our solar system. I learned how to make some animations with Tailwind CSS.",
    link: "https://proyecto-planetas.netlify.app/",
    github: "https://github.com/DantePrograma/Proyecto-planetas",
    image: landingPagePlanetas,
    tags: [TAGS.TAILWIND],
  },
  {
    title: "JavaScript Quiz",
    description:
      "Midudev project. A simple quiz with JavaScript. I learned how to manage a store.",
    link: "https://javascript-quiz-six.vercel.app/",
    github: "https://github.com/DantePrograma/JavaScript-Quiz",
    image: javascriptQuiz,
    tags: [TAGS.ZUSTAND],
  },
];

export const Projects = () => {
  return (
    <div className="px-4 lg:px-0 flex flex-col gap-y-8 mt-4 pb-6">
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <article
          key={title}
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={`img of ${title} project`}
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 font-medium`}
                    >
                      <img
                        className="w-4 h-4"
                        src={tag.icon}
                        alt={`${tag.name} logo`}
                      />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-700 dark:text-gray-400">
                {description}
              </div>

              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                  <a
                    href={github}
                    role="link"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                  >
                    <GithubLogo />
                    GitHub
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    role="link"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                  >
                    <LinkIcon />
                    Link
                  </a>
                )}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
