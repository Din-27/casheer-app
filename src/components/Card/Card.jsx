 
import { priceFormat } from "../../lib/utils/moneyFormat";

export default function Card({ item, onClickCard }) {

    return (
        <div
            onClick={() => onClickCard(item)}
            role="button"
            className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
        >
            <img src={item.image} alt={item.name} />
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
