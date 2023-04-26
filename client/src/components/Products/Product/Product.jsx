import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp'
const Product = () => {
    return (
        <div className="product_card">
            <div className="thummail">
                <img src={prod} alt="" />
            </div>
            <div className="product_details">
                <span className="name">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit dolore nostrum doloremque! Perspiciatis beatae numquam rerum asperiores labore voluptate doloremque omnis quidem, distinctio excepturi repudiandae eaque praesentium quaerat quas.</span>
                <div className="rb">
                <span className="price">&#8377; 999</span>
                <button >Add </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
