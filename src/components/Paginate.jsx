import React, { useState } from 'react'
import { FaAngleRight, FaAngleLeft, FaSquareCaretLeft, FaSquareCaretRight } from "react-icons/fa6"
export const Paginate = ({ page, setPage, max }) => {
    const [input, setInput] = useState(1)
    function increment() {
        if (input >= max) return
        setInput(input + 1)
        setPage(page + 1)
    }
    function decrement() {
        if (input <= 1) return
        setInput(input - 1)
        setPage(page - 1)
    }

    return (
        <div className='d-flex flex-row mt-4'>
            <button className='bg-secondary text-white' disabled={input <= 1} onClick={decrement}><FaAngleLeft /></button>
            <label>{input} of {max} </label>
            <button className='bg-secondary text-white' disabled={input >= 5} onClick={increment}><FaAngleRight /></button>

        </div>
    )
}
