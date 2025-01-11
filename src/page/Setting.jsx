import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { useEffect } from "react";
import Input from "../components/Input/Input";

export default function Setting() {
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
        <Layout>
            <div className="flex flex-col bg-blue-gray-50 h-full w-full py-6 mx-4">
                <h1 className="text-5xl font-bold border-b-4 pb-6 border-white">
                    Setting
                </h1>

                <div className="flex h-4/5">
                    <div className="h-full lg:w-1/4 flex flex-col overflow-auto mt-4 px-4 space-y-4 py-4">
                        {[
                            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                            1, 1, 1, 11, 1, 1, 1, 1, 11, 1,
                        ].map((x, y) => (
                            <a className='py-2 px-6 border rounded-lg bg-gray-300 hover:bg-white' href="">Test</a>
                        ))}
                    </div>
                    <div className="h-full w-full ml-12 overflow-auto mt-4 px-4 space-y-4 py-4 px-12">
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
                </div>
            </div>
        </Layout>
    );
}
