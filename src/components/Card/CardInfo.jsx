import React from 'react'

export default function CardInfo({ icon, title, saldo, percent }) {
    return (
        <div
            className="p-4 space-y-6 select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
        >
            <div className='flex items-center'>
                <div className='w-16 text-yellow-500'>
                    {icon}
                </div>
                <h3 className='text-3xl font-bold'>{title}</h3>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <h4 className='text-2xl font-bold'>{saldo}</h4>
                    <p>Last Month</p>
                </div>
                <p className='text-green-500 font-bold'>{percent}</p>
            </div>
        </div>
    )
}
