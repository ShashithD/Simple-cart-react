import ProductTable from "./ProductTable";
import useFetch from "./useFetch"
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "./redux/slices/productsSlice";
import { useEffect } from "react";


const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(productsFetch()) 
    }, [])

    console.log(products.items);
    return ( 
        <div className="home">
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Loading...</div>} */}
            {products && <ProductTable products={products} title="All products!"/>}
        </div>
     );
}
 
export default Home;