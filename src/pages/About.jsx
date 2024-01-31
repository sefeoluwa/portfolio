import { Logo } from '../assets'

const About = () => {
  return (
    <div className='flex flex-col gap-10 py-[150px]'>

      <div className="">
        <h1 className='font-black lg:text-[80px] sm:text-[60px] xs:text-[48px] text-[38px] lg:leading-[98px] mt-7 '>A little bit about me</h1>
        <p className='text-[#808080]'>Who I am and what I do.</p>
      </div>


      <div className="bg-[#808080] h-[1px]"></div>


    <div className="">
      <div className="">
      <h2>Who I am</h2>
      <p></p>
      </div>

      <div className="">
        <h2>What I do</h2>
        <p></p>
      </div>

      <div className="">
        <h2>What I did</h2>
        <p></p>
      </div>
    </div>


    <p>Feel free to reach out via e-mail, or follow me on Twitter. Want to see where I’ve worked? Check out my Resume, or connect with me on LinkedIn.</p>


    <p>Let's build something great,</p>


    <Logo />
    </div>
  )
}

export default About