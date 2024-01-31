import { Link } from 'react-router-dom'
import { know } from '../constants'

const GetToKnow = () => {
  return (
    <section id='about' className='flex flex-col gap-[32px] mt-[20vh] xxl:h-[100vh] p-5'>
      <h2 className="flex justify-center w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Get to Know me</h2>

      <div className="flex flex-wrap items-start justify-around gap-[55px] max-w-full p-10 mt-[5%]">
        {know.map((about) => (
          <Link to={`/${about.id}`} className="know-cards cursor-pointer flex flex-col items-center justify-center gap-5 rounded-[32px] h-[350px] md:h-[450px] w-[400px] overflow-hidden p-3" key={about.name}>
            <p className='text-[32px] font-bold'>{about.name}</p>
            <p className='text-[16px] text-[#808080]'>{about.description}</p>
            <div className="object-contain  rounded-xl overflow-hidden h-full items-end flex ">
            <img className='' src={about.image} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GetToKnow