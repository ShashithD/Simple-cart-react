import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "./redux/slices/cartSlice";
//import { useGetAllProductsQuery } from "./redux/slices/productsApi";

const ProductList = ({products, title}) => {
    // const { items: products, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const history = useHistory();

    // const { data, error, isLoading } = useGetAllProductsQuery();
    // console.log("Api", isLoading);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        history.push("/cart");
    };

    return ( 
        <div className="product-list">
            <h2>{title} </h2>
            {products.map((product) => (
                <div className="product-preview" key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description }</p>
                    <p>Available Quantity: {product.qty}</p>
                    <button style={{marginTop: "8px"}} onClick={() => handleAddToCart(product)}>
                        Add To Cart
                    </button>
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;