import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { beep, clearSound } from "../helper/playsound";
import { addCart, changeCart, clearCart, delCart, setSideCart } from "../redux/cartSlice";
import { clearCash } from "../redux/cashSlice";
import { useCash } from "./useCash";

export const useCart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)
    const { change } = useSelector((state) => state.cash)
    const { updateChange } = useCash()
    return {
        getItemsCount: () => {
            return cart.reduce((count, item) => count + item.qty, 0);
        },
        addToCart: (product) => {
            const index = cart
                .findIndex((p) => p.productId === product?.id || '');
            if (index === -1) {
                dispatch(addCart({
                    carts: {
                        productId: product.id,
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        option: product.option,
                        qty: 1,
                    }
                }));
                dispatch(setSideCart({
                    sideCart: true
                }));
            } else {
                const [cartItem] = cart.filter((i) => i.productId === product.id);
                console.log(cartItem);
                const afterAdd = cartItem.qty + 1;
                dispatch(changeCart({ index, name: 'qty', value: afterAdd }));
            }
            beep();
        },
        addLessQty: ({ item, type }) => {
            const index = cart.findIndex((i) => i.productId === item.productId);
            if (index === -1) {
                return;
            }
            const afterAdd = item.qty + (type === 'add' ? 1 : -1);
            if (afterAdd === 0) {
                dispatch(delCart({ index }))
                clearSound();
            } else {
                dispatch(changeCart({ index, name: 'qty', value: afterAdd }));
                beep();
            }
            updateChange()
        },
        submitable: () => {
            return change >= 0 && cart.length > 0;
        },
        clearCart: () => {
            dispatch(clearCart());
            dispatch(clearCash());
            clearSound()
        },
    }
}