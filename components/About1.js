import React from 'react'

const About1 = () => {
    return (
      <div className=' flex flex-col  lg:flex-row-reverse   items-center justify-around space-x-20 h-[1080px] bg-gradient-to-tr to-[#5465FD] from-[#FF0615BF]'>
        <div className='relative'>
          <img src='/img/1.png'></img>
        </div>
        <div className='w-2/4  scale-x-110 border-2 border-gray-700 relative z-20   to-[#5465fd71] from-[#ff061775] backdrop-blur-lg bg-gradient-to-r p-10 pl-72 rounded-3xl'>
          <h1 className='italic text-4xl bg-white font-bold  text-[#FF4656] w-max p-2 '>
            {" "}
            The Hypemaster!!!{" "}
          </h1>
          <p className='text-white text-[24px] font-thin'>He is a fan of fps competitive shootings! As long as it's a shooting
          game He's all in! He has some motto as a Shoutcaster, at some point he
          said : <p className='italic'>"As an Esports Enthusiast, I wanted to be a part of this
          industry, that's why I choose to be an <br/> <span className='text-black font-bold text-[24px]'>Esports Commentator & A Host.</span>
          <br/>Because that's what connects me to the audience. I always focus on the
          commentating cause that's how you make them feel and have a better
          understanding at the ongoing situation. I always try to present myself
          detailed in every way. Cause presentation is everything! After all
          this is not just a career, This is a form of ART!!!<br/><span className='text-black text-xl font-sans font-bold '>That's why they
          love me! That's why they call me the <span className='text-white text-3xl'>Hypemaster!!!"</span></span></p></p>
        </div>
      </div>
    );
}

export default About1
