import SimpleForm from './components/submissionform'
import Navbar from './components/navbar'

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
            <select className='flex text-center h-full w-full mr-20 ml-60'>
                <option value='1'>Test Driven Development</option>
                <option value='2'>Scrum Methodology</option>
                <option value='3'>Third Methodology</option>
                <option value='4'>Fourth Methodology</option>
              </select>
              <select className='flex text-center h-full w-full ml-20 mr-60'>
                <option value='1'>Strongly Against</option>
                <option value='2'>Slightly Against</option>
                <option value='3'>Neutral Stance</option>
                <option value='4'>Slightly For</option>
                <option value='5'>Strongly For</option>
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
