import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { beep } from "../helper/playsound";
import { setCash, setChange } from "../redux/cashSlice";
import { totalPrice } from "../redux/cartSlice";

export const useCash = () => {
    const dispatch = useDispatch();
    const { cash } = useSelector((state) => state.cash);
    return {
        addCash: (amount) => {
            dispatch(setCash((prev) => (
                { ...prev, cash: (cash || 0) + amount })));
            dispatch(setChange({ totalPrice }));
            beep();
        },
        updateCash: (value) => {
            dispatch(
                setCash((prev) => ({
                    ...prev,
                    cash: Number(value.replace(/[^0-9]+/g, "")),
                }))
            );
        },
        updateChange: () => {
            dispatch(
                setChange((prev) => ({
                    ...prev,
                    change: Number(cash) - dispatch(totalPrice()),
                }))
            );
        },
    };
};
