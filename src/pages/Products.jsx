import { Link, NavLink } from 'react-router-dom';
import '../Style/Products.css';
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import SideBar from '../components/SideBar';
import productsData from '../data/ProductsData';
import { useEffect, useState } from 'react';

export default function Products() {

  const products = productsData
  const [filterProduct, setFilteredProducts] = useState([]);

  const handleFilterChange = (filter, value) => {
    setFilteredProducts(products.filter(item => {
      if (item[filter] && item[filter] === value) {
        return item;
      }
    }))
  }

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <Layout>
      <h1 className="h1 text-center">Products</h1>
      {/* <SearchBar/> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <SideBar onChange={handleFilterChange} />
          </div>
          <div className="col-lg-10">
            <div className="row">
              {filterProduct.map((values) => {
                const { id, name, price, brand, image } = values;
                return (
                  <>
                    <div key={id} className="card products col-md-3 col-10 bg-white m-4 mb-4">
                      <NavLink id="RouterNavLink" className="product-link" to={`/products/${id}`}>
                        <img className="card-img-top product-img" src={image} alt="Product" />
                        <div className="card-body main-card">
                          <h5 className="card-title ml-2 h6"><b>{name}</b></h5>
                        </div>
                        <div className="body mb-3 d-flex justify-between">
                          <p className="card-text ml-2 text-warning">
                            <b>${price}</b>
                          </p>
                          <Link className="card-text mr-4 text-gray-500"><b>{brand}</b></Link>
                        </div>

                      </NavLink>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}