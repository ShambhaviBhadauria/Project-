'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SubmissionForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [title, setTitle] = useState('');
    const [authorname, setAuthorname] = useState('');
    const [yearOfPublication, setYearOfPublication] = useState('');
    const [volume, setVolume] = useState('');
    const [extraInformation, setExtraInformation] = useState('');
    const [responseEmail, setResponseEmail] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Title: ", title);
        console.log("Author Name: ", authorname);
        console.log("Year Of Publication: ", yearOfPublication);
        console.log("Volume: ", volume);
        console.log("Extra Information: ", extraInformation);
        console.log("Email: ", responseEmail);

        try {
            const res = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    authorname,
                    yearOfPublication,
                    volume,
                    extraInformation,
                    responseEmail,
                }),
            });

            const { msg } = await res.json();
            setError(msg);
            console.log("Server Response: ", msg);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <section className='flex gap-6 p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col gap-4 sm:w-1/2'>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='rounded-lg p-2'
                    placeholder='Title'
                    type='text'
                    {...register('title', { required: 'Title is required' })}
                />
                {errors.title?.message && (
                    <p className='text-sm text-red-400'>{errors.title.message}</p>
                )}

                <input
                    onChange={(e) => setAuthorname(e.target.value)}
                    value={authorname}
                    className='rounded-lg p-2'
                    placeholder='Author Name'
                    type='text'
                    {...register('authorname', { required: 'Author name is required' })}
                />
                {errors.authorname?.message && (
                    <p className='text-sm text-red-400'>{errors.authorname.message}</p>
                )}

                <input
                    onChange={(e) => setYearOfPublication(e.target.value)}
                    value={yearOfPublication}
                    className='rounded-lg p-2'
                    placeholder='Year Of Publication (dd/mm/yyyy)'
                    type='date'
                    {...register('yearOfPublication', { required: 'Year of Publication is required' })}
                />
                {errors.yearOfPublication?.message && (
                    <p className='text-sm text-red-400'>{errors.yearOfPublication.message}</p>
                )}

                <input
                    onChange={(e) => setVolume(e.target.value)}
                    value={volume}
                    className='rounded-lg p-2'
                    placeholder='Volume'
                    type='number'
                    {...register('volume', { required: 'Volume is required' })}
                />
                {errors.volume?.message && (
                    <p className='text-sm text-red-400'>{errors.volume.message}</p>
                )}

                <input
                    onChange={(e) => setExtraInformation(e.target.value)}
                    value={extraInformation}
                    className='rounded-lg p-2'
                    placeholder='Extra Information'
                    type='text'
                    {...register('extraInformation')}
                />

                <input
                    onChange={(e) => setResponseEmail(e.target.value)}
                    value={responseEmail}
                    className='rounded-lg p-2'
                    placeholder='Email'
                    type='email'
                    {...register('responseEmail', { required: 'Email is required' })}
                />
                {errors.responseEmail?.message && (
                    <p className='text-sm text-red-400'>{errors.responseEmail.message}</p>
                )}

                <button className='rounded-lg bg-black py-2 text-white' type='submit'>
                    Submit
                </button>
            </form>

            <div className='flex-auto rounded-lg bg-cyan-600 p-8 text-white'>{error}</div>
        </section>
    );
};

export default SubmissionForm;
