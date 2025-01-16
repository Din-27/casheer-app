import { useDispatch } from "react-redux";
import { closeModalReceipt, setIsShowModalReceipt, showModalReceipt } from "../../redux/slice/modalSlice";
import { useSelector } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import { clearCash } from "../../redux/slice/cashSlice";
import { clearProducts } from "../../redux/slice/productSlice";

export const useModalReceipt = () => {
    const dispatch = useDispatch();
    const { receiptNo } = useSelector((state) => state.modal);

    return {
        submitReceipt: () => {
            dispatch(showModalReceipt())
        },
        closeModalReceipt: () => {
            dispatch(closeModalReceipt())
        },
        printReceipt: () => {
            const receiptContent = document.getElementById('receipt-content');
            const titleBefore = document.title;
            const printArea = document.getElementById('print-area');

            printArea.innerHTML = receiptContent.innerHTML;
            document.title = receiptNo;

            window.print();
            dispatch(setIsShowModalReceipt({ isShowModalReceipt: false }))

            printArea.innerHTML = '';
            document.title = titleBefore;

            // TODO save sale data to database

            dispatch(clearCart())
            dispatch(clearCash())
            dispatch(clearProducts())

        }
    };
};
