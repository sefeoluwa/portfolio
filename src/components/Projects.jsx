import { projects } from "../constants"
// import { FaGithub } from 'react-icons'
// import { Link }from 'react-router-dom'


const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[16px] lg:leading-[40px]">Selected Work</h2>
      <p className="flex items-center justify-center text-center w-[80%] mt-8 text-secondary text-[20px] max-w-3xl leading-[30px]"> The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>

      <div className="">
        {projects.map((project) => (
          <div className="" key={project.name}>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>{project.tags}</p>
            <a href={project.live_preview_link}>Live Preview</a>
            {/* <Link to={project.source_code_link}><FaGithub /></Link> */}
            <img src={project.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects