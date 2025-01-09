import Menu from '../components/Menu/Menu'
import Cart from '../components/Cart/Cart'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux';
import { useCart } from '../hook/useCart';
import { useDispatch } from 'react-redux';
import { setSideCart } from '../redux/cartSlice';

export default function Home() {
    const dispatch = useDispatch()
    const { sideCart } = useSelector((state) => state.cart);
    const { addToCart } = useCart();

    const handlerVisibleSideCart = () => {
        dispatch(setSideCart({ sideCart: true }))
    }


    return (
        <Layout>
            <Menu
                onView={sideCart}
                iconSVG={<svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className='h-8 w-8'
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>}
                onClickCard={addToCart}
                onClickSideSearch={handlerVisibleSideCart} />
            {sideCart && <Cart />}
        </Layout>
    )
}
