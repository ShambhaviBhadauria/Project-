// https://youtu.be/R_Pj593TH_Q

'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    title: string
    authorname: string
    yearOfPublication: string
    volume: number
    extraInformation: string,
    responseEmail: string
}

export default function submissionform() {
    const [data, setData] = useState<Inputs>()

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
   } = useForm<Inputs>({   })

   const processForm: SubmitHandler<Inputs> = async data => {  

   

    const returnedData = await fetch('../api/submission', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json())

    if(!returnedData){
        console.log('An Error Occured')
        return
    }

    console.log(data)
    setData(returnedData)

   }



    return (
        <section className='flex gap-6 p-10'>
            <form
              onSubmit={handleSubmit(processForm)}
              className='flex felx-1 flex-col gap-4 sm:w-1/2'
            >
                <input  className='rounded-1g p-1'
                        placeholder='Title' 
                        type='text'
                        {...register('title', { required: 'Title is required'})}
                />
                {errors.title?.message && (
                    <p className='text-sm text-red-400'>{errors.title.message}</p>
                )}

                <input  className='rounded-1g p-1'
                        placeholder='Author Name' 
                        type='text'
                        {...register('authorname', { required: 'Author\'s Name is required'})}
                />
                {errors.authorname?.message && (
                    <p className='text-sm text-red-400'>{errors.authorname.message}</p>
                )}

                <input  className='rounded-1g p-1'
                        placeholder='Year Of Publication (dd/mm/yyyy)' 
                        type='date'
                        {...register('yearOfPublication', { required: 'Year of Publication is required'})}
                />
                {errors.yearOfPublication?.message && (
                    <p className='text-sm text-red-400'>{errors.yearOfPublication.message}</p>
                )}

                <input  className='rounded-1g p-1'
                        placeholder='Volume' 
                        type='number'
                        {...register('volume', {})}
                />
                {errors.volume?.message && (
                    <p className='text-sm text-red-400'>{errors.volume.message}</p>
                )}

                <input  className='rounded-1g p-1'
                        placeholder='Extra Information' 
                        type='text'
                        {...register('extraInformation', {})}
                />
                {errors.volume?.message && (
                    <p className='text-sm text-red-400'>{errors.volume.message}</p>
                )}

             
                <label className='w-full text-center m-3'>Enter your email to recieve a response on your submission</label>
                

                
                <input  className='rounded-1g p-1'
                    placeholder='Email' 
                    type='text'
                    {...register('responseEmail', {})}
                />
                

                <button className='rounded-1g bg-black py-2 text-white'>Submit</button>
            </form>

            <div className='flex-auto rounded-1g bg-cyan-600 p-8 text-white'>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div> 
        </section>
    )
}