import { projects } from "../constants";
import { FaGithub, FaEye } from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[16px] lg:leading-[40px]">Selected Work</h2>
      <p className="flex items-center justify-center text-center w-[80%] mt-8 text-secondary text-[20px] max-w-3xl leading-[30px]"> The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

      <div className="mt-20 pl-0 p-5 lg:pl-[13%] flex flex-wrap gap-12 items-center justify-center lg:justify-start">
        {projects.map((project) => (
          <div className="project-card  py-[3px] rounded-[15px]" key={project.name}>
            <div className="relative rounded-2xl sm:w-[360px] w-full h-fit p-4 bg-tertiary " >
            <img src={project.image} alt="" className="w-full rounded-2xl" />
            <div className="flex gap-8 items-end m-3 card-img_hover z-[2]">
              <button
                onClick={() => window.open(project.live_preview_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <FaEye style={{ fontSize: '30px' }}/>
              </button>
              <button
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <FaGithub style={{ fontSize: '30px' }}/>
              </button>
            </div>
            <p className="font-bold text-[24px]">{project.name}</p>
            <p className="mt-2 text-[15px]">{project.description}</p>
            <p>{project.tags}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
