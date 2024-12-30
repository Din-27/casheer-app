import Sidebar from '../components/Sidebar/Sidebar'
import Menu from '../components/Menu/Menu'
import Cart from '../components/Cart/Cart'
import SampleData from '../components/Modal/SampleData'
import Receipt from '../components/Modal/Receipt'
import { useSelector } from 'react-redux'

export default function Kasir() {
    const { isShowModalReceipt, firstTime } = useSelector((state) => state.modal);

    return (
        <div className="bg-blue-gray-50">
            <div className="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
                <Sidebar />
                <Menu />
                <Cart />
            </div>
            {Boolean(firstTime) && <SampleData />}
            {isShowModalReceipt && <Receipt />}
            <div id="print-area" className="print-area"></div>
        </div>
    )
}
