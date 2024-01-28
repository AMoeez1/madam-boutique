// import Black from '../assets/Products/BlackPant1.jpg'
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import ProductsData from "../data/ProductsData";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import TrendingData from "../data/TrendingData";
import { ProductItem } from "../components/HomeProducts";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const filteredProducts = ProductsData.filter(
      (prod) => prod.id == productId
    );
    if (filteredProducts.length > 0) {
      setProduct(filteredProducts[0]);
    }
  }, [productId]);

  const handleAddToCart = () => {
    addItemToCart(product.id);
  };

  return (
    <Layout>
      <div className="container mt-2.5 mb-5 px-8 md:px-0">
        <div className="flex justify-between">
          <Link
            className="h3 my-4 d-flex align-items-center gap-1"
            to={`/products`}
          >
            <IoMdArrowRoundBack className="text-xl" />
            <span className="text-xl">Go Back</span>
          </Link>
        </div>
        <div className="bg-white p-6">
          <div className="row space-y-3">
            <div className="col-lg-5">
              <div className="">
                <div className="main-image">
                  <img src={product.image} alt={product.alt} className="h-[500px] object-cover" />
                </div>
                <ul className="flex justify-between gap-2 mt-6">
                  {Array.from({ length: 4 }).map((item) => (
                    <li
                      key={item}
                      className="h-16 w-16 md:h-24 md:w-24 rounded-lg shadow-sm"
                    >
                      <img
                        className="h-full w-full object-cover rounded-md"
                        src={product.image}
                        alt={product.alt}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <h4 className="text-3xl md:text-5xl my-2.5">{product.name}</h4>
              <Rating />
              <h6 className="h6">{product.brand}</h6>
              <p className="mb-3 font-light pr-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, aspernatur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Exercitationem, inventore voluptatem eum
                dolorem iste corrupti dolores explicabo deserunt a dolor tempora
                reprehenderit, nesciunt deleniti? Libero hic id dolorum facilis
                cum.
              </p>
              <p className="text-2xl">
                ${product.price}
                <span className="text-sm inline-block ml-2.5 text-red-500 line-through">
                  ${product.delPrice}
                </span>
              </p>
              <div className="flex gap-1 my-2.5">
                {["pink", "green", "blue", "purple"].map((item, index) => (
                  <label key={`${item}-${index}`} htmlFor={`color-${item}`}>
                    <input
                      type="radio"
                      name="color"
                      id={`color-${item}`}
                      className=" peer hidden"
                    />
                    <span
                      className={`w-8 h-8 inline-block rounded-full bg-${item}-200 peer-checked:ring-${item}-400 peer-checked:ring-2 cursor-pointer`}
                    ></span>
                  </label>
                ))}
              </div>
              <div className="flex gap-x-2 my-2.5">
                {["S", "M", "L", "XL", "XXL"].map((item) => (
                  <label key={item} htmlFor={`radio-${item}`}>
                    <input
                      type="radio"
                      name="size"
                      id={`radio-${item}`}
                      className="peer hidden"
                    />
                    <span className="h-10 w-10 border flex items-center justify-center rounded-md text-sm cursor-pointer hover:bg-black hover:text-white hover:border-black transition-colors peer-checked:bg-black peer-checked:text-white">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
              <button
                className="btn btn-dark rounded-full text-base flex justify-center mt-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row bg-white p-3 rounded-md">
            <h3 className="text-3xl my-6">Related Products</h3>
            {TrendingData.map((item) => (
              <ProductItem key={item.id} product={item} md={3} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;

const Rating = () => {
  return (
    <div className="flex items-center my-2.5">
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
};
