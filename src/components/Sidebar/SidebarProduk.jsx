import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setImagePreview, setSideProduct } from "../../redux/productSlice";
import Input from "../Input/Input";

export default function SidebarProduk({ product }) {
    const dispatch = useDispatch()
    const { imagePreview, productAction } = useSelector((state) => state.product)
    const [selectedFile, setSelectedFile] = useState()

    const handlerVisibleSideProduct = () => {
        dispatch(setSideProduct({ sideProduct: false }))
        dispatch(setSideProduct({ sideProduct: false }))
    }

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            dispatch(setImagePreview({
                imagePreview: product.image
            }));
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        dispatch(setImagePreview({
            imagePreview: objectUrl
        }));
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(product.image.replace('/img/', ''))
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="w-5/12 flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
            <div className="bg-white rounded-3xl flex flex-col h-full shadow">
                <button
                    onClick={handlerVisibleSideProduct}
                    className="m-4 w-9 h-9 rounded-full border-2 text-gray-400 hover:text-gray-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex-1 w-full px-4 overflow-auto space-y-4 py-4">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50-800 hover:bg-gray-100">
                        {imagePreview && <img className="w-44 h-44 m-auto" src={imagePreview} alt="image" />}
                        <input id="dropzone-file" type="file" onChange={onSelectFile} className="hidden" />
                    </label>
                    {Object.keys(product).map((x, y) => {
                        if (x !== 'id' && x !== 'image')
                            return <Input key={y} type="text" placeholder={x} labelName={x} value={product[x]} />
                    }
                    )}
                    <button
                        className={`uppercase text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-cyan-500 hover:bg-cyan-600`}
                    >
                        {productAction}
                    </button>
                    {productAction !== 'Add' && <button
                        className={`uppercase text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-red-500 hover:bg-red-600`}
                    >
                        Delete
                    </button>}
                </div>
            </div>
        </div >
    );
}
