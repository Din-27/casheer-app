import { openDB } from 'idb'

export default async function loadDatabase() {
    const db = await openDB("store", 1, {
        upgrade(db) {
            db.createObjectStore("products", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });

    return {
        db,
        getProducts: async () => await db.getAll("products"),
        addProduct: async (product) => await db.add("products", product),
        editProduct: async (product) =>
            await db.put("products", product.id, product),
        deleteProduct: async (product) => await db.delete("products", product.id),
    };
}