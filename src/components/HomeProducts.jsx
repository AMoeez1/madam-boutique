import { Link, NavLink } from "react-router-dom";

// DAta Files
import RecommendedData from "../data/RecommendedData.jsx";
import TrendData from "../data/TrendingData.jsx";
import SaleData from "../data/SaleProducts.jsx";

// React Icons
import { BiSolidOffer } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import Countdown from "./Countdown.jsx";

function HomeProducts() {
  // Decalring VAriable to map the value from the DAta file
  const Recommend = RecommendedData;
  const Trend = TrendData;
  const Sale = SaleData;

  return (
    <div className="container">
      <div className="mt-5">
        <div className="heading d-flex gap-2 justify-content-center  mb-3">
          <i className="h2">
            <MdRecommend />
          </i>
          <h3 className="h3">Recommended for you </h3>
        </div>
        <div className="row justify-center">
          {Recommend.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="heading d-flex gap-2 justify-content-center  mb-3">
          <i className="h2">
            <FaFire />
          </i>
          <h3 className="h3">Trending Products</h3>
        </div>
        <div className="row justify-center">
          {Trend.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
      <Countdown />
      <div className="mt-5">
        <div className="heading d-flex gap-2 justify-content-center  mb-3">
          <i className="h2">
            <BiSolidOffer />
          </i>
          <h3 className="h3">On Sale Products</h3>
        </div>
        <div className="row justify-center">
          {Sale.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;

const ProductItem = ({ product }) => {
  return (
    <div className="card products col-md-2 col-sm-4 col-5 bg-white mx-1 mb-4">
      <NavLink
        id="RouterNavLink"
        className="product-link"
        to={`/products/${product.id}`}
      >
        <img
          className="card-img-top product-img"
          src={product.image}
          alt="Product"
        />
      </NavLink>
      <div className="card-body main-card">
        <NavLink to={`/products/${product.id}`}>
          <h5 className="card-title ml-2 h6 font-normal">
           {product.name}
          </h5>
        </NavLink>
      </div>
      <div className="body mb-3 d-flex justify-between">
        <p className="text ml-2 text-warning">
        ${product.price}
        </p>
        <Link className="card-text mr-4 text-gray-500">
          {product.brand}
        </Link>
      </div>
    </div>
  );
};
