import SimpleForm from '../components/submissionform'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <section>
      <Navbar />

      <div className='top-24 p-10'>
      <SimpleForm />
      </div>

    </section>
  )
}