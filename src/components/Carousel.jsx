// import './Carousel.css';
// import {motion} from 'framer-motion';

import Jacket from '../assets/Products/LevisTruckerjacket.jpg'


export default function CarouselSlide() {
    return (
        <div className="bg-dark">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="container carousel-item active">
                        <div className="row">
                            <div className="text col-lg-4">
                                <h1 className='h1 text-white'>Denim Jacket</h1>
                            </div>
                            <div className="img col-lg-8">
                                <img src={Jacket} className="w-25" alt="First slide" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                            <div className="text col-lg-4">
                                <h1 className='h1 text-white'>Denim Jacket</h1>
                            </div>
                            <div className="img col-lg-8">
                                <img src={Jacket} className="w-25" alt="First slide" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                            <div className="text col-lg-4">
                                <h1 className='h1 text-white'>Denim Jacket</h1>
                            </div>
                            <div className="img col-lg-8">
                                <img src={Jacket} className="w-25" alt="First slide" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <div type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">Launch </div>
            
            <div className="modal fade" id="modalId">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">Add rows here</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div> */}
            
        </div>
    )
}
