import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { FaGithub, FaEye } from 'react-icons/fa';

const Projects = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} id="projects" className="flex flex-col items-center mt-40 md:mt- justify-center">
      <h2 className="font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Selected Work</h2>
      <p className="flex items-center justify-center text-justify w-[80%] mt-8 text-[20px] max-w-3xl leading-[30px]"> The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

      <div className="mt-20 flex flex-wrap gap-12 items-center justify-center xl:grid grid-cols-3 ">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            animate={controls}
            initial="hidden"
            className="project-card py-[3px] rounded-[15px]" key={project.name}
          >
            <motion.div className="relative rounded-2xl w-[330px] lg:w-[350px] lg:h-[550px] h-[500px] p-4 bg-[#191938]" >
              <img src={project.image} alt="" className="w-full rounded-2xl object-cover" />
              <div className="flex gap-8 items-end m-3 card-img_hover z-[2]">
                <button
                  onClick={() => window.open(project.live_preview_link, "_blank")}
                  className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <FaEye style={{ fontSize: '30px' }} />
                </button>
                <button
                  onClick={() => window.open(project.source_code_link, "_blank")}
                  className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <FaGithub style={{ fontSize: '30px' }} />
                </button>
              </div>
              <p className="font-bold text-[24px]">{project.name}</p>
              <p className="mt-2 text-[15px]">{project.description}</p>
              <div className="font-bold absolute bottom-6 flex flex-wrap gap-2 ">
                {project.tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
