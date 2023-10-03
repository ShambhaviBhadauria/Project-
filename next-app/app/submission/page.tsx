import SimpleForm from '../components/submissionform'

export default function Home() {
  return (
    <section className='py-10 px-10'>
      <div className='container'>
        <h1 className='text-2xl'>Article Submission Form</h1>
        <br></br>
        <SimpleForm />
      </div>
    </section>
  )
}