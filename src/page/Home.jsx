import Menu from "../components/Menu/Menu";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useCart } from "../hook/useCart";
import { useDispatch } from "react-redux";
import { setSideCart } from "../redux/cartSlice";
import Navbar from "../components/Navbar/Navbar";
import CardInfo from "../components/Card/CardInfo";
import Table from "../components/Table/Table";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
    const dispatch = useDispatch();
    const { sideCart } = useSelector((state) => state.cart);
    const { addToCart } = useCart();

    const handlerVisibleSideCart = () => {
        dispatch(setSideCart({ sideCart: true }));
    };

    return (
            <Layout>
                <div className="bg-blue-gray-50 h-fit w-full py-6 mx-4 space-y-5">
                    {/* <Navbar /> */}
                    <h1 className="text-5xl font-bold">
                        Hallo, <span className="text-cyan-500">Herdiyana 👋</span>
                    </h1>
                    <div className="space-y-6">
                        <div className="grid grid-cols-4 gap-6">
                            {[1, 1, 1, 1].map((x, y) => (
                                <CardInfo
                                    key={y}
                                    percent={'+20%'}
                                    saldo={'1.500.000'}
                                    title={"Revenue"}
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="icon icon-tabler icons-tabler-filled icon-tabler-coin"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -1 1a3 3 0 1 0 0 6v2a1.024 1.024 0 0 1 -.866 -.398l-.068 -.101a1 1 0 0 0 -1.732 .998a3 3 0 0 0 2.505 1.5h.161a1 1 0 0 0 .883 .994l.117 .007a1 1 0 0 0 1 -1l.176 -.005a3 3 0 0 0 -.176 -5.995v-2c.358 -.012 .671 .14 .866 .398l.068 .101a1 1 0 0 0 1.732 -.998a3 3 0 0 0 -2.505 -1.501h-.161a1 1 0 0 0 -1 -1zm1 7a1 1 0 0 1 0 2v-2zm-2 -4v2a1 1 0 0 1 0 -2z" />
                                        </svg>
                                    }
                                />
                            ))}
                        </div>
                        <Table />
                        <Pagination />
                    </div>
                </div>
            </Layout>
    );
}
