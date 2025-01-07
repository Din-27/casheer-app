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
            dispatch(setProduct({ products: products }))
            dispatch(setCategory({ category: _.uniqBy(products.map(x => x.category)) }))
        },
        deleteProducts: () => {
            dispatch(setProduct({ products: [] }))
        },
        filteredProducts: (keyword) => {
            const rg = keyword ? new RegExp(keyword, "gi") : null;
            dispatch(setProduct({ products: products.filter((p) => !rg || p.name.match(rg)) }))
        },
        categoryProducts: () => {
            dispatch(setCategory({ category: _.uniqBy(products.map(x => x.category)) }))
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
        filterKlikCategory: async (item) => {
            const db = await loadDatabase()
            const products = await db.getProducts()
            const filter = products.filter(x => x.category.toLocaleLowerCase() === item.toLocaleLowerCase())
            let _products = products
            if (filter.length > 0) {
                _products = filter
            }
            dispatch(setProduct({
                products: _products
            }))
        }
    };
};
