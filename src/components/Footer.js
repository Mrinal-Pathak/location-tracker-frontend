import React from "react";
import '../Footer.css'

const Footer = function () {

    return (
        <>
            <footer>
                <div id="contact">Contact Me Here!</div>
                <div id="iconcontainer">
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/mrinal-pathak-0a8574286" target="_blank" rel="noreferrer">
                            <svg className="footerSvg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                viewBox="0 0 48 48">
                                <path fill="#0078d4"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z">
                                </path>
                                <path
                                    d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                                    opacity=".05"></path>
                                <path
                                    d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                                    opacity=".07"></path>
                                <path fill="#fff"
                                    d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://twitter.com/mrinal_pathak01" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter-x footerSvg" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://github.com/Mrinal-Pathak" target="_blank" rel="noreferrer">
                            <svg className="footerSvg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                viewBox="0 0 48 48">
                                <path fill="#2100c4"
                                    d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36 C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z">
                                </path>
                                <path fill="#ddbaff"
                                    d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12 c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393 c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5 c0,6.122,3.879,8.578,9.209,9.274C19.466,33.647,19,34.764,19,36l0,0.305c-0.163,0.045-0.332,0.084-0.514,0.108 c-1.107,0.143-2.271,0-2.833-0.333c-0.562-0.333-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979 c-0.376-0.01-0.548,0.343-0.5,0.563c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458 c0.418,0.674,0.417,2.468,2.562,3.416c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013 C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002L29,36 c0-1.236-0.466-2.353-1.209-3.226C33.121,32.078,37,29.622,37,23.5z">
                                </path>
                                <path fill="#ddbaff"
                                    d="M15,18l3.838-1.279c1.01-0.337,1.231-1.684,0.365-2.302l-0.037-0.026 c-2.399,0.44-4.445,1.291-5.888,2.753C13.596,17.658,14.129,18,15,18z">
                                </path>
                                <path fill="#ddbaff"
                                    d="M28.693,14.402c-0.878,0.623-0.655,1.987,0.366,2.327L32.872,18c0.913,0,1.461-0.37,1.773-0.924 c-1.46-1.438-3.513-2.274-5.915-2.701C28.717,14.384,28.705,14.393,28.693,14.402z">
                                </path>
                                <path fill="#ddbaff"
                                    d="M24,31c-1.525,0-2.874,0.697-3.791,1.774C21.409,32.931,22.681,33,24,33s2.591-0.069,3.791-0.226 C26.874,31.697,25.525,31,24,31z">
                                </path>
                            </svg></a>
                    </div>
                    <div className="icons">
                        <a href="https://instagram.com/mrinal_pathak_01" target="_blank" rel="noreferrer">
                            <svg className="footerSvg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                viewBox="0 0 64 64">
                                <linearGradient id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1" x1="32" x2="32" y1="6.667" y2="57.872"
                                    gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                    <stop offset="0" stopColor="#1a6dff"></stop>
                                    <stop offset="1" stopColor="#c822ff"></stop>
                                </linearGradient>
                                <path fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)"
                                    d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z">
                                </path>
                                <linearGradient id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2" x1="32" x2="32" y1="18.167" y2="45.679"
                                    gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                    <stop offset="0" stopColor="#6dc7ff"></stop>
                                    <stop offset="1" stopColor="#e6abff"></stop>
                                </linearGradient>
                                <path fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)"
                                    d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z">
                                </path>
                                <linearGradient id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3" x1="46" x2="46" y1="12.75" y2="23.049"
                                    gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                                    <stop offset="0" stopColor="#6dc7ff"></stop>
                                    <stop offset="1" stopColor="#e6abff"></stop>
                                </linearGradient>
                                <path fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)" d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z">
                                </path>
                            </svg></a>
                    </div>
                    <div className="icons">
                        <a href="https://www.facebook.com/mrinal.pathak.353" target="_blank" rel="noreferrer">
                            <svg className="footerSvg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                viewBox="0 0 48 48">
                                <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896"
                                    y2="43.432" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#0d61a9"></stop>
                                    <stop offset="1" stopColor="#16528c"></stop>
                                </linearGradient>
                                <path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
                                    d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z">
                                </path>
                                <path
                                    d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                                    opacity=".05"></path>
                                <path
                                    d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                                    opacity=".07"></path>
                                <path fill="#fff"
                                    d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z">
                                </path>
                            </svg></a>
                    </div>

                </div>
                <div className="message">Thank you for using this site!</div>
                <div className="message">Visit Again.</div>
                <div className="message">And plese share your feedback to me</div>
                <div className="message">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ rotate: "30deg", marginRight: "7px" }} viewBox="0 0 24 24" width="20" height="20" fill="white">
                        <path d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.11-.27c1.12.45 2.33.69 3.59.69a1 1 0 011 1v3.5a1 1 0 01-1 1C7.93 21 2 15.07 2 8.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.24 2.47.69 3.59.15.36.07.78-.27 1.11l-2.2 2.2z" />
                    </svg>
                    Ph. +919508374053
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{
                        marginRight: "7px",
                        position: "relative",
                        top: "5px"
                    }} viewBox="0 0 20 24" width="20" height="20" fill="white">
                        <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.557-8-5.557V6h16zM4 18V8.699l7.448 5.169c.217.149.469.232.732.232s.515-.083.732-.232L20 8.699V18H4z" />
                    </svg>
                    <a style={{ color: "white" }} href="mailto:mrinalpathak456@gmail.com">mrinalpathak456@gmail.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer