import { Link, NavLink } from 'react-router-dom';

// DAta Files
import RecommendedData from '../data/RecommendedData.jsx'
import TrendData from '../data/TrendingData.jsx';
import SaleData from '../data/SaleProducts.jsx';

// React Icons
import { BiSolidOffer } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import Countdown from './Countdown.jsx';


function HomeProducts() {

    // Decalring VAriable to map the value from the DAta file
    const Recommend = RecommendedData;
    const Trend = TrendData;
    const Sale = SaleData;


    return(
        <div className='container'>
            <div className="d-flex gap-2 justify-content-center mt-5">
                <i className="h2"><MdRecommend/></i>
                <h3 className="h3">Recommended for you </h3>
            </div>
            <div className="row">
                {Recommend.map((item) => {
                    return (
                        <>
                        <div key={item.id} className="card products col-md-2 col-sm-4 col-5 bg-white mx-1 mb-4">
                        <NavLink id="RouterNavLink" className="product-link" to={`/products/${item.id}`}>
                            <img className="card-img-top product-img" src={item.image} alt="Product" />
                            <div className="card-body main-card">
                            <h5 className="card-title ml-2 h6"><b>{item.name}</b></h5>
                            </div>
                            <div className="body mb-3 d-flex justify-between">
                            <p className="card-text ml-2 text-warning">
                                <b>${item.price}</b>
                            </p>
                            <Link className="card-text mr-4 text-gray-500"><b>{item.brand}</b></Link>
                            </div>

                        </NavLink>
                        </div>
                        </>
                    )
                })}

            </div>
            <div className="d-flex gap-2 justify-content-center mt-5">
                <i className="h2"><FaFire/></i>
                <h3 className="h3">Trending Products</h3>
            </div>
            <div className="row">
            {Trend.map((item) => {
                return (
                    <>
                        <div key={item.id} className="card products col-md-2 col-sm-4 col-5 bg-white mx-1 mb-4">
                        <NavLink id="RouterNavLink" className="product-link" to={`/products/${item.id}`}>
                            <img className="card-img-top product-img" src={item.image} alt="Product" />
                            <div className="card-body main-card">
                            <h5 className="card-title ml-2 h6"><b>{item.name}</b></h5>
                            </div>
                            <div className="body mb-3 d-flex justify-between">
                            <p className="card-text ml-2 text-warning">
                                <b>${item.price}</b>
                            </p>
                            <Link className="card-text mr-4 text-gray-500"><b>{item.brand}</b></Link>
                            </div>

                        </NavLink>
                        </div>
                        </>
                    )
                })}
            </div>
                <Countdown/>
            <div className="d-flex gap-2 justify-content-center mt-5">
                <i className="h2"><BiSolidOffer/></i>
                <h3 className="h3">On Sale Products</h3>
            </div>
            <div className="row">
            {Sale.map((item) => {
                    return (
                        <>
                        <div key={item.id} className="card products col-md-2 col-sm-4 col-5 bg-white mx-1 mb-4">
                        <NavLink id="RouterNavLink" className="product-link" to={`/products/${item.id}`}>
                            <img className="card-img-top product-img" src={item.image} alt="Product" />
                            <div className="card-body main-card">
                            <h5 className="card-title ml-2 h6"><b>{item.name}</b></h5>
                            </div>
                            <div className="body mb-3 d-flex justify-between">
                            <p className="card-text ml-2">
                                <b className='text-warning'>${item.price} </b>
                            </p>
                            <b className='text-secondary mr-2'>$ <del>{item.delPrice}</del></b>
                            </div>

                        </NavLink>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeProducts
