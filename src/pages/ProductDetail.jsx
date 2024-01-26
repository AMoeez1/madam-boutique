// import Black from '../assets/Products/BlackPant1.jpg'
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import ProductsData from "../data/ProductsData";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

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
    toast.success("Item successfully added to cart");
  };

  let style = {
    height: "500px",
    objectFit: "cover",
  };

  return (
    <Layout>
      <div className="container">
        <div className="flex justify-between">
          <Link
            className="h3 my-4 d-flex align-items-center gap-1"
            to={`/products`}
          >
            <IoMdArrowRoundBack className="text-xl" />
            <span className="text-xl">Go Back</span>
          </Link>
        </div>
        <div className="row my-5">
          <div className="card col-12">
            <div className="row">
              <div className="col-lg-5">
                <div className="flex gap-x-3 p-3">
                  <ul className="flex justify-between flex-col">
                    {Array.from({ length: 5}).map((item) => (
                      <li key={item}>
                        <div className="h-24 w-24 rounded-lg shadow-sm">
                          <img
                            className="h-full w-full object-cover rounded-md"
                            src={product.image}
                            alt={product.alt}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="main-image">
                    <img
                      className="card-img-top"
                      style={style}
                      src={product.image}
                      height={300}
                      alt={product.alt}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body col-lg-7">
                <h4 className="card-title text-warning h1">{product.name}</h4>
                <h6 className="h6">{product.brand}</h6>
                <p className="mb-3 font-light pr-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque, aspernatur. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Exercitationem, inventore voluptatem eum
                  dolorem iste corrupti dolores explicabo deserunt a dolor
                  tempora reprehenderit, nesciunt deleniti? Libero hic id
                  dolorum facilis cum.
                </p>
                <div className="price d-flex">
                  <p className="card-text text-warning h5 mr-4">
                    $ {product.price}
                  </p>
                  <del>${product.delPrice}</del>
                </div>
                <h6 className="mt-4 mb-2">
                  <b>{product.color}</b>
                </h6>
                <select className="form-select w-25" name="" id="">
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">Xl</option>
                  <option value="">XXL</option>
                </select>
                <button
                  className="btn btn-dark rounded mt-4"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
