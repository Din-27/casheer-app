import { useState } from "react";

export default function Table({ data, tableOnly = false }) {
    const [drop, setDrop] = useState(false);
    const onShowDrop = () => setDrop((prev) => (prev ? false : true));

    return (
        <div className="relative shadow-md sm:rounded-lg bg-white p-6">
            {!tableOnly && <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">
                        Revenue
                    </h1>
                    <div>
                        <button
                            onClick={onShowDrop}
                            id="dropdownRadioButton"
                            data-dropdown-toggle="dropdownRadio"
                            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 "
                            type="button"
                        >
                            <svg
                                className="w-3 h-3 text-gray-500  me-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            Last 30 days
                            <svg
                                className="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        {drop && (
                            <div
                                id="dropdownRadio"
                                className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-xl  "
                                data-popper-reference-hidden=""
                                data-popper-escaped=""
                                data-popper-placement="top"
                            >
                                <ul
                                    className="p-3 space-y-1 text-sm text-gray-700 "
                                    aria-labelledby="dropdownRadioButton"
                                >
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                            <input
                                                id="filter-radio-example-1"
                                                type="radio"
                                                value=""
                                                name="filter-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                            />
                                            <label
                                                htmlFor="filter-radio-example-1"
                                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded "
                                            >
                                                Last day
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                            <input
                                                checked=""
                                                id="filter-radio-example-2"
                                                type="radio"
                                                value=""
                                                name="filter-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                            />
                                            <label
                                                htmlFor="filter-radio-example-2"
                                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded "
                                            >
                                                Last 7 days
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                            <input
                                                id="filter-radio-example-3"
                                                type="radio"
                                                value=""
                                                name="filter-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                            />
                                            <label
                                                htmlFor="filter-radio-example-3"
                                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded "
                                            >
                                                Last 30 days
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                            <input
                                                id="filter-radio-example-4"
                                                type="radio"
                                                value=""
                                                name="filter-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                            />
                                            <label
                                                htmlFor="filter-radio-example-4"
                                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded "
                                            >
                                                Last month
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                            <input
                                                id="filter-radio-example-5"
                                                type="radio"
                                                value=""
                                                name="filter-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2  "
                                            />
                                            <label
                                                htmlFor="filter-radio-example-5"
                                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded "
                                            >
                                                Last year
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 "
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500    -500 -500"
                        placeholder="Search for items"
                    />
                </div>
            </div>}
            <div className="static">
                <table onClick={() => setDrop(false)} className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2  "
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            {data && Object.keys(data[0]).map((x, y) =>
                                <th key={y} scope="col" className="px-6 py-3">
                                    {x}
                                </th>
                            )}
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((x, y) =>
                            <tr key={y} className="h-1/2 overflow-auto bg-white border-b hover:bg-gray-50">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2  "
                                        />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                {Object.keys(data[0]).map((header, y) =>
                                    <th
                                        key={y}
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                    >
                                        {x[header]}
                                    </th>
                                )}
                                <td className="px-6 py-4 flex justify-evenly">
                                    <a href="#" className="font-medium text-blue-600  hover:underline">
                                        Edit
                                    </a>
                                    <a href="#" className="font-medium text-red-600  hover:underline">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
