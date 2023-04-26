import { MdClose } from 'react-icons/md'
import prod from '../../../assets/products/earbuds-prod-4.webp'
import "./CartItem.scss";
const CartItem = () => {
    return (
        <div className="cart_products">
            <div className="cart_product">
                <div className="img_container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod_details">
                    <span className="name">Produt name</span>
                    <MdClose className='close_btn'/>
                    <div className="quantity_button">
                        <span className="count">-</span>
                        <span className="num">6</span>
                        <span className="count">+</span>
                    </div>
                    <div className="text">
                        <span>3 </span>
                        <span>X</span>
                        <span className='highlight'>&#8377; 5663</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
