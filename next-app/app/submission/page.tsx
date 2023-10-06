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

      <div className='p-10 '>
      <SimpleForm />
      </div>

    </section>
  )
}