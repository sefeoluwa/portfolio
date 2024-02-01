import { tech } from "../constants"

const Stack = () => {
  return (
    <div>
      <div className="">
        <h2>Tech Stack</h2>
        <p>he dev tools and apps I use.</p>
      </div>

     <div className="">
        <div className="">
            <h2>Dev & Design</h2>
            <div className="">
              {tech.dev.map((dev) => (
                <div className="" key={dev.name}>
                  <img src={dev.logo} alt="" />
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
            <div className="">
          {tech.app.map((app) => (
            <div className="" key={app.name}>
              <img src={app.logo} alt="" />
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