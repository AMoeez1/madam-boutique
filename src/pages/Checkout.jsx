import { FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcAmazonPay  } from "react-icons/fa6";
import Layout from "../components/Layout";

function Payment() {
  return (
    <Layout>
    <div className="container">
          <h3 className="h3 text-center mt-4">Checkout</h3>
        <div className="d-flex justify-content-center">
          <div className="p-4 mb-4 col-lg-4 bg-dark rounded text-white">
            <h4 className="h4 py-4 text-center text-warning">Card Detail</h4>
            <p className="text-center"><b>Card type</b></p>
            <div className="card-type mt-2 gap-2 h2 d-flex justify-content-center cursor-pointer">
              <FaCcMastercard />
              <FaCcVisa />
              <FaCcPaypal  />
              <FaCcAmazonPay />
            </div>
            <div className="form-group m-3">
              <label htmlFor="name">Card Holder Name</label>
              <input type="text" className="form-control" name="name" placeholder="Card Holder Name"/>
              <label htmlFor="CardNum">Card Number</label>
              <input type="text" className="form-control" name="CardNum" placeholder="Card Number"/>
              <label htmlFor="Expiration">Expiration</label>
              <div className="d-flex">
                <input type="date" className="form-control" name="Expiration" placeholder="Card Expiry Date Name"/>
                <input type="text" className="form-control mx-2 w-50" name="CVV" placeholder="Enter CVV"/>
              </div>
            <button className="btn btn-warning mt-2">Place Order</button>
            </div>
          </div>
            
          </div>
    </div>

    </Layout>
  )
}

export default Payment