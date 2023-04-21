import { Context } from "../store/appContext.js"
import "../../styles/composition.css";
import React, { useContext, useEffect } from "react";

export const Composition = () => {
    const { store, actions } = useContext(Context)
    useEffect(()=>{
        actions.getInfoPost()  
    },[])

    const {image_url} = store.infoPost

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
                        
                        <div className="container-fluid tab-content compcont" id="pills-tabContent">
                            <div className="tab-pane fade show active overflow-scroll compcont" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                <div className="row justify-content-center g-2 flex-column flex-md-row ps-2 pe-2">
                                    <div className="col-md-6 col-lg-4 mt-2 p-2">
                                        <img className="img-fluid w-100 h-100" src="https://images.template.net/54866/Med-Spa-Instagram-Post-sm-1610521430297-548660.jpeg" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-2">
                                        <img className="img-fluid w-100 h-100" src="https://images.template.net/54702/Spa-Advertisement-Instagram-Post-sm-1610418067377-547020.jpeg" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-2">
                                        <img className="img-fluid w-100 h-100" src={image_url} alt="postImage" />
                                    </div>
                                </div>
                                <div className="row justify-content-center g-2 flex-column flex-md-row ps-2 pe-2">
                                    <div className="col-md-6 col-lg-4 mt-2 p-2">
                                        <img className="img-fluid w-100 h-200" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/whatsapp-status-and-instagram-story-fashion-a-design-template-5826cc5d21c964f070d3a4a9d597a6ac_screen.jpg?ts=1637014577" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-2">
                                        <img className="img-fluid w-100 h-200" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-arrival-in-store-instagram-story-template-design-00e18ce7924908ed9db64c719b56e9e0_screen.jpg?ts=1637013791" alt="postImage" />
                                    </div>
                                    <div className="col-md-6 col-lg-4 p-2">
                                        <img className="img-fluid w-100 h-200" src="https://static.vecteezy.com/system/resources/previews/020/012/339/non_2x/green-illustrated-holiday-special-sale-instagram-story-free-editor_template.jpeg" alt="postImage" />
                                    </div>
                                </div>
                            </div>
                         

                            <div className="container-fluid tab-pane fade overflow-scroll compcont" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                <div className="col-12 d-flex justify-content-center mb-4 mt-1">
                                        <img className="img-fluid w-100" src="https://images.template.net/54866/Med-Spa-Instagram-Post-sm-1610521430297-548660.jpeg" alt="postImage" />
                                </div>
                                <div className="col-12 d-flex justify-content-center mb-4 mt-4">
                                    <img className="img-fluid w-100" src="https://images.template.net/54702/Spa-Advertisement-Instagram-Post-sm-1610418067377-547020.jpeg" alt="postImage" />
                                </div>
                                <div className="col-12 d-flex justify-content-center mb-4 mt-4">
                                    <img className="card-img-top img-fluid w-100" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/whatsapp-status-and-instagram-story-fashion-a-design-template-5826cc5d21c964f070d3a4a9d597a6ac_screen.jpg?ts=1637014577" alt="postImage" />
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
};