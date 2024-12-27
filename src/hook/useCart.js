import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { beep, clearSound } from "../helper/playsound";
import { clearCart, setCart } from "../redux/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)
    const { change } = useSelector((state) => state.cash)
    return {
        getItemsCount: () => {
            return cart.reduce((count, item) => count + item.qty, 0);
        },
        addToCart: (product) => {
            const index = cart
                .findIndex((p) => p.productId === product?.id || '');
            if (index === -1) {
                dispatch(setCart({
                    productId: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    option: product.option,
                    qty: 1,
                }));
            } else {
                cart[index].qty += 1;
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
                cart.splice(index, 1);
                clearSound();
            } else {
                cart[index].qty = afterAdd;
                beep();
            }
        },
        submitable: () => {
            return change >= 0 && cart.length > 0;
        },
        clearCart: () => {
            dispatch(clearCart());
        },
    }
}