/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { useProduct } from '../../hook/useProduct';
import Card from '../Card/Card';
import { useEffect } from 'react';
import Tabs from '../Tabs/Tabs';
import { setSideCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

export default function Menu() {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const params = new URLSearchParams(window.location.search)
    const { filteredProducts, loadProducts, deleteProducts } = useProduct();
    const { products, keyword } = useSelector((state) => state.product);
    const { firstTime } = useSelector((state) => state.modal);
    const { sideCart } = useSelector((state) => state.cart);

    const onChange = (e) => {
        if (e.target.value.length > 0) filteredProducts(e.target.value)
        else loadProducts(params.get('category'))
    }

    const handlerVisibleSideCart = () => {
        dispatch(setSideCart({ sideCart: true }))
    }

    useEffect(() => {
        if (firstTime) deleteProducts()
        loadProducts(params.get('category'))
    }, [])

    return (
        <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
            <div className="flex px-2 flex-row relative">
                <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <div className='w-full flex items-center space-x-2'>
                    <input
                        type="text"
                        className="bg-white rounded-3xl shadow text-lg w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
                        placeholder="Cari menu ..."
                        onChange={onChange}
                    />
                    {!sideCart && pathname === '/home' && <button onClick={handlerVisibleSideCart} className='shadow p-4 rounded-3xl bg-white'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className='h-8 w-8'
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </button>}
                </div>
            </div>
            {products.length > 0 && <Tabs />}
            <div className="h-full overflow-hidden mt-2">
                <div className="h-full overflow-y-auto px-2">
                    {products?.length === 0 &&
                        <div className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div className="w-full text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 inline-block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                    />
                                </svg>
                                <p className="text-xl">
                                    KAMU TIDAK MEMILIKI
                                    <br />
                                    BARANG UNTUK DITUNJUKAN
                                </p>
                            </div>
                        </div>}
                    {products?.length === 0 && keyword.length > 0 &&
                        <div className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div className="w-full text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-24 w-24 inline-block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <p className="text-xl">
                                    HASIL PENCARIAN KOSONG
                                    <br />
                                    <span className="font-semibold"></span>
                                </p>
                            </div>
                        </div>}
                    {products?.length > 0 && <div
                        className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 pb-3"
                    >
                        {products && products.map((x, y) =>
                            <div key={y}>
                                <Card item={x} />
                            </div>
                        )}
                    </div>}
                </div>
            </div>
        </div>
    )
}
