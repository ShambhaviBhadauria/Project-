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
};

const SubmissionForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState : {errors}
    }= useForm<Inputs>();

    const [data,setData] = useState<any>(null);

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
            const response = await fetch('/api/form-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                setData(responseData);
            } else {
                console.error('Error', response.statusText);
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <section className='flex gap-6 p-10'>
            <form
              onSubmit={handleSubmit(onSubmit)}
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

            <div className='flex-auto rounded-1g bg-cyan-600 p-8 text-white'>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div> 
        </section>
    )
}