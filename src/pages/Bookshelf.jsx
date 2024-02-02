/* eslint-disable react/no-unescaped-entities */
import { shelf } from '../constants'
const Bookshelf = () => {
  return (
   <div className="py-40 overflow-hidden">
<div className="flex flex-col justify-center px-[18.5%]">
<h1 className='font-black lg:text-[80px] sm:text-[60px] xs:text-[48px] text-[38px] lg:leading-[98px] mt-7 '>Bookshelf</h1>
    <p className="text-[16px] md:text-[24px] max-w-[358px] md:w-[729px] text-[#808080]">Books and pieces of wisdom I've enjoyed reading.</p>
</div>
    <div className="flex justify-center">
    <div className='flex flex-wrap xxl:gap-[60px] gap-[24px] items-center justify-center lg:grid grid-cols-4 place-items-center mt-10'>
      {shelf.map((shelf, index) => (
        <div className="max-w-[215px]" key={index}>
          <img src={shelf} alt="" />
        </div>
      ))}
    </div>
    </div>
   </div>
  )
}

export default Bookshelf