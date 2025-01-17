import Layout from "../../components/Layout";
import SettingJson from "../../json/setting.json";
import { useState } from "react";
import Kasir from "./Kasir";
import Pembayaran from "./Pembayaran";
import User from "./User";
import Privasi from "./Privasi";

const SettingSection = ({ name }) => {
    switch (name) {
        case 'kasir':
            return <Kasir />
        case 'pembayaran':
            return <Pembayaran />
        case 'user':
            return <User />
        case 'privasi':
            return <Privasi />
        default:
            return <Kasir />
    }
}

export default function Setting() {
    const [param, setParam] = useState('kasir')

    return (
        <Layout>
            <div className="flex flex-col bg-blue-gray-50 h-full w-full mx-4 my-6">
                <h1 className="text-5xl font-bold border-b-4 pb-6 border-white">
                    Setting
                </h1>

                <div className="flex min-h-full">
                    <div className="max-h-[85vh] w-1/3 flex flex-col overflow-auto mt-4 px-4 space-y-4 py-4">
                        {SettingJson.map((x, y) => (
                            x.status === 'enable' &&
                            <button
                                onClick={() => setParam(x.value)}
                                key={y}
                                className={`${param === x.value ? 'bg-gray-300 rounded-lg' : ''} text-left py-2 px-2 border-b-2 border-white pb-2 hover:bg-gray-300 font-bold hover:rounded-lg`}
                            >
                                {x.name}
                            </button>
                        ))}
                    </div>
                    <div className="w-full">
                        <h2 className='text-3xl border-b-2 pb-2 border-white font-bold mt-8 uppercase'>{param}</h2>
                        <div className="max-h-[85vh] w-full overflow-auto mt-4 space-y-6 py-4 px-12">
                            <SettingSection name={param} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
