import { useSelector } from "react-redux";
import sampleJson from '../../json/sample.json'
import { setProducts, setCategory, setSideProduct, setProduct, setImagePreview } from "../../redux/slice/productSlice";
import { useDispatch } from "react-redux";
import { setFirstTime } from "../../redux/slice/modalSlice";
import _ from 'lodash'
import api from '../service/product.service'

export const useProduct = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    return {
        loadProducts: async () => {
            const products = await api.getProducts()
            const params = new URLSearchParams(window.location.search);
            const item = params.get('category')
            let _products = products
            if (item) {
                const filter = products.filter(x => x.category.toLocaleLowerCase() === item.toLocaleLowerCase())
                if (filter.length > 0) {
                    _products = filter
                }
            }
            dispatch(setProducts({ products: _products }))
            dispatch(setCategory({ category: _.uniqBy(products.map(x => x.category)) }))
        },
        deleteProducts: () => {
            dispatch(setProducts({ products: [] }))
        },
        filteredProducts: (keyword) => {
            const rg = keyword ? new RegExp(keyword, "gi") : null;
            dispatch(setProducts({ products: products.filter((p) => !rg || p.name.match(rg)) }))
        },
        startWithProductData: async () => {
            const result = []
            const data = sampleJson;
            for (let product of data.products) {
                await api.addProduct(product);
                result.push(product)
            }
            Promise.all(result)
                .then(() => { return 'sukses' })
        },
        startBlank: () => {
            dispatch(setFirstTime({ firstTime: false }))
        },
        onClickFilterKlikCategory: async (item) => {
            const products = await api.getProducts()
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

            dispatch(setProducts({
                products: _products
            }))
        },
        onSideProduct: () => {
            dispatch(setProduct({
                action: 'Add',
                product: {
                    image: '',
                    name: '',
                    price: '',
                    option: '',
                    category: '',
                }
            }));
            dispatch(setImagePreview({
                imagePreview: ''
            }));
            dispatch(setSideProduct({
                sideProduct: true
            }));
        },
        onClickProduct: (product) => {
            dispatch(setProduct({
                action: 'Edit',
                product: product
            }));
            dispatch(setImagePreview({
                imagePreview: product.image
            }));
            dispatch(setSideProduct({
                sideProduct: true
            }));
        }
    };
};
