const Hero = () => {
  return (
    <div className='group bg-hero-pattern bg-cover    brightness-110 text-white'>
      <img
        src='/img/hero/ODO.svg'
        className='absolute z-20 top-12 left-5 h-3 group-hover:h-4 transition-all duration-1000  
        md:top-28 md:h-6  md:left-10 md:group-hover:h-8
        lg:h-10 lg:group-hover:h-12 lg:top-36 lg:left-20
        xl:h-16 xl:group-hover:h-20 xl:top-48 xl:left-28
         '
      />

      <img
        className='w-full backdrop-filter   hover:backdrop-blur-sm transition-all duration-1000  '
        src='/img/hero/mask.png'></img>
    </div>
  );
};

export default Hero;
