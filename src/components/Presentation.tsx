import minePhoto from "../assets/portfolioPhoto.jpeg";
import { GithubLogo } from "../icons/GithubLogo";
import LinkedIn from "../icons/LinkedIn";
import { ResumeIcon } from "../icons/Resume";

export const Presentation = () => {
  return (
    <div className="mt-2 flex justify-center">
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-center flex-col gap-3">
          <p className="text-[#0077B5] font-medium text-2xl">Hi there,</p>

          <article>
            <h1 className="text-6xl font-bold tracking-tight mb-3">
              I'm Dante Coronati
            </h1>
            <p className="text-xl">
              Innovative{" "}
              <span className="text-[#0077B5] font-medium">
                Frontend Developer
              </span>{" "}
              crafting seamless user experiences with cutting-edge technologies.
              Passionate about transforming designs into interactive, responsive
              websites. Let's bring your vision to life!
            </p>
          </article>

          <article className="mt-2 flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/dante-coronati-388b202a8/"
              target="_blank"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium border-2 border-[#0077B5] hover:border-white text-[#0077B5] hover:bg-white transition-all ease-in duration-75 rounded-lg "
            >
              <span className="relative flex items-center gap-2 px-5 py-2 transition-all ease-in duration-75 rounded-md ">
                <LinkedIn />
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/DantePrograma"
              target="_blank"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium border-2 border-white hover:border-white text-white hover:bg-white hover:text-black transition-all ease-in duration-75 rounded-lg "
            >
              <span className="relative flex items-center gap-2 px-5 py-2 transition-all ease-in duration-75 rounded-md ">
                <GithubLogo />
                GitHub
              </span>
            </a>

            <a
              href="/"
              target="_blank"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium border-2 border-white hover:border-white text-white hover:bg-white hover:text-black transition-all ease-in duration-75 rounded-lg "
            >
              <span className="relative flex items-center gap-2 px-5 py-2 transition-all ease-in duration-75 rounded-md ">
                <ResumeIcon />
                Resume
              </span>
            </a>
          </article>
        </div>

        <picture className="grid place-items-end">
          <img
            className="h-[330px] w-[330px] rounded-full"
            src={minePhoto}
            alt="mine photo"
          />
        </picture>
      </div>
    </div>
  );
};
