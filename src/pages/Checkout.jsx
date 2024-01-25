import {
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa6";
import Layout from "../components/Layout";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Payment() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    if (name.length == 0) {
      toast("Enter Name");
      event.preventDefault();
    } else {
      navigate("/");
    }

    if (cardNo.length == 0) {
      ToastContainer("Enter Card Number");
    }

    if (cvv == 0) {
      toast("Enter CVV Number");
      event.preventDefault();
    }
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
        <form action="" onSubmit={() => handleSubmit()}>
          <div className="d-flex justify-content-center">
            <div className="p-4 mb-4 col-lg-4 col-sm-8 col-12 bg-dark rounded text-white">
              <h4 className="h4 py-4 text-center text-warning">Card Detail</h4>
              <p className="text-center">
                <b>Card type</b>
              </p>
              <div className="card-type mt-2 gap-2 h2 d-flex justify-content-center cursor-pointer">
                <FaCcMastercard />
                <FaCcVisa />
                <FaCcPaypal />
                <FaCcAmazonPay />
              </div>
              <div className="form-group m-3">
                <label htmlFor="name">Card Holder Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Card Holder Name"
                  defaultValue={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="CardNum">Card Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="CardNum"
                  placeholder="Card Number"
                  defaultValue={cardNo}
                  onChange={(event) => setCardNo(event.target.value)}
                />
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
                <button type="submit" className="btn btn-light text-white mt-2">
                  Place Order
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
