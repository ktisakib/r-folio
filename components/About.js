import Image from "next/image";

const About = () => {
  return (
    <div
      id='about'
      className='bg-gradient-to-br   flex  items-center  h-[1080px] to-[#5465FD] from-[#FF0615BF] '>
      <div className='flex flex-col lg:flex-row bg-textbg   bg-repeat-x space-x-28  items-center justify-center '>
        <div className='relative flex rounded-lg lg:w-auto  items-center xl:ml-48 justify-center transform lg:scale-150 z-10 overflow-hidden'>
          <img
            src='/img/5.png'
            className='transform hover:scale-150 duration-1000 transition-all'
          />
        </div>
        <div className='items-start relative border-2  hover:z-30 transition-all ease-in-out lg:translate hover:-translate-x-8 duration-1000  border-black  backdrop-filter backdrop-blur-md bg-gradient-to-r from-[#ff0617d0] to-[#5465fda9] rounded-2xl  justify-center flex flex-col space-y-8 '>
          <heading className='py-6 px-16'>
            <h1 className='text-white text-[36px] whitespace-nowrap'>Outlaw Dot Og</h1>{" "}
            <h2 className='text-[24px]  whitespace-nowrap'> An E-sports Enthusiast </h2>
          </heading>
          <description className='space-y-10 py-6 text-white lg:pb-14  w-full px-16  md:text-xl'>
            {" "}
            <p>
              <span className='text-[36px] whitespace-nowrap'>Outlaw Dot Og</span> Also Known As
              Rahimul Kabir, an Esports Enthusiast. He started his career as a
              Esports Presenter / Commentator in 2019!
            </p>{" "}
            <p>
              From that moment he started, he has casted some of the big
              tournaments and now he's thriving for more!!!
            </p>
            <p>
              He is famous for one thing, Being the Hypemaster! As he starts to
              cast, soon the viewers starts to feel every words of him as he
              describes the ongoing situation at the tournament.
            </p>
          </description>
        </div>
      </div>
    </div>
  );
};

export default About;
