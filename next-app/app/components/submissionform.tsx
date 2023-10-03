// https://youtu.be/R_Pj593TH_Q

'use client'

import { FormEvent, useState } from 'react'

export default function submissionform() {
    const [data, setData] = useState()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const formData = new FormData(form)
        const formDataObject = Object.fromEntries(formData)

        const data = await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify(formDataObject)
        }).then(res => res.json())

        setData(data)
        form.reset()
    }

    return (
        <section className='flex gap-6'>
            <form
              onSubmit={handleSubmit}
              className='flex felx-1 flex-col gap-4 sm:w-1/2'
            >
                <input className='rounded-1g' name='name' placeholder='name' required/>

            </form>
        </section>
    )
}