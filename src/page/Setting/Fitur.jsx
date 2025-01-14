import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Fitur() {
    const [color, setColor] = useState(localStorage.getItem('color'))

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem('color', color)
    }, [color])

    return (
        <div className={`min-h-screen w-full ml-12 overflow-auto mt-4 px-4 space-y-4 py-4 px-12`}>
            <input onChange={handleChange} value={color} type="color" />
            <div className={`w-full`}>asdasd</div>
        </div>
    )
}
