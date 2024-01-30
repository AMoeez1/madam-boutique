import "../Style/Products.css";
import Layout from "../components/Layout";
import SideBar from "../components/Sidebar";
import { products } from "../data/products";
import { useEffect, useState } from "react";
import { ProductItem } from "../components/HomeProducts";

export default function Products() {
  const [filterProduct, setFilteredProducts] = useState([]);

  const handleFilterChange = (filter, value) => {
    setFilteredProducts(
      products.filter((item) => {
        if (item[filter] && item[filter] === value) {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  return (
    <Layout>
      <h1 className="h1 mt-5 text-center">Products</h1>
      {/* <SearchBar/> */}
      <div className="container px-8 md:px-4 py-4">
        <div className="row">
          <div className="col-lg-3">
            <SideBar onChange={handleFilterChange} />
          </div>
          <div className="col-lg-9">
            <div className="row space-y-2 md:space-y-0">
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control py-2.5 placeholder:text-gray-400 placeholder:font-light"
                  placeholder="Search products with name, brand"
                />
              </div>
              <div className="col-md-2">
                <div className="mb-3">
                  <select
                    className="form-select form-select-md py-2.5 font-light"
                    name=""
                    id=""
                  >
                    <option value="name-asc">A-Z</option>
                    <option value="name-desc">Z-A</option>
                    <option value="price-asc">Price Higher to lower</option>
                    <option value="price-desc">Price lower to higher</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              {filterProduct?.map((product) => {
                return (
                  <>
                    <ProductItem
                      product={product}
                      md={4}
                      cols={12}
                      key={product.id}
                    />
                  </>
                );
              })}
              {
                filterProduct.length <= 0 && (<h2 className="text-3xl text-center">No product found</h2>)
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
