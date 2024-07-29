import React from 'react'

function Course(props) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-4 p-2">
    <figure>
        <img className='w-40 rounded-lg' src={props.src}/>
    </figure>
    <div className="card-body">
        <h2 className="card-title gap-4">{props.course}</h2>
        <p className='h-4 flex-none'>{props.major}</p>
        <p className='h-4 flex-none'>{props.duration}</p>
        <div className="card-actions justify-end items-end h-full">
        <button className="btn btn-primary">Apply</button>
        </div>
    </div>
    </div>
  )
}

export default Course