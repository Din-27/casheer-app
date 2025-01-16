import React from 'react'

export default function Input(props) {
    const { labelName, status, show, message = 'Some success message.' } = props
    return status
        ? <div {...props}>
            <label for={labelName} className={`block mb-2 text-sm font-medium ${status === 'success' ? 'text-green-600' : 'text-red-700'}`}>{labelName}</label>
            <input {...props} id={labelName} className={status === 'success' ? "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"} />
            {show && <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-700'}`}><span className="font-medium">{status ? "Well done!" : "Oh, snapp!"}</span> {message}</p>}
        </div>
        : <div>
            <label for={labelName} className="block mb-2 text-sm font-medium text-black-900 ">{labelName}</label>
            <input {...props} id={labelName} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>

}
