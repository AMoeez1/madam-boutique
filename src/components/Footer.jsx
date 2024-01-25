import { Link } from 'react-router-dom';
import {
    FaFacebook, FaInstagram, FaTwitter, FaThreads,
    FaQuestion, FaDollarSign, FaTruck,
} from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import { RiCopyrightLine, RiExchangeBoxFill, RiBankCard2Fill } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
// import { TbCurrencyReal } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { IoMdCash } from "react-icons/io";



export default function Footer() {
    return (
        <div className='bg-white p-0'>
            <div className="container">
                <div className="row pt-2">
                    <div className="col-lg-6 col-6 text-start ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <h3 className='text-warning h3'>Section</h3>
                                <Link className="nav-link d-flex gap-1"><CiShop /> Seller Shop</Link>
                                <Link className="nav-link d-flex gap-1"><FaTruck /> Logistics</Link>
                                <Link className="nav-link d-flex gap-1"><FaDollarSign /> Pricing</Link>
                                <Link className="nav-link d-flex gap-1"><FaQuestion /> FAQs</Link>
                                <Link className="nav-link d-flex gap-1"><RiExchangeBoxFill />Exchange Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-6 text-start ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <h3 className='text-warning h3'>Payment</h3>
                                <Link className="nav-link d-flex gap-1"><FaCcAmazonPay /> <span>Wallet</span> </Link>
                                <Link className="nav-link d-flex gap-1"><RiBankCard2Fill /> Debit/Credit Card</Link>
                                <Link className="nav-link d-flex gap-1"><BsBank2 /> Bank Account</Link>
                                <Link className="nav-link d-flex gap-1"><IoMdCash /> Cash on delivery</Link>
                                <Link className="nav-link d-flex gap-1"><GiPayMoney /> Installments</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center ">
                        <p className='d-flex justify-center '>{<RiCopyrightLine />}<b>Copyright 2023</b></p>

                    </div>
                </div>
                <div className=" gap-3 d-flex justify-content-end">
                    <i className='h4 text-primary'><FaFacebook /></i>
                    <i className='h4 text-danger'><FaInstagram /></i>
                    <i className="h4 text-info"><FaTwitter /></i>
                    <i className='h4 text-secondary'><FaThreads /></i>
                </div>
            </div>
        </div>
    )
}
