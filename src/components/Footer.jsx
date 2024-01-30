import { Logo } from '../assets'
import { footlinks } from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-around items-start flex-col xxl:h-[350px] max-w-[1514px] p-5 '>
      <div className="h-[1px] bg-[#808080] w-full xxl:ml-5"></div>
      <div className="flex xs:justify-start md:justify-around items-start my-12 w-full xs:flex-wrap-reverse md:flex-wrap">
        <div className="flex flex-col justify-between items-start gap-[93px] ">
          <div className="">
            <Logo />
            <p className='text-[#808080] text-[14px]'>Thanks for stopping by <span className='text-[22px]'>ッ</span> </p>
          </div>
          <p className='text-[#808080] text-[14px]'>© 2024 Sefe Akinbeye. All Rights Reserved.</p>
      </div>

      <div className="lg:flex xs:flex-wrap  lg:gap-[120px]" >
        {footlinks.map((link) => (
          <div className="flex flex-col gap-[16px] justify-start items-start" key={link.name}>
            <p className='text-[16px] font-bold '>{link.name}</p>
            <ul>
              {link.links.map((links) => (
                <li className='cursor-pointer flex flex-col gap-[8px] text-[#808080]' key={links.name}>{links.name}</li>
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