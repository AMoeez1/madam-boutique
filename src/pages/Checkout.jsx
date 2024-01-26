import { useState } from "react";
import {
  FaCcAmazonPay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

function Payment() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      toast.error("Enter name");
      return;
    }

    if (!cardNo) {
      toast.error("Enter name");
      return;
    }

    if (!cvv) {
      toast.error("Enter name");
      return;
    }

    toast.success('Order Placed')
    navigate('/')
  };

  return (
    <Layout>
      <div className="container">
        <div className="flex justify-between">
          <Link
            className="h3 my-4 d-flex align-items-center gap-1"
            to={`/cart`}
          >
            <IoMdArrowRoundBack className="text-xl" />
            <span className="text-xl">Go Back</span>
          </Link>
        </div>
        <h3 className="h3 text-center mt-4">Checkout</h3>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="p-4 mb-4 col-lg-4 col-sm-8 col-12 rounded-md shadow-md bg-white">
              <div className="card-type my-3 gap-2 h2 d-flex justify-content-center cursor-pointer">
                <FaCcMastercard />
                <FaCcVisa />
                <FaCcPaypal />
                <FaCcAmazonPay />
              </div>
              <div className="form-group mt-3">
                <div className="my-3">
                  <label htmlFor="name">Card Holder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Card Holder Name"
                    defaultValue={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="CardNum">Card Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="CardNum"
                    placeholder="Card Number"
                    defaultValue={cardNo}
                    onChange={(event) => setCardNo(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Expiration">Expiration</label>
                  <div className="d-flex">
                    <input
                      type="date"
                      className="form-control"
                      name="Expiration"
                      placeholder="Card Expiry Date Name"
                    />
                    <input
                      type="number"
                      className="form-control mx-2 "
                      name="CVV"
                      placeholder="Enter CVV"
                      defaultValue={cvv}
                      onChange={(event) => setCvv(event.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white w-full bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Payment;
