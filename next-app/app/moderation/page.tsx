import React from 'react'
import Navbar from '../components/navbar'
import ModerationList from '../components/moderationList'

const ModerationPage = () => {
  return (
    <div>
      <Navbar />
      
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='flex top-96 p-10 w-screen bg-red-100'>
          <h1 className='text-center w-screen text-6xl'>Moderation Page</h1>
      </div>

      <div className='flex w-screen h-screen bg-red-100'>
          <div className='flex m-auto h-auto w-3/4 rounded-md border-2 mt-5 p-10 border-black' >
            <ModerationList/>
          </div>
        </div>
    </div>
  )
}

export default ModerationPage