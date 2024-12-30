import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { beep } from "../helper/playsound";
import { setCash, setChange } from "../redux/cashSlice";

export const useCash = () => {
    const dispatch = useDispatch();
    const { cash } = useSelector((state) => state.cash);
    const { cart } = useSelector((state) => state.cart);
    const totalPrice = cart.reduce(
        (total, item) => total + item.qty * item.price,
        0
    )
    return {
        addCash: (amount) => {
            const cashes = (cash || 0) + amount
            dispatch(setCash({ cash: cashes }));
            dispatch(setChange({
                change: cashes - totalPrice
            }));
            beep();
        },
        updateCash: (event) => {
            const value = event.target.value
            dispatch(setCash({
                cash: Number(value.replace(/[^0-9]+/g, "")),
            }));
            dispatch(setChange({
                change: Number(value.replace(/[^0-9]+/g, "")) - totalPrice,
            }));
        },
        updateChange: () => {
            dispatch(setChange({
                change: cash - totalPrice,
            }));
        }
    };
};
