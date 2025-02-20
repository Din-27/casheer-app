import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";
import SidebarProduk from "../components/Sidebar/SidebarProduk";
import { useProduct } from "../lib/hook/useProduct";

export default function Produk() {
    const { sideProduct, product } = useSelector((state) => state.product);
    const { onClickProduct, onSideProduct } = useProduct();

    const handleAdd = () => onSideProduct();

    return (
        <Layout>
            <Menu
                session='produk'
                title={'Manajemen Produk'}
                onView={true}
                onClickCard={onClickProduct}
                onClickSideSearch={handleAdd}
                iconSVG={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                    </svg>
                }
            />
            {sideProduct && <SidebarProduk product={product} />}
        </Layout>
    );
}
