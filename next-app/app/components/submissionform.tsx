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
    reponseBool: boolean,
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

   const processForm: SubmitHandler<Inputs> = data => setData(data)

    return (
        <section className='flex gap-6'>
            <form
              onSubmit={handleSubmit(processForm)}
              className='flex felx-1 flex-col gap-4 sm:w-1/2'
            >
                <input  className='rounded-1g p-1'
                        placeholder='Title' 
                        type='text'
                        {...register('title', { required: 'title is required'})}
                />
                {errors.title?.message && (
                    <p className='text-sm text-red-400'>{errors.title.message}</p>
                )}

                <input  className='rounded-1g p-1'
                        placeholder='Author Name' 
                        type='text'
                        {...register('authorname', { required: 'authorName is required'})}
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

             
                {/* <input  className='rounded-1g p-1'
                        type='checkbox' 
                        placeholder='Recieve email response' 
                        {...register('reponseBool', {})}
                />

                <input  className='rounded-1g p-1'
                        placeholder='Email' 
                        type='text'
                        {...register('extraInformation', {})}
                />
                {errors.volume?.message && (
                    <p className='text-sm text-red-400'>{errors.volume.message}</p>
                )}  */}

                <button className='rounded-1g bg-black py-2 text-white'>Submit</button>
            </form>

            <div className='flex-1 rounded-1g bg-cyan-600 p-8 text-white'>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div> 
        </section>
    )
}