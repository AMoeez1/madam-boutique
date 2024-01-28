import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { CartContext } from "../context/CartContext";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Cart() {
  const { items, total, increaseQty, decreaseQty, removeItem, clearCart } =
    useContext(CartContext);

  return (
    <Layout>
      <div className="container my-5 px-8 md:px-0">
        <div className="flex justify-between">
          <Link
            className="h3 my-4 d-flex align-items-center gap-1"
            to={`/products`}
          >
            <IoMdArrowRoundBack className="text-xl" />
            <span className="text-xl">Go Back</span>
          </Link>
        </div>
        <h2 className="text-center font-bold text-5xl mb-3">Cart</h2>
        <div className="grid grid-cols-12 gap-x-3">
          <div className="col-span-12 md:col-span-9">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td scope="col">Product Details</td>
                    <td scope="col">Qunatity</td>
                    <td scope="col">Price</td>
                    <td scope="col">Total</td>
                    <td scope="col">Total</td>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 &&
                    items?.map((item) => (
                      <tr key={item.id}>
                        <th>
                          <div className="flex gap-x-3 flex-wrap md:flex-nowrap space-y-2 md:space-y-0">
                            <img
                              className="object-cover w-20 h-20 rounded-md"
                              src={item.image}
                              alt="Title"
                            />
                            <div>
                              <p className="font-normal">{item.name}</p>
                              <small className="font-normal">
                                {item.category}
                              </small>
                            </div>
                          </div>
                        </th>
                        <td>
                          <div className="d-flex align-items-center h3 gap-2">
                            <CiCircleMinus
                              onClick={() => decreaseQty(item.id)}
                            />
                            <input
                              type="text"
                              value={item.qty}
                              className="form-control w-10"
                              placeholder=""
                            />
                            <CiCirclePlus
                              onClick={() => increaseQty(item.id)}
                            />
                          </div>
                        </td>
                        <td>{item.price}</td>
                        <td>{+parseFloat(item.price * item.qty).toFixed(2)}</td>
                        <td>
                          <button onClick={() => removeItem(item.id)}>
                            <MdDelete className="text-red-500 text-2xl" />
                          </button>
                        </td>
                      </tr>
                    ))}

                  {items?.length <= 0 && (
                    <tr>
                      <td colSpan={5} className="text-center text-2xl p-3">
                        Your cart is empty
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="card">
              <div className="card-body">
                <h2 className="text-2xl mb-2 text-center">Order Summary</h2>
                <hr />
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <td scope="col">Delivery</td>
                      <td scope="col" className="text-right text-lg">
                        $30
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">Total</td>
                      <td scope="col" className="text-right text-lg">
                        ${total}
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
              <button
                className="btn btn-dark mt-3 col-11 ml-4"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
