'use client'
import React from 'react'

const rejectArticle = (articleID: number) => {
    console.log(`Rejecting article with ID: ${articleID}`)
  } 


const acceptArticle = (articleID: number) => {
    
    console.log(`Accepying article with ID: ${articleID}`)
  } 

const listitem = (buttonType: number, id: number) => {
  return (
    <div>
        <button onClick={() => acceptArticle(id)} className="px-2 bg-green-300 rounded-lg m-1">Accept</button>
        <button onClick={() => rejectArticle(id)} className="px-2 bg-red-300 rounded-lg m-1">Reject</button>

    </div>
  )
}

export default listitem