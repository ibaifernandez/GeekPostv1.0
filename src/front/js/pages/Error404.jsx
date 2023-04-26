import React from "react";
import "../../styles/error-404.css";

export const Error404 = () => (
    <div className="wrapper-404">
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
            <div className="output">
                <span className="react-import">React</span>
                <span className="error-404-blue"> from </span>
                <span className="error-404-red">"react"</span>;
            </div>
            <div className="output">
                <span className="react-import error-404-red"> "../../styles/error-404.css"</span>;
            </div>

            <hr className="error-404-invisible" />

            <div className="output">
                <h1 className="error-404-inline-block h1-404">
                    <span className="errorcode">Error404</span>
                    <span className="error-404-equal"> =</span>
                    <span className="error-404-yellow"> () </span>
                    <span className="error-404-blue">=&gt;</span>
                    <span className="error-404-yellow"> &#123;</span>
                </h1>
            </div>

            <div className="output">
                <span className="error-404-inline-block error-404-indent-1">if </span>
                <span className="error-404-pink"> (</span>
                estasAqui
                <span className="error-404-pink">)</span> &#123;
            </div>

            <div className="output">
                <div className="error-404-inline-block error-404-indent-2 error-404-blue">console.log</div>("Es porque ha habido un error de alguna clase.")
                <div className="output">
                    <span className="error-404-blue error-404-inline-block error-404-indent-2">return&nbsp;</span>
                    <a className="link-at-404" href="/">aLaPaginaDeInicio</a>;
                    <div className="output">
                        <span className="error-404-inline-block error-404-indent-2">&#125;</span>
                        <span classame="error-404-inline-block error-404-indent-2"> else &#123;</span>
                    </div>
                    <div className="output">
                        <span className="error-404-inline-block error-404-blue error-404-indent-3">console.log</span>
                        <span>("Escucha&nbsp; 
                            <a className="link-at-404" href="https://www.youtube.com/watch?v=3dyNbMVfeyM" target="_blank">
                            este temazo de The Strokes
                            </a>.")
                        </span>
                    </div>
                    <div className="output">
                        <span className="error-404-inline-block error-404-indent-3 error-404-blue">return</span>
                        <span> muyPronto;</span>
                    </div>
                    <div className="output">
                        <span className="error-404-inline-block error-404-indent-2">&#125;</span>
                    </div>
                    <div className="output">
                        <span className="error-404-inline-block error-404-indent-1">&#125;</span>
                    </div>
                    <div className="output">
                        <span>&#125;;</span>
                    </div>
                    <div className="output"></div>
                </div>
            </div>
        </div>
    </div>
)