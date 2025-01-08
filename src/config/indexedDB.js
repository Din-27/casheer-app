import { openDB } from 'idb'

export default async function indexedDBConnection() {
    const db = await openDB("store", 1, {
        upgrade(db) {
            db.createObjectStore("products", {
                keyPath: "id",
                autoIncrement: true,
            });
        },
    });

    return db
}