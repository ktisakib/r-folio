import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About"
import About1 from "../components/About1"
import About2 from "../components/About2"
import About4 from "../components/About3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className='flex flex-col    min-h-screen space-y-5'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=' m-auto items-center flex-col bg-[#FF4656]'>
        <img
          src='/img/Svgs/outlaw.svg'
          className='absolute z-30 lg:left-[110.4px] lg:top-[200px] w-10 md:w-max left-9 top-20  '
        
        />
        
        <Nav />
        <Hero />
        <About />
        <About1 /><img
          src='/img/Svgs/outlaw.svg'
          className='absolute z-30 right-12  w-10 md:w-max  '
        
        />
        <About2 />
        <About4 />
        <Footer/>
        

      </main>
    </div>
  );
}
