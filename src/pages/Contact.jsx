import Layout from "../components/Layout";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  const details = [
    {
      label: "Location",
      value: "ABC Road, Karachi",
      icon: <FaLocationDot className="text-2xl text-white" />,
    },
    {
      label: "Email",
      value: "info@madam.com",
      icon: <MdEmail className="text-2xl text-white" />,
    },
    {
      label: "Phone",
      value: "+921 123 123 4",
      icon: <FaPhone className="text-2xl text-white" />,
    },
  ];

  return (
    <Layout>
      <section className="container my-5">
        <div className="row bg-white p-10">
          <div className="col-lg-6">
            <div className="">
              <div className="contact-heading ">
                <h2 className="text-4xl text-black relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:w-[100px] after:h-1.5 after:bg-#3a322d after:left-0 after:rounded-full after:bg-[#3a322d]">
                  Contact Us
                </h2>
                <p className="font-light py-2.5 text-black">
                  Reach out to use for inquiry
                </p>
              </div>
              <form method="get" id="" className="mt-3">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-gray-100 font-light py-2.5"
                    id="name"
                    name="name"
                    placeholder="Enter your name here"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-gray-100 font-light py-2.5"
                    name="email"
                    placeholder="Enter your email here"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control border-gray-100 font-light py-2.5"
                    placeholder="Enter your message/ complaint here"
                    name="message"
                    rows="5"
                  ></textarea>
                </div>
                <div className="text-center w">
                  <button className="btn btn-dark block w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 mt-4 md:mt-0">
            <div className="row space-y-3">
              {details.map(({ label, value, icon }) => (
                <div className="col-md-4 px-0" key={label}>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full">
                      {icon}
                    </div>
                    <p>
                      <span className="text-2xl block">{label}</span>
                      <span className="text-sm">{value}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <iframe
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  className="mx-auto"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.7357166068296!2d66.9997019!3d24.941071599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3400213d2a719%3A0x5497cd44e5dda5bb!2sAptech%20Computer%20Education%20Orangi%20Town!5e0!3m2!1sen!2s!4v1698227417664!5m2!1sen!2s"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
