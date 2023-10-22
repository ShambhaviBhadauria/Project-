'use client'
import SimpleForm from './components/submissionform'
import Navbar from './components/navbar'
import display from './components/display';
import { Component } from 'react'
export default function SearchPage() {
  return (
    <section className=''>
      <div className='container'>
        <Navbar />

        <br/>
        <br/>
        <br/>
        <br/>

        <form>

        <div className='flex top-96 p-10 w-screen bg-red-100'>
          <h1 className='text-center w-screen text-6xl'>Search Page</h1>
        </div>

        
        <div className='flex top-96 p-10 w-screen bg-red-100'>
            <select className='flex text-center h-full w-full mx-96'>
                <option value='1'>Test Driven Development</option>
                <option value='2'>Scrum Methodology</option>
                <option value='3'>Agile Methodology</option>
                <option value='4'> DevOps Deployment Methology</option>
                <option value='5'> All Methologies</option>
              </select>
        </div>

        <div className='flex p-10 w-screen bg-red-100'>
          <button className='flex justify-between text-centre px-20 py-3 rounded-1g m-auto text-black bg-red-400'>Search</button>
        </div>
        </form>

        <div className='flex w-screen h-screen bg-red-100'>
          <div className='flex m-auto h-1/2 w-3/5 rounded-md border-2 mt-5 p-10 border-black' >
            <p>Search Results go here</p>
          </div>
        </div>

      </div>
    </section>
  )
}
