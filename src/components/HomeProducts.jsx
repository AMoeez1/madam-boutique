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
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { clsx } from "clsx";

function HomeProducts() {
  const Recommend = RecommendedData;
  const Trend = TrendData;
  const Sale = SaleData;

  return (
    <div className="container my-5">
      <div className="mt-5">
        <div className="row justify-center bg-white p-3">
          <div className="col-12">
            <div className="heading d-flex gap-2 justify-content-center my-3">
              <MdRecommend className="text-4xl" />
              <h3 className="h3">Recommended for you </h3>
            </div>
          </div>
          {Recommend.map((item) => (
            <ProductItem key={item.id} product={item} md={3} />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="row justify-center bg-white p-3">
          <div className="col-12">
            <div className="heading d-flex gap-2 justify-content-center my-3">
              <FaFire className="text-4xl" />
              <h3 className="h3">Trending Products</h3>
            </div>
          </div>
          {Trend.map((item) => (
            <ProductItem key={item.id} product={item} md={3} />
          ))}
        </div>
      </div>
      <Countdown />
      <div className="mt-5">
        <div className="row justify-center bg-white p-3">
          <div className="col-12">
            <div className="heading d-flex gap-2 justify-content-center my-3">
              <BiSolidOffer className="text-4xl" />
              <h3 className="h3">On Sale Products</h3>
            </div>
          </div>
          {Sale.map((item) => (
            <ProductItem key={item.id} product={item} md={3} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;

export const ProductItem = ({ product, sm = 4, md = 2, cols = 12 }) => {
  const { addItemToCart } = useContext(CartContext);

  const bgMap = {
    pink: "bg-pink-200",
    green: "bg-green-200",
    blue: "bg-blue-200",
    purple: "bg-purple-200",
  }

  const ringMap = {
    pink: "peer-checked:ring-pink-400",
    green: "peer-checked:ring-green-400",
    blue: "peer-checked:ring-blue-400",
    purple: "peer-checked:ring-purple-400",
  }

  return (
    <div className={`product-card col-md-${md} col-sm-${sm} col-${cols} mb-4 `}>
      <div className="shadow-md rounded-2xl bg-white">
        <NavLink
          id="RouterNavLink"
          className="product-link"
          to={`/products/${product.id}`}
        >
          <img
            className="card-img-top product-img rounded-tl-2xl rounded-tr-2xl"
            src={product.image}
            alt="Product"
          />
        </NavLink>
        <div className="pt-3 pb-4 px-3">
          <NavLink to={`/products/${product.id}`}>
            <h5 className="text-xl font-normal truncate mb-2.5">
              {product.name}
            </h5>
          </NavLink>
          <div className="flex justify-between items-center">
            <p className="text-xl">
              ${product.price}
              <span className="text-xs inline-block ml-2.5 text-red-500 line-through">
                ${product.delPrice}
              </span>
            </p>
            <Link className="text-xs text-gray-500">{product.brand}</Link>
          </div>
          <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
            <div className="flex justify flex-start mt-3 gap-x-1">
              {["pink", "green", "blue", "purple"].map((item, index) => (
                <label
                  key={`${item}-${index}`}
                  htmlFor={`${product.id}-${item}`}
                >
                  <input
                    type="radio"
                    name="color"
                    id={`${product.id}-${item}`}
                    className="peer hidden"
                  />
                  <span
                    className={`w-8 h-8 inline-block rounded-full ${bgMap[item]} ${ringMap[item]} peer-checked:ring-2 cursor-pointer`}
                  ></span>
                </label>
              ))}
            </div>
            <button
              className="btn btn-dark rounded-full text-sm flex justify-center mb-0 w-full md:w-auto mt-2"
              onClick={() => addItemToCart(product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
