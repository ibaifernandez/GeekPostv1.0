import React from "react";
import { SemiFormalVerticalTemplate } from "../templates/SemiFormalVerticalTemplate.jsx"
import { Footer } from "../component/Footer.jsx"
import "../../styles/output.css";
import { FacebookShareButton, FacebookIcon } from 'react-share';

export const Output = () => (
    <>
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0 output-wrapper">
                <div className="col-sm-12 col-lg-6 p-0 m-0">
                    <div className="final-composition-wrapper">
                        <div className="final-composition-wrapper-img">
                            <SemiFormalVerticalTemplate />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 p-3">
                    <h1 className="px-3">Comparte en redes sociales</h1>
                    <p className="lead feedback-happy-talk-lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum eum necessitatibus
                        dolore vitae eius ad laborum natus corrupti aperiam similique voluptatibus, doloribus.
                    </p>
                    <div className="feedback-happy-talk">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum eum necessitatibus
                            dolore vitae eius ad laborum natus corrupti aperiam similique voluptatibus, doloribus.
                        </p>
                    </div>
                    <h2 className="px-3 pt-3">Hashtag sugeridos</h2>
                    <div className="border border-primary ms-3 p-3 w-75">a</div>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'Dummy text!'}
                        hashtag="#muo">
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
            </div>
        </div>
        <Footer />
    </>
    );