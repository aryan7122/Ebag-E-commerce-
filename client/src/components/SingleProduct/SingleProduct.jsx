import "./SingleProduct.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, Fapinterest, FaCartPlus, FaPinterest } from "react-icons/fa"
import prod from "../../assets/products/earbuds-prod-3.webp"
import RelatedProducts from "./RelatedProducts/RelatedProducts";
const SingleProduct = () => {
    return (
        <div className="single_product_main_contain">
            <div className="layout">
                <div className="single_product_page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <div className="name">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reiciendis!
                        </div>
                        <div className="price">
                            &#8377; 2999
                        </div>
                        
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt aut cum eum earum, eius magni velit, deserunt sunt minus consequatur sed quaerat sint nihil! Molestiae, blanditiis! Excepturi corporis aliquid optio ipsum hic eaque exercitationem laboriosam neque, nam odio facilis repellat fuga atque accusantium molestias odit. Voluptas, sed eos. Cum?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt aut cum eum earum, eius magni velit,  Cum?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt aut cum eum earum, eius magni velit,  Cum?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt aut cum eum earum, eius magni velit,  Cum?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt aut cum eum earum, eius magni velit,  Cum?
                        </div>
                        <div className="cart_buttons">
                            <div className="quantity_button">
                                <span className="count">-</span>
                                <span className="num">6</span>
                                <span className="count">+</span>
                            <button className="Add_to_cart_button">
                                <FaCartPlus className="icon"  size={20} /> 
                                Add To Cart
                            </button>
                            </div>
                        <span className="divider" />
                        <div className="info_item">
                            <div className="text_bold">
                                Category:
                                <span>Headphones</span>
                            </div>
                            <span className="text_bold">
                                Share:
                                <span className="social_icons">
                                    <FaFacebookF className="icon" />
                                    <FaTwitter className="icon" />
                                    <FaInstagram className="icon" />
                                    <FaLinkedinIn className="icon" />
                                    <FaPinterest className="icon"/>
                                </span>
                            </span>
                            </div>
                        </div>

                        {/*  */}
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    )
};

export default SingleProduct;
