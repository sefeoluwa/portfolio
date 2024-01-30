import { Logo } from '../assets'
import { footlinks } from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-around items-center flex-col xxl:h-[326px] max-w-[1514px] '>
      <div className="h-[1px] bg-[#808080] max-w-[1514px] m-5"></div>
     <div className="flex justify-between items-start w-full">
     <div className="flex flex-col justify-between items-start">
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
    </div>
  )
}

export default Footer