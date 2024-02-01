import { tech } from "../constants"

const Stack = () => {
  return (
    <div className="py-20 px-16 overflow-hidden">
      <div className="">
        <h2 className="font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7">Tech Stack</h2>
        <p className="text-[18px]">The dev tools and apps I use.</p>
      </div>

     <div className="">
        <div className="">
            <h2>Dev & Design</h2>
            <div className="flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-start md:grid grid-cols-4 place-items-center mt-10">
              {tech.dev.map((dev) => (
                <div className="" key={dev.name}>
                  <img src={dev.logo} alt="" className="max-w-[215px]"/>
                  <div className="">
                    <p>{dev.name}</p>
                    <p>{dev.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h2>Apps</h2>
            <div className="flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-start md:grid grid-cols-4 place-items-center mt-10">
          {tech.app.map((app) => (
            <div className="" key={app.name}>
              <img src={app.logo} alt="" className="max-w-[215px]"/>
              <div className="">
                <p>{app.name}</p>
                <p>{app.description}</p>
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