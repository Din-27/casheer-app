import React, { useEffect, useState } from 'react'
import Input from '../../components/Input/Input';

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
        <div className="max-h-[85vh] w-full ml-12 overflow-auto mt-4 px-4 space-y-4 py-4 px-12">
            <label
                htmlFor="dropzone-file"
                className="w-1/4 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50-800 hover:bg-gray-100"
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
            <div className="w-1/2 space-y-6">
                {[1, 1, 1, 1, 1, 1].map((x, y) => (
                    <Input
                        key={y}
                        type="text"
                        placeholder="test"
                        labelName="test"
                    />
                ))}
            </div>
            <button
                className={`w-1/4 mx-auto uppercase text-white rounded-2xl text-lg w-full py-3 focus:outline-none bg-cyan-500 hover:bg-cyan-600`}
            >
                Simpan Perubahan
            </button>
        </div>
    )
}
