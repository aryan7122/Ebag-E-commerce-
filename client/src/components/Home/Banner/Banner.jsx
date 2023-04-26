import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png';
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus dis
                        parturient posuere ac a quam a eleifend
                        montes parturient posuere cuae tempor
                    </p>
                    <div className="ctac">
                        <div className="Banner-cta" >Read More</div>
                        <div className="Banner-cta v2" >Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>)
};

export default Banner;
