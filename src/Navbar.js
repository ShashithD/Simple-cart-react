import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Simple E Commerce App</h1> 
            <div className="links">    
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <div className="dropdown">
                    <button className="dropbtn">Admin 
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/products">Product list</Link>
                        <Link to="/create">New product</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;