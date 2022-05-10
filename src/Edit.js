import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const [isPendingProduct, setIsPendingProduct] = useState(true);
    const [name, setName]                         = useState('');
    const [description, setDescription]           = useState('');
    const [price, setPrice]                       = useState(0);
    const [qty, setQty]                           = useState(0);
    const [image, setImage]                       = useState('');
    const [isPending, setIsPending]               = useState(false);
    const history                                 = useHistory();

    useEffect(() => {
        fetch('https://127.0.0.1:8000/product/fetch-one/' + id)
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (isPendingProduct) {
                    setName(data.name);
                    setDescription(data.description);
                    setPrice(data.price);
                    setQty(data.qty);
                    setImage(data.image);
                    setIsPendingProduct(false);                      
                }
                
            })
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {name, description, price , qty, image};
        setIsPending(true);

        fetch('https://127.0.0.1:8000/product/update/' + id, {
            method : 'PUT',
            headers:{"content-type": "application/json"},
            body   : JSON.stringify(product)
        }).then(() => {
            setIsPending(false);

            history.push('/');
        })
    }

    return ( 
        <div className="edit">
            <h2>Edit Product</h2>
            {isPendingProduct && <div>Loading...</div>}
            {
                !isPendingProduct && (
                    <form onSubmit={handleSubmit}>
                        <label>product name</label>
                        <input 
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>product description</label>
                        <textarea 
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <label>product price</label>
                        <input 
                            type="number" 
                            required
                            value={price}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                        />
                        <label>product quantity</label>
                        <input 
                            type="number" 
                            required
                            value={qty}
                            onChange={(e) => setQty(parseInt(e.target.value))}
                        />
                        <input 
                            type="hidden" 
                            required
                            value="sample.jpg"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        {!isPending && <button>Save</button>}
                        {isPending && <button disabled>Updating product...</button>}
                    </form>
                )
            }
        </div>
     );
}

export default Edit;
