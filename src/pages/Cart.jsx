import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { CartContext } from "../context/CartContext";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


function Cart() {
  const { items, total, increaseQty, decreaseQty, removeItem,clearCart } =
    useContext(CartContext);

  useEffect(() => {}, [items]);


  return (
    <Layout>
      <div className="container my-5">
        <div className="flex justify-between">
          <Link
            className="h3 my-4 d-flex align-items-center gap-1"
            to={`/products`}
          >
            <IoMdArrowRoundBack className="text-xl"/>
            <span className="text-xl">Go Back</span>
          </Link>
        </div>
        <h2 className="text-center font-bold text-5xl mb-3">Cart</h2>
        <div className="grid grid-cols-12 gap-x-3">
          <div className="col-span-12 md:col-span-9">
            <table className="table">
              <thead>
                <tr style={{ backgroundColor: "none" }}>
                  <th scope="col">Product Details</th>
                  <th scope="col">Qunatity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0 && items?.map((item) => (
                  <tr key={item.id}>
                    <th>
                      <div className="flex gap-x-3">
                        <img
                          className="card-img-top"
                          style={{ objectFit: "cover", height: 75, width: 75 }}
                          src={item.image}
                          alt="Title"
                        />
                        <div>
                          <p>{item.name}</p>
                          <small>{item.category}</small>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="d-flex align-items-center h3 gap-2">
                        <CiCircleMinus onClick={() => decreaseQty(item.id)} />
                        <input
                          type="text"
                          value={item.qty}
                          className="form-control w-10"
                          placeholder=""
                        />
                        <CiCirclePlus onClick={() => increaseQty(item.id)} />
                      </div>
                    </td>
                    <td><b>{item.price}</b></td>
                    <td>{Math.ceil(item.price * item.qty)}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}

                {
                  items?.length <= 0 && (
                    <tr>
                      <td colSpan={5} className="text-center text-2xl p-3">Your cart is empty</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="card">
              <div className="card-body">
                <h2 className="text-2xl mb-2 text-center">Order Summary</h2>
                <hr />
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col">Delivery</th>
                      <td scope="col" className="text-right h5">
                        $30
                      </td>
                    </tr>
                    <tr>
                      <th scope="col">Total</th>
                      <td scope="col" className="text-right text-warning h5">
                        <b>${total}</b>
                      </td>
                    </tr>
                  </thead>
                </table>
                <Link to={"/checkout"} className="btn btn-dark block">
                  Checkout
                </Link>
              </div>
            </div>
            <div className="row">
              <button className="btn btn-dark mt-3 col-11 ml-4" onClick={() => clearCart()}>Clear Cart</button>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
