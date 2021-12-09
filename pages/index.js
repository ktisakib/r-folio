import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About"
import About1 from "../components/About1"
import About2 from "../components/About2"

export default function Home() {
  return (
    <div className='flex flex-col    min-h-screen space-y-5'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=' bg-[#FF4656]'>
        <img
          src='/img/Svgs/outlaw.svg'
          className='absolute lg:left-[75.4px] lg:top-[212.1px] lg:w-72  w-10 left-9 top-20  '
        
        />
        <Nav />
        <Hero />
        <About />
        <About1 />
        <About2 />

      </main>
    </div>
  );
}
