import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName]               = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice]             = useState(0);
    const [qty, setQty]                 = useState(0);
    const [image, setImage]             = useState('');
    const [isPending, setIsPending]     = useState(false);
    const history                       = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {name, description, price , qty, image};

        alert(JSON.stringify(product));
       setIsPending(true);

        fetch('https://127.0.0.1:8000/product/create', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify(product)
        }).then(() => {
            console.log('new product added')
            setIsPending(false);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <label >product name</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label >product description</label>
                <textarea 
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label >product price</label>
                <input 
                    type="number" 
                    required
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <label >product quantity</label>
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
                {!isPending && <button>Add product</button>}
                {isPending && <button disabled>Adding product...</button>}
            </form>
        </div>
     );
}
 
export default Create;