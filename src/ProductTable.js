import { Link } from "react-router-dom";

const ProductList = ({products, title}) => {
    return (
        <div className="product-table">
            <h2> {title} </h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {products.map((product) => (
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.description }</td>
                            <td><Link to={'/product/' + product.id}>View</Link></td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
     );
}
 
export default ProductList;