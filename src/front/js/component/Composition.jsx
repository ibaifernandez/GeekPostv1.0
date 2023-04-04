import React from "react";
import "../../styles/composition.css";

export const Composition = () => {
    return (
        <section id="home-process" className="process section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Mis Composiciones</h2>
                </div>
                <div className="row mt-3">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center p-2">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="comp-btn nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fa-sharp fa-solid fa-grip"></i></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="comp-btn nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-regular fa-square"></i></button>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="container-fluid tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row justify-content-center g-2 flex-column flex-md-row ps-2 pe-2">
                                    <div className="col-md-6 col-lg-4 mt-2">
                                        <img className="img-fluid w-100 h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <img className="img-fluid w-100 h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <img className="img-fluid w-100 h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <img className="img-fluid w-100 h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                <div className="col-12 d-flex justify-content-center mb-4 mt-1">
                                        <img className="img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                </div>
                                <div className="col-12 d-flex justify-content-center mb-4 mt-4">
                                    <img className="img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                </div>
                                <div className="col-12 d-flex justify-content-center mb-4 mt-4">
                                    <img className="card-img-top img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJx5g8wjHHtBy51MFOHgCGV_dnCkrL0pAyw&usqp=CAU" alt="postImage" />
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
};