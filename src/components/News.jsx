import React from 'react'
import image from '../../src/season6.jpg'
import image2 from '../../src/evil.png'
import '../App.css'


export const News = () => {
    return (
        <div className='d-flex flex-column bg-success-subtle'>
            <div className='m-4 rounded img-back-three' >

                <h1 className='mt-5 text-center text-warning'>News</h1>
                <h2 className='text-center text-warning'>When Will Rick and Morty Season 7 Release?</h2>
                <div className='d-flex flex-row'>
                    <img className='h-25 w-25 ms-3 ' src={image} alt="" />
                    <p className='d-flex align-items-center fs-5 fw-light ms-3 mt-1 text-white'>The Rick and Morty team recently attended Annecy Festival, at which they and Adult Swim revealed the first details on when fans can expect Rick and Morty Season 7. According to French outlet Premiere, Rick and Morty Season 7 is planning to premiere in September 2023. This tracks with Rick and Morty's new yearly release plan. Speaking with The Wrap in August 2022, showrunner Dan Harmon explained Rick and Morty is on track to "be doing a season a year now" under its new production plan that involves "being so ahead of schedule". With the last season having aired in 2022, fans should expect Season 7 to begin later in 2023, provided development has not come off schedule due to factors such as the firing of star and co-creator Justin Roiland.
                    </p>

                </div>

                <h3 className='text-center text-warning'>Is Evil Morty Returning in Season 7?</h3>
                <div className='d-flex flex-row'>

                    <p className='d-flex alig-items-center text-white fs-5 fw-light ms-3'>Evil Morty has become one of Rick and Morty's most iconic characters, with him serving as the first of the show's two main antagonists, appearing once per season all the way up to the Season 5 finale. But will he be back in Season 7?
                        With Evil Morty now having escaped the Central Finite Curve into an unknown location in the Multiverse - his current whereabouts are unknown. Now that Rick and Morty's villainous focus has shifted, it's unlikely he will be back in Season 7, par for a major surprise. However, his popularity and the mystery surrounding his vanishing into the Multiverse could open the doors to his return.
                    </p>
                    <img className='h-25 w-25 me-3' src={image2} alt="" />

                </div>
            </div>

        </div>
    )
}
