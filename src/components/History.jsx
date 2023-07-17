import React from 'react'
import image from '../../src/rickandmortymain3.jpeg'
import image2 from '../../src/rickandmortymain2.jpeg'
import image3 from '../../src/The_Smith_Family.jpg'
import '../App.css'

export const History = () => {
    return (
        <div className='bg-primary d-flex flex-column'>



            <div className='img-back me-4 ms-4 mb-4 mt-4 rounded'>
                <h2 className='text-center text-white fs-5'>What Is Rick And Morty?</h2>
                <div className='d-flex flex-row'>
                    <img className='img-fluid w-25 h-100 ms-3 mt-2' src={image} alt="rick and morty" />
                    <p className='d-flex align-items-center text-white fs-5 fw-light ms-3 mt-1'>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and a misanthropic grandfather dragging his grandson into hijinks.</p>
                </div>

                <div className='d-flex flex-row'>
                    <p className='d-flex alig-items-center text-white fs-5 fw-light ms-3'>Rick is an eccentric and alcoholic, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family.</p>
                    <img src={image3} className='img-fluid me-3 w-25 h-25' alt="rick and morty" />
                </div>
            </div>
        </div>
    )
}
