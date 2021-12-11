import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className=' fixed flex z-30 justify-between md:pl-28 w-full  bg-white bg-opacity-30 backdrop-filter backdrop-blur'>
      {/* signature-left */}
      <div className="my-auto">
        <Link href='/'>
          <a className=''>
            <img src='/img/sign.svg' className=' h-16 lg:h-auto' />
          </a>
        </Link>
      </div>
      <div className=' text-white font-bold text-xl flex items-center justify-center space-x-16 pl-36 px-28 bg-navbg bg-no-repeat bg-cover md:w-[450px]  sm:h-[70px] h-8 w-6 '>
        <Link href='#about' className='cursor-pointer'>
          <a>About</a>
        </Link>
        <Link href='#contact' className='cursor-pointer'>
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
