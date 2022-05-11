// import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import useFetch from "./useFetch"
const Home = () => {
    const{data: products , isPending, error} = useFetch('https://127.0.0.1:8000/product/fetch-all')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {products && <ProductList products={products} title="All products!"/>}
        </div>
     );
}
 
export default Home;