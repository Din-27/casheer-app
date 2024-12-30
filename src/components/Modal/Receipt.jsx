import { useSelector } from 'react-redux';
import { useModalReceipt } from '../../hook/useModalReceipt';
import { priceFormat } from '../../helper/moneyFormat';
import { useCash } from '../../hook/useCash';

export default function Receipt() {
    const { getTotalPrice } = useCash();
    const { cash, change } = useSelector((state) => state.cash);
    const { cart } = useSelector((state) => state.cart);
    const { receiptDate, receiptNo } = useSelector((state) => state.modal);
    const { closeModalReceipt, printReceipt } = useModalReceipt();

    return (
        <div
            onClick={closeModalReceipt}
            className="fixed w-full h-screen left-0 top-0 z-10 flex flex-wrap justify-center content-center p-24"
        >
            <div
                className="fixed glass w-full h-screen left-0 top-0 z-0"
            ></div>
            <div
                className="w-96 rounded-3xl bg-white shadow-xl overflow-hidden z-10"
            >
                <div id="receipt-content" className="text-left w-full text-sm p-6 overflow-auto">
                    <div className="text-center">
                        <img src='/img/receipt-logo.png' alt="Tailwind POS" className="mb-3 w-8 h-8 inline-block" />
                        <h2 className="text-xl font-semibold">TAILWIND POS</h2>
                        <p>CABANG KONOHA SELATAN</p>
                    </div>
                    <div className="flex mt-4 text-xs">
                        <div className="flex-grow">No: <span>{receiptNo}</span></div>
                        <div>{receiptDate}</div>
                    </div>
                    <hr className="my-2" />
                    <div>
                        <table className="w-full text-xs">
                            <thead>
                                <tr>
                                    <th className="py-1 w-1/12 text-center">#</th>
                                    <th className="py-1 text-left">Item</th>
                                    <th className="py-1 w-2/12 text-center">Qty</th>
                                    <th className="py-1 w-3/12 text-right">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((x, y) =>
                                    <tr key={y}>
                                        <td className="py-2 text-center">{y + 1}</td>
                                        <td className="py-2 text-left">
                                            <span>{x.name}</span>
                                            <br />
                                            <small>{priceFormat(x.price)}</small>
                                        </td>
                                        <td className="py-2 text-center">{x.qty}</td>
                                        <td className="py-2 text-right">{priceFormat(x.qty * x.price)}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <hr className="my-2" />
                    <div>
                        <div className="flex font-semibold">
                            <div className="flex-grow">TOTAL</div>
                            <div>{priceFormat(getTotalPrice())}</div>
                        </div>
                        <div className="flex text-xs font-semibold">
                            <div className="flex-grow">PAY AMOUNT</div>
                            <div>{priceFormat(cash)}</div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex text-xs font-semibold">
                            <div className="flex-grow">CHANGE</div>
                            <div>{priceFormat(change)}</div>
                        </div>
                    </div>
                </div>
                <div className="p-4 w-full">
                    <button onClick={printReceipt} className="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none">PROCEED</button>
                </div>
            </div>
        </div>
    )
}
