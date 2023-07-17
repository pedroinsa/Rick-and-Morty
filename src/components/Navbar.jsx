import React from 'react'
import image from '../../src/rickandmorty.jpeg'
import '../App.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black w-100 sticky-top ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className='w-50 h-50' src={image} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" aria-current="page" href="#history">History</a>
                        <a className="nav-link text-white" href="#characters">Characters</a>
                        <a className="nav-link text-white" href="#news">News</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
