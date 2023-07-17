import React from 'react'
import { BsGenderFemale, BsGenderMale } from "react-icons/bs"
import '../App.css'

export const Card = ({ name, gender, status, image }) => {
    return (
        <div className='d-flex flex-column align-items-center bg-secondary w-75 mx-2 my-2 card-character'>
            <h2 className='text-center'>{name.slice(0, 16)}</h2>
            {gender === "Male" ? <h3><BsGenderMale /></h3> : <h3><BsGenderFemale /></h3>}
            <h3>{status}</h3>
            <img src={image} className='img-fluid rounded w-50 mb-2' alt="" />

        </div>
    )
}
