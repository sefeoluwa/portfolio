import { Logo } from '../assets'
import { footlinks } from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-around'>
      <div className="">
        <div className="">
          <Logo />
          <p>Thanks for stopping by ッ</p>
        </div>
        <p>© 2024 Sefe Akinbeye. All Rights Reserved.</p>
      </div>

      <div className="flex">
        {footlinks.map((link) => (
          <div className="" key={link.name}>
            <p>{link.name}</p>
            <ul>
              {link.links.map((links) => (
                <li key={links.name}>{links.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer