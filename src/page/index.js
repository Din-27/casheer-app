import Home from "./Home.jsx"
import Produk from "./Produk.jsx"

const pageInitialize = () => {
    return [
        { "path": "/", "index": true, "component": Home },
        { "path": "/produk", "index": false, "component": Produk }
    ]
}

export default pageInitialize