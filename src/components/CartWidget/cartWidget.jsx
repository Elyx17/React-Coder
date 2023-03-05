import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const CartWidget = () => {
    return (
        <>
            <Link className="nav-link" to={'/Cart'}><button className="btn carrito"><FontAwesomeIcon className='carritoIcono' style={{fontSize: "1.5rem"}} icon={faCartShopping}/>
            <small style={{fontSize: "1.1rem", color: "#fff"}}> 1</small>
            </button></Link> 
        </>
    );
}

export default CartWidget;
