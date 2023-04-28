import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js"
import "../../styles/composition.css";

export const MyCompositions = () => {
    const { store, actions } = useContext(Context)
    
    useEffect(()=>{
        actions.getInfoPost()  
    },[])

    const {imageUrl} = store.infoPost

    return (
            <section className="container-fluid home-compositions" data-aos="fade-up">

                <div className="section-title-compositions">
                    <h2>Mis composiciones</h2>
                </div>

            <div className="row g-0 mb-3">
                <div className="col-12 d-flex justify-content-center">
                    <ul id="pills-tab" className="nav nav-pills nav-fill" role="tablist">
                        <li className="nav-item-compositions" role="presentation">
                            <button
                                id="pills-home-tab"
                                className="nav-link-compositions active"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                <i className="fa-sharp fa-solid fa-grip"></i>
                            </button>
                        </li>
                        <li className="nav-item-compositions" role="presentation">
                            <button
                                id="pills-profile-tab"
                                className="nav-link-compositions"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                            >
                                <i className="fa-solid fa-square"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
                
                <div id="pills-tabContent" className="container-fluid tab-content">
                    <div
                        id="pills-home"
                        className="tab-pane fade show active overflow-scroll"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex="0"
                    >
                        <div className="row g-0">
                            
                            <div className="col-md-6 col-lg-4">
                                <img className="img-fluid p-3" src="https://images.template.net/54866/Med-Spa-Instagram-Post-sm-1610521430297-548660.jpeg" alt="postImage" />
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <img className="img-fluid p-3" src={imageUrl ? imageUrl : null} alt={imageUrl ? "" : null} />
                            </div>
                            
                            <div className="col-md-6 col-lg-4">
                                <img className="img-fluid p-3" src="https://images.template.net/54702/Spa-Advertisement-Instagram-Post-sm-1610418067377-547020.jpeg" alt="postImage" />
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <img className="img-fluid p-3" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/whatsapp-status-and-instagram-story-fashion-a-design-template-5826cc5d21c964f070d3a4a9d597a6ac_screen.jpg?ts=1637014577" alt="postImage" />
                            </div>
                            
                            <div className="col-md-6 col-lg-4">
                                <img className="img-fluid p-3" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-arrival-in-store-instagram-story-template-design-00e18ce7924908ed9db64c719b56e9e0_screen.jpg?ts=1637013791" alt="postImage" />
                            </div>
                            
                            <div className="col-md-6 col-lg-4">
                                <img className="img-fluid p-3" src="https://static.vecteezy.com/system/resources/previews/020/012/339/non_2x/green-illustrated-holiday-special-sale-instagram-story-free-editor_template.jpeg" alt="postImage" />
                            </div>
                    
                        </div>
                    </div>
                    

                    <div className="container-fluid tab-pane fade overflow-scroll" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
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
</section>
)
}