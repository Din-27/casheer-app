import Sidebar from '../components/Sidebar/Sidebar'
import Menu from '../components/Menu/Menu'
import Cart from '../components/Cart/Cart'
import SampleData from '../components/Modal/SampleData'
import Receipt from '../components/Modal/Receipt'

export default function Kasir() {
    return (
        <div className="bg-blue-gray-50">
            <div className="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
                <Sidebar />
                <Menu />
                <Cart />
            </div>
            <SampleData />
            <Receipt />
            <div id="print-area" className="print-area"></div>
        </div>
    )
}
