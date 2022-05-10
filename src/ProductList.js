import { Link } from "react-router-dom";
const ProductList = ({products, title}) => {
    return ( 
        <div className="product-list">
            <h2>{title} </h2>
            {products.map((product) => (
                <div className="product-preview" key={product.id}>
                    <Link to={'/product/' + product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ProductList;