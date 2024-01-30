import { Logo } from '../assets'
import { footlinks } from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-around items-start flex-col xxl:h-[350px] max-w-[1514px] p-5  '>
      <div className="h-[1px] bg-[#808080] w-full xxl:ml-5"></div>
      <div className="flex justify-around items-start my-12 w-full flex-wrap-reverse">
        <div className="flex flex-col justify-between items-start gap-[93px] ">
          <div className="">
            <Logo />
            <p className='text-[#808080] text-[14px]'>Thanks for stopping by <span className='text-[22px]'>ッ</span> </p>
          </div>
          <p className='text-[#808080] text-[14px]'>© 2024 Sefe Akinbeye. All Rights Reserved.</p>
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