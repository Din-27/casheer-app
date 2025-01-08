import Menu from '../components/Menu/Menu'
import Cart from '../components/Cart/Cart'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux';

export default function Home() {
    const { sideCart } = useSelector((state) => state.cart);

    return (
        <Layout>
            <Menu />
            {sideCart && <Cart />}
        </Layout>
    )
}
