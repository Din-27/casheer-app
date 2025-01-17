import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar'
import SampleData from '../Modal/SampleData';
import Receipt from '../Modal/Receipt';

 
export default function Wrapper({ children }) {
    const path = window.location.pathname
    const { isShowModalReceipt, firstTime } = useSelector((state) => state.modal);

    return (
        <>
            <div className={`${path.includes('setting') ? 'min-h-screen' : 'h-screen'} hide-print flex antialiased text-blue-gray-800`}>
                <Sidebar />
                {children}
            </div>
            {Boolean(firstTime) && <SampleData />}
            {isShowModalReceipt && <Receipt />}
            <div id="print-area" className="print-area"></div>
        </>
    )
}
