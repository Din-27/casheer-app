import React from "react";
import Layout from "../../components/Layout";
import SettingJson from "../../json/setting.json";
import { useState } from "react";
import Kasir from "./Kasir";
import Fitur from "./Fitur";

const SettingSection = ({ name }) => {
    switch (name) {
        case 'kasir':
            return <Kasir />
        case 'fitur':
            return <Fitur />
        default:
            return <Kasir />
    }
}

export default function Setting() {
    const [param, setParam] = useState('')
    return (
        <Layout>
            <div className="flex flex-col bg-blue-gray-50 h-full w-full py-6 mx-4">
                <h1 className="text-5xl font-bold border-b-4 pb-6 border-white">
                    Setting
                </h1>

                <div className="flex min-h-fit">
                    <div className="max-h-[85vh] lg:w-1/4 flex flex-col overflow-auto mt-4 px-4 space-y-4 py-4">
                        {SettingJson.map((x, y) => (
                            x.status === 'enable' && <button
                                onClick={() => setParam(x.value)}
                                key={y}
                                className="text-left py-2 px-6 border-b-2 border-white pb-2 hover:bg-gray-300 font-bold hover:rounded-lg"
                            >
                                {x.name}
                            </button>
                        ))}
                    </div>
                    <SettingSection name={param} />
                </div>
            </div>
        </Layout>
    );
}
