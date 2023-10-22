'use client'

import React, { useState, useEffect } from 'react';

import Page from '../page';

const { PrismaClient } = require('@prisma/client');

 

const prisma = new PrismaClient();

 

export default function display() {

  const [devOpsData, setDevOpsData] = useState([]);

 

  useEffect ( () => {

    async function fetchData()

    {

      try{

        const fetchedDevOps = await prisma.devOps /// going to prisma model DevOps

        setDevOpsData(fetchedDevOps);

        } catch (error) {

        console.error('Error', error); // if there is an error fetching the Devops then error is notified

        }

        }

        fetchData(); // fetching the data from the database

        

        return () => {

        prisma.$disconnect();

        };

        }, []);

        

        return (

        <div>

        {devOpsData.map(devOps => (

        <div key={devOps.id}>

          <p>Author Name: {devOps.authorname}</p>  /// authorname

          <p>Extra Information: {devOps.extraInformation}</p> //extraInformation

          <p>Title: {devOps.title}</p> /// title

          <p>Volume: {devOps.volume}</p> /// volume

          <p>Year of Publication: {devOps.yearOfPublication}</p> /// publication

        </div>

        ))}

        </div>

        );

        }
