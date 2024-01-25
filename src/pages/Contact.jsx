import Layout from "../components/Layout";
import agent from "../assets/agent.png";
import Ai from "../assets/AiIcon.webp";
import Faq from "../assets/Faq.webp";
import { Link } from "react-router-dom";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

function Contact() {
  const style = {
    height: 80,
    width: 100,
  };
  return (
    <Layout>
      <div>
        <section className="container my-5">
          <h1 className="h1 mt-5 text-center">Having Trouble?</h1>
          <h4 className="h4 text-center">
            You can solve your problems by the following method
          </h4>
          <div className="row mb-5">
            <div className="card rounded-full border-secondary contact-card col-lg-3 col-md-3 col-sm-5 col-10 my-3 mx-2">
              <div className="contact-img d-flex justify-center mt-4">
                <img
                  style={style}
                  className="card-img-top contact-img"
                  src={agent}
                  width={80}
                  alt=""
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title text-secondary h4">
                  Chat with our agent
                </h4>
                <b className="card-text">
                  Live chat with our agent to solve your problems.
                </b>
              </div>
            </div>
            <div className="card rounded-full border-secondary contact-card col-lg-3 col-md-3 col-sm-5 col-10 my-3 mx-2">
              <div className="contact-img d-flex justify-center mt-4">
                <img
                  style={style}
                  className="card-img-top contact-img"
                  src={Ai}
                  width={80}
                  alt=""
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title text-secondary h4">
                  Chat with our AI Robot
                </h4>
                <b className="card-text">
                  Or you can ask our AI chat to enlighten you with the perfect
                  solution.{" "}
                </b>
              </div>
            </div>
            <div className="card rounded-full border-secondary contact-card col-lg-3 col-md-3 col-sm-5 col-10 my-3 mx-2">
              <div className="contact-img d-flex justify-center mt-4">
                <img
                  style={style}
                  className="card-img-top contact-img"
                  src={Faq}
                  width={80}
                  alt=""
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title text-secondary h4">
                  Chat with our agent
                </h4>
                <b className="card-text">
                  You can check our{" "}
                  <Link className="text-decoration-underline">FAQs</Link> page
                  to see the answer of the most common questions.
                </b>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="text-center">
                <h2 className="h2 rounded-3xl">
                  Still, didn't get the solution?
                </h2>
                <h4 className="h5 mb-5">
                  Fill the form let us know about the problem you have been
                  going through.
                </h4>
              </div>
              <div className="card bg-white rounded-xl">
                <div className="card-body text-secondary">
                  <h2 className="card-title h4 text-center mb-4">Contact Us</h2>
                  <form method="get" id="">
                    <div className="mb-3">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your name here"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your email here"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Your Message/ Complaint
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Enter your message/ complaint here"
                        name="message"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-warning">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <div className="row">
              <h1 className="h1 mb-2">Stay in touch</h1>
              <h4 className="h4">+9231 23456789</h4>
              <h5 className="h5 mb-5 ">
                <b className="text-warning">Address: </b>Orangi Town Karachi,
                Pakistan
              </h5>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
