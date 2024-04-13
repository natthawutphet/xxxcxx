
import React from 'react'
import { getData } from './data';
import Link from 'next/link';
export default async function page( { params }) {
  const id = params.id
  const data = await getData(id)


  return (
   <>
     <div className='container'>
      <Link href='/vdo' className='btn  mx-3' >ย้อนกลับ</Link>
      <div className="text-center">  
      <div className="card mb-3">

      {data.rows.map(row => (
        <div key={row.id}>
           <h2>{row.title}</h2>
          <iframe
          width='1040'
          height='500'
           className='vdo'
            src={`https://www.youtube.com/embed/${row.youtube}`}
            title={row.title}
            frameBorder="0"
            allow={row.title}
            allowFullScreen
          ></iframe>
          <p>{row.time}</p>


          <h3 className='card-title'>{row.headline}</h3>
          <p className='card-text'>{row.content}</p>
         
         


</div>
       
      ))}
    </div>
    </div></div>
   </>
  )
}
