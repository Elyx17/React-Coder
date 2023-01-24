import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <>
            <button className="btn btn-danger my-2 my-sm-0"><FontAwesomeIcon style={{fontSize: "1.5rem"}} icon={faCartShopping}/>
            <small style={{fontSize: "1.1rem"}}> 1</small>
            </button>
        </>
    );
}

export default CartWidget;
