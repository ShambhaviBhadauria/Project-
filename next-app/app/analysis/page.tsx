import React from 'react'
import Navbar from '../components/navbar';



const AnalystPage = () => {
  return (
    <div>
      <Navbar />
        
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='flex top-96 p-10 w-screen bg-red-100'>
          <h1 className='text-center w-screen text-6xl'>Analysis Page</h1>
        </div>

        <div className='flex w-screen h-screen bg-red-100'>
          <div className='flex m-auto h-3/5 w-3/4 rounded-md border-2 mt-5 p-10 border-black' >
            <p>Moderation stuff Goes here</p>
          </div>
        </div>
    </div>
  )
}

export default AnalystPage