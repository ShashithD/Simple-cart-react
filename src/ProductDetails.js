import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams();
    const {
        data: product,
        error,
        isPending
    } = useFetch('https://127.0.0.1:8000/product/fetch-one/' + id);

    const history = useHistory();

    const handleClick = () => {
        fetch('https://127.0.0.1:8000/product/delete/' + product.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/products');
        })
    }
    return ( 
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <article>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.qty}</p>
                    <button onClick={handleClick}>Delete</button>
                    <Link to={'/edit/' + product.id}>
                        Edit
                    </Link>
                </article>
            )}
        </div>
     );
}
 
export default ProductDetails;