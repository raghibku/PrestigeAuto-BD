import React from 'react'

const Banner = () => {

  const divStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)), url(./images/banner2.jpg)',
    backgroundSize: 'cover',
  };
  return (
    <div style={divStyle} className='w-full h-screen '>
      <h1 className='text-transparent bg-clip-text  text-3xl bg-gradient-to-r from-yellow-600 to-red-600 lg:text-7xl font-serif	 font-semibold ml-12 md:ml-24 pt-36'>Welcome to <br /><span className='font-extrabold bg-gradient-to-r from-yellow-600 to-red-600 text-transparent bg-clip-text '>Prestige Auto BD</span></h1>
      <h1 className='bg-gradient-to-r from-orange-600 to-orange-500 text-xl text-transparent bg-clip-text lg:text-3xl font-semibold ml-12 md:ml-24 '>Your Destination for Quality Cars</h1>
    </div>
  )
}

export default Banner