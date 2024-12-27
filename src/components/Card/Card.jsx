/* eslint-disable react/prop-types */
import { priceFormat } from "../../helper/moneyFormat";
import { useCart } from "../../hook/useCart";

export default function Card({ item }) {
    const { addToCart } = useCart();

    return (
        <div
            onClick={() => addToCart(item)}
            role="button"
            className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
        >
            <img src='' alt={item.name} />
            <div className="flex pb-3 px-3 text-sm -mt-3">
                <p
                    className="flex-grow truncate mr-1"
                >{item.name}</p>
                <p
                    className="nowrap font-semibold"
                >
                    {priceFormat(item.price)}
                </p>
            </div>
        </div>
    )
}
