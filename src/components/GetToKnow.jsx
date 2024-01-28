import React from 'react'
import { know } from '../constants'

const GetToKnow = () => {
  return (
    <div>
      <div className="">
        {know.map((about) => (
          <div className="" key={about.name}>
            <p>{about.name}</p>
            <p>{about.description}</p>
            <img src={about.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetToKnow