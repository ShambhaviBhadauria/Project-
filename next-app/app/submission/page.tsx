import SimpleForm from '../components/submissionform'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <section>
      <Navbar />

      <br/>
      <br/>
      <br/>
      <br/>

      <div className='flex top-96 p-10 w-screen bg-red-100'>
          <h1 className='text-center w-screen text-6xl'>Submission Page</h1>
      </div>

      <div className='p-10 bg-red-100 h-screen w-screen'>
      <SimpleForm />
      </div>

    </section>
  )
}