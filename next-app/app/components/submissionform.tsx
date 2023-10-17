'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

const SubmissionForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
          
                setError('title', { message: '' });
                setError('authorname', { message: '' });
                setError('yearOfPublication', { message: '' });
                setError('volume', { message: '' });
                setError('extraInformation', { message: '' });
                setError('responseEmail', { message: '' });
          
            } else {
                const { msg } = await res.json();
      
                setError('title', { message: msg.title || 'Unknown error occurred' });
                setError('authorname', { message: msg.authorname || 'Unknown error occurred' });
                setError('yearOfPublication', { message: msg.yearOfPublication || 'Unknown error occurred' });
                setError('volume', { message: msg.volume || 'Unknown error occurred' });
                setError('extraInformation', { message: msg.extraInformation || 'Unknown error occurred' });
                setError('responseEmail', { message: msg.responseEmail || 'Unknown error occurred' });
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <section className='flex gap-6 p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
                <input
                    {...register('title', { required: 'Title is required' })}
                    className='rounded-lg p-2'
                    placeholder='Title'
                />
                {errors.title && <p className='text-sm text-red-400'>{errors.title.message}</p>}

                <input
                    {...register('authorname', { required: 'Author name is required' })}
                    className='rounded-lg p-2'
                    placeholder='Author Name'
                />
                {errors.authorname && <p className='text-sm text-red-400'>{errors.authorname.message}</p>}

                <input
                    {...register('yearOfPublication', { required: 'Year of Publication is required' })}
                    className='rounded-lg p-2'
                    placeholder='Year Of Publication (dd/mm/yyyy)'
                    type='date'
                />
                {errors.yearOfPublication && (
                    <p className='text-sm text-red-400'>{errors.yearOfPublication.message}</p>
                )}

                <input
                    {...register('volume', { required: 'Volume is required' })}
                    className='rounded-lg p-2'
                    placeholder='Volume'
                    type='number'
                />
                {errors.volume && <p className='text-sm text-red-400'>{errors.volume.message}</p>}

                <input
                    {...register('extraInformation')}
                    className='rounded-lg p-2'
                    placeholder='Extra Information'
                    type='text'
                />

                <input
                    {...register('responseEmail', { required: 'Email is required' })}
                    className='rounded-lg p-2'
                    placeholder='Email'
                    type='email'
                />
                {errors.responseEmail && (
                    <p className='text-sm text-red-400'>{errors.responseEmail.message}</p>
                )}

                <button className='rounded-lg bg-black py-2 text-white' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default SubmissionForm;
