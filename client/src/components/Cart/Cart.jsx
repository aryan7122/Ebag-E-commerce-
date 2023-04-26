import {MdClose} from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import CartItem from './CartItem/CartItem'
import "./Cart.scss";
const Cart = ({setShowCart}) => {
    return (
        <div className="cart_Panel">
            <div className="opac_layer">
                <div className="cart_content">
                    <div className="cart_header">
                        <span className="heading">
                            Shopping Cart
                        </span>
                        <span className='close_btn' onClick={() => setShowCart(false)}>
                            <MdClose />
                            <span className="text">close</span>
                        </span>
                    </div>
                {/* <div className="emty_cart">
                    <BsCartX />
                    <span>No Products in the cart.</span>
                    <button className='return_cta'>Add Cart</button>
                </div> */}
                    
                    <>
                        <CartItem />
                        <div className="cart_footer">
                            <div className="subtotal">
                                <span className="text">
                                    Subtotal:
                                </span>
                                <span className="text total">&#8377; 4319</span>
                            </div>
                            <div className="button">
                                <button className='chekout_cta'>Checkout</button>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
};

export default Cart;
