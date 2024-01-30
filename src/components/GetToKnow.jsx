import { know } from '../constants'

const GetToKnow = () => {
  return (
    <div className='flex flex-col gap-[32px] mt-[20vh] lg:h-[100vh] p-5'>
      <h2 className="flex justify-center w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[16px] lg:leading-[40px]">Get to Know me</h2>

      <div className="flex flex-wrap items-start justify-around gap-[16px] w-full mt-[5%]">
        {know.map((about) => (
          <div className="bg-[#44373766] flex flex-col items-center justify-center gap-5 rounded-[32px] h-[380px] w-[400px] overflow-hidden" key={about.name}>
            <p className='text-[32px] font-bold'>{about.name}</p>
            <p className='text-[16px] text-[#808080]'>{about.description}</p>
            <div className="object-contain w-[380px] rounded-xl overflow-hidden">
            <img className='' src={about.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetToKnow