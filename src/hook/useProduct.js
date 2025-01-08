import { useSelector } from "react-redux";
import loadDatabase from '../helper/indexDB';
import sampleJson from '../json/sample.json'
import { setProduct, setCategory } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { setFirstTime } from "../redux/modalSlice";
import _ from 'lodash'

export const useProduct = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    return {
        loadProducts: async () => {
            const db = await loadDatabase()
            const products = await db.getProducts()
            const params = new URLSearchParams(window.location.search);
            const item = params.get('category')
            let _products = products
            if (item) {
                const filter = products.filter(x => x.category.toLocaleLowerCase() === item.toLocaleLowerCase())
                if (filter.length > 0) {
                    _products = filter
                }
            }
            dispatch(setProduct({ products: _products }))
            dispatch(setCategory({ category: _.uniqBy(products.map(x => x.category)) }))
        },
        deleteProducts: () => {
            dispatch(setProduct({ products: [] }))
        },
        filteredProducts: (keyword) => {
            const rg = keyword ? new RegExp(keyword, "gi") : null;
            dispatch(setProduct({ products: products.filter((p) => !rg || p.name.match(rg)) }))
        },
        startWithProductData: async () => {
            const result = []
            const db = await loadDatabase()
            const data = sampleJson;
            for (let product of data.products) {
                await db.addProduct(product);
                result.push(product)
            }
            Promise.all(result)
                .then(() => { return 'sukses' })
        },
        startBlank: () => {
            dispatch(setFirstTime({ firstTime: false }))
        },
        onClickFilterKlikCategory: async (item) => {
            const db = await loadDatabase()
            const products = await db.getProducts()
            const params = new URL(window.location.href);
            const filter = products.filter(x => x.category.toLocaleLowerCase() === item.toLocaleLowerCase())
            let _products = products
            if (filter.length > 0) {
                _products = filter
            }
            // Set new query parameters
            if (item !== 'All') {
                params.searchParams.set("category", item);
                window.history.pushState({}, "", `?category=${item}`);
            } else {
                params.searchParams.delete("category");
                window.history.pushState({}, "", params);
            }

            dispatch(setProduct({
                products: _products
            }))
        }
    };
};
