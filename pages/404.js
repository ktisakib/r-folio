const AreYouLostBabyGirl = () => {
  return (
      <div className='flex  '>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50 hover:skew-y-12 bg-blue-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50 hover:skew-y-12 bg-pink-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50 hover:skew-y-12 bg-green-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:skew-y-12  bg-yellow-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:skew-y-12 bg-red-600'></div>

      <div className='flex text-center flex-col text-lg bg-gray-500 max-w-max m-auto h-screen p-6 justify-center items-center '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#000000'>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z' />
        </svg>
        Are You Lost Baby Girl?
        <br />
        Let Me take take you{" "}
        <h1 className='text-2xl bg-red-600 py-1 px-4 rounded-lg underline cursor-pointer text-gray-50'>
          <a href='/'>Back</a>
        </h1>
      </div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:-skew-y-12 bg-red-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:-skew-y-12 bg-yellow-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:-skew-y-12 bg-green-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:-skew-y-12 bg-pink-600'></div>
      <div className='h-screen hover:blur w-1/12 duration-300 transition-all  transform ease-linear hover:scale-y-50  hover:-skew-y-12 bg-blue-600'></div>
    </div>
  );
};

export default AreYouLostBabyGirl;
