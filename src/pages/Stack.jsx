import { tech } from "../constants"

const Stack = () => {
  return (
    <div className="py-20 px-16 overflow-hidden lg:w-[90%]">
      <div className="">
        <h2 className="font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7">Tech Stack</h2>
        <p className="text-[18px]">The dev tools and apps I use.</p>
      </div>

     <div className="">
        <div className="">
            <h2 className="mt-7 text-[20px] font-bold  md:text-[30px]">Dev & Design</h2>
            <div className="flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-between mt-5 lg:justify-start">
          {tech.dev.map((dev) => (
            <div className="tech p-10 flex flex-col items-center justify-center w-[310px] max-h-[280px] gap-5 rounded-2xl " key={dev.name}>
              <img src={dev.logo} alt="" className="w-[150px]"/>
              <div className="tech-desc-container flex justify-between w-[120%] font-semibold py-5">
                <p className="flex items-center">{dev.name}</p>
                <p className="tech-desc w-[65%] flex justify-center items-center p-2 rounded-3xl text-[15px] font-normal">{dev.description}</p>
              </div>
            </div>
          ))}
        </div>
          </div>

          <div className="">
            <h2 className="mt-7 md:text-[30px] text-[20px] font-bold">Apps</h2>
            <div className="flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-between mt-10 lg:justify-start">
          {tech.app.map((app) => (
            <div className="tech p-10 flex flex-col items-center justify-center w-[280px] max-h-[250px] rounded-2xl" key={app.name}>
              <img src={app.logo} alt="" className="w-[150px]"/>
              <div className="flex justify-between w-[120%] font-semibold py-5">
                <p className="flex items-center">{app.name}</p>
                <p className="tech-desc w-[65%] flex justify-center items-center p-2 rounded-3xl text-[15px] font-normal">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
          </div>
      </div>
    </div>
  )
}

export default Stack