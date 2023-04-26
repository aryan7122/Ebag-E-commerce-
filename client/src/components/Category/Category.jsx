import "./Category.scss";
import Products from "../Products/Products";
const Category = () => {
    return (
        <div className="category_main_content">
            <div className="layout">
                <div className="category_title">
                    Category Title
                    <Products innerPage={true} />
                </div>
            </div>
        </div>
    )
};

export default Category;