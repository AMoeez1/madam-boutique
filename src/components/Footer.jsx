import { FaFacebook, FaInstagram, FaThreads, FaTwitter } from "react-icons/fa6";
import { RiCopyrightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/MadamLogo.png";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="container px-8 md:p-3">
        <div className="row pt-2">
          <div className="col-lg-3 col-12 mb-5">
            <Link to="/">
              <img src={Logo} width={120} alt="" className="mx-auto mx-md-0"/>
            </Link>
          </div>
          <div className="col-lg-2 col-6">
            <h3 className="text-black inline-block text-xl font-normal pb-1 mb-3 border-b-[3px] border-black">
              Shop
            </h3>
            <ul className="space-y-3 mt-2">
              <li>
                <Link to="/products" className="block font-light my-2">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="block font-light my-2">
                  Category
                </Link>
              </li>
              <li>
                <Link to="/" className="block font-light my-2">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <h3 className="text-black inline-block text-xl font-normal pb-1 mb-3 border-b-[3px] border-black">
              About Us
            </h3>
            <ul className="space-y-3 mt-2">
              <li>
                <Link to="/about" className="block font-light my-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block font-light my-2">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="block font-light my-2">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <h3 className="text-black inline-block text-xl font-normal pb-1 mb-3 border-b-[3px] border-black">
              Resources
            </h3>
            <ul className="space-y-3 mt-2">
              <li>
                <Link className="block font-light my-2">Help Center</Link>
              </li>
              <li>
                <Link className="block font-light my-2">Stores</Link>
              </li>
              <li>
                <Link className="block font-light my-2">Blogs</Link>
              </li>
              <li>
                <Link className="block font-light my-2">Videos</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12">
            <h3 className="text-black block text-center md:text-left md:inline-block text-xl font-normal pb-1 mb-3 border-b-[3px] border-black">
              Get in touch
            </h3>
            <p className="font-light">
              Question or feedback ? <br />
              We'd love to hear from you
            </p>
            <div className="flex justify-center md:justify-start items-center mt-4 gap-x-3">
              <Link
                to="https://www.facebook.com"
                target="new"
                className="h-9 w-9 bg-blue-500 flex justify-center items-center rounded-full"
              >
                <FaFacebook className="text-white text-2xl" />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="new"
                className="h-9 w-9 bg-pink-500 flex justify-center items-center rounded-full"
              >
                <FaInstagram className="text-white text-2xl" />
              </Link>
              <Link
                to="https://www.twitter.com"
                target="new"
                className="h-9 w-9 bg-sky-500 flex justify-center items-center rounded-full"
              >
                <FaTwitter className="text-white text-2xl" />
              </Link>
              <Link
                to="https://www.thread.com"
                target="new"
                className="h-9 w-9 bg-gray-500 flex justify-center items-center rounded-full"
              >
                <FaThreads className="text-white text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 bg-gray-100 py-3">
        <p className="flex justify-center items-center gap-x-2 text-sm">
          All Rights Reserved To Madam
          {<RiCopyrightLine />}
          Copyright {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
