import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar'
import SampleData from '../Modal/SampleData';
import Receipt from '../Modal/Receipt';

// eslint-disable-next-line react/prop-types
export default function Wrapper({ children }) {
    const { isShowModalReceipt, firstTime } = useSelector((state) => state.modal);

    return (
        <>
            <div className="min-h-screen hide-print flex antialiased text-blue-gray-800">
                <Sidebar />
                {children}
            </div>
            {Boolean(firstTime) && <SampleData />}
            {isShowModalReceipt && <Receipt />}
            <div id="print-area" className="print-area"></div>
        </>
    )
}
