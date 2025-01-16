import indexedDBConnection from "../../lib/config/indexedDB"

const getProducts = async () => {
    const data = (await indexedDBConnection()).getAll('products')
    return data
}

const addProduct = async (product) => {
    (await indexedDBConnection()).add('products', product)
}

const editProduct = async (product, id) => {
    (await indexedDBConnection()).put('products', product, id)
}

const deleteProduct = async (id) => {
    (await indexedDBConnection()).delete('products', id)
}

export default {
    getProducts,
    addProduct,
    editProduct,
    deleteProduct
}