'use client'

import React from 'react'
import { getData } from './data'
import Link from 'next/link';

export default async function Page() {
  const data = await getData()
 

  return (
    <>
     <div className="container">

      <Link href='/' className="btn btn-info h3" ><b>Home</b></Link>
     <div className="row row-cols-1 row-cols-md-2 g-3">
     {data.map(ads => (
      <div key={ads.id}>
         <div className="col">
    <div className="card">
      {ads.title}
      <div className="card-body">

      <iframe 
                className="vdo"
              width='100%'
              height={280}
            size='cover'
            src={`https://www.youtube.com/embed/${ads.youtube}`}
            title={ads.title}
            frameBorder="0"
            allow={ads.title}
            allowFullScreen
          ></iframe>
          <br/>
         <a href={`/vdo/${ads.id}`}>{ads.headline}</a>
      
     
     
 
      
      {ads.time}


      </div>
      </div>
      </div>
      </div>
     ))}



     </div>
     </div>

    </>
  )
}
