import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import Table from "../../components/Table/Table";

export default function Kasir() {
    const [preview, setPreview] = useState("");
    const [selectedFile, setSelectedFile] = useState("");

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreview(objectUrl);
            // free memory when ever this component is unmounted
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [selectedFile]);

    const onSelectFile = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div className="w-72 space-y-6">
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50-800 hover:bg-gray-100"
            >
                {preview && (
                    <img className="w-44 h-44 m-auto" src={preview} alt="image" />
                )}
                <input
                    id="dropzone-file"
                    type="file"
                    onChange={onSelectFile}
                    className="hidden"
                />
                <h3 className="font-bold text-gray-500">Ganti Gambar Logo</h3>
            </label>
            <div>
                <label for='header' className={`block text-lg font-bold`}>{'Header'}</label>
                <input id='header' type="text" placeholder="Cafe John" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button
                className={`text-center uppercase text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-cyan-500 hover:bg-cyan-600`}
            >
                Simpan Perubahan
            </button>
        </div>
    );
}
