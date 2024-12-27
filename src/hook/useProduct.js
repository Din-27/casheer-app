import { useSelector } from "react-redux";
import loadDatabase from '../helper/indexDB';
import sampleJson from '../json/sample.json'
import { setProduct } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { setFirstTime } from "../redux/modalSlice";

export const useProduct = () => {
    const dispatch = useDispatch();
    const { products, keyword } = useSelector((state) => state.product);

    return {
        loadProducts: async () => {
            const db = await loadDatabase()
            dispatch(setProduct({ products: await db.getProducts() }))
        },
        filteredProducts: () => {
            const rg = keyword ? new RegExp(keyword, "gi") : null;
            dispatch(setProduct({ products: products.filter((p) => !rg || p.name.match(rg)) }))
        },
        startWithProductData: async () => {
            const db = await loadDatabase()
            const data = sampleJson;
            for (let product of data.products) {
                await db.addProduct(product);
            }
            dispatch(setFirstTime({ firstTime: false }))
        },
        startBlank: () => {
            dispatch(setFirstTime({ firstTime: false }))
        }
    };
};
