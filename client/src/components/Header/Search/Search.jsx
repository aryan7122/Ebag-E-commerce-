import prod from '../../../assets/products/speaker-prod-1.webp'
import { MdClose } from 'react-icons/md'
import "./Search.scss";
const Search = ({ setShowSearch }) => {
    return (
        <>
            <div className="search_modal">
                <div className="form_field">
                    <input type="search" placeholder='Search for Produts' autoFocus  />
                    <MdClose className='close_btn' onClick={()=> setShowSearch(false)}/>
                </div>
                <div className="search_result_content">
                    <div className="search_results">
                        <div className="search_result_item">
                            <div className="img_container">
                                <img src={prod} alt="" />
                            </div>
                            <div className="prod_details">
                                <div className="name">Produt name Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea aut, molestiae amet corporis ullam nam velit quam cum dolorem harum voluptatem, minus explicabo temporibus, quaerat ipsum? Doloribus saepe magni delectus.</div>
                                <div className="desc">Produt desc</div>
                                <div className="price">Produt price</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Search;
