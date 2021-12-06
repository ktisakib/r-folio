import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className='flex   w-full absolute  z-20 bg-white bg-opacity-5 filter backdrop-blur-[6px] items-center justify-between md:h-[110px] h-[40px]   '>
      {/* signature-left */}
      <div className='sm:px-10 hover:scale-105 ease-in-out duration-1000 '>
        <Link href='/' className=''>
          <a>
            <img
              className=' h-8 pl-4 xl:h-[100px]   '
              src='/img/png/signature.png'></img>
          </a>
        </Link>
      </div>
      {/* navItems-right */}
      <div className='text-white flex items-center justify-end text-center h-full    '>
        <div className='md:px-16 px-3 hover:text-xl transition-all duration-300 ease-in-out cursor-pointer flex h-full items-center justify-around'>
          <Link href='#about' className='flex items-center h-full   '>
            About
          </Link>
        </div>
        <div className='md:px-16 px-3 hover:text-xl transition-all duration-300 ease-in-out cursor-pointer bg-black flex h-full items-center justify-around'>
          <Link href='#about' className='flex items-center h-full  '>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
