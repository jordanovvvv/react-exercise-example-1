import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../fonts/Urbanist-Regular.ttf"

function Home(){
    return (
        <div style={{backgroundColor: '#000C24'}}>
            <nav className="navbar navbar-expand-lg position-relative z-1">
                <div className="container-fluid">
                    <div className="navbar-brand ms-5 mt-4 ">
                        <img src={require('../images/Icon.png')} alt="BYPHER" style={{blockSize: '60px', alignContent: 'center'}} className="ms-4"/>
                        <img src={require('../images/BYPHER.png')} className="ms-4"/>
                    </div>
                    <div className="navbar ms-5 mt-4" style={{marginRight: '10%'}}>
                        <ul className="navbar-nav me-5 pe-5">
                            <li className="nav-item me-5 home-nav-item">
                                <a className="nav-link active text-decoration-underline" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-5 home-nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item me-5 home-nav-item">
                                <a className="nav-link" href="#">Work</a>
                            </li>
                            <li className="nav-item me-5 home-nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <a className="btn offcanvasbutton position-absolute end-0 z-1 me-5" type="button"aria-controls="offcanvasEnd">
                    <img src={require("../images/Group 3.png")} className="img-fluid"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd"  />
                </a>

                <div className="offcanvas offcanvas-end w-100 offcanvasbackground" data-bs-backdrop="false" tabIndex="-1"
                     id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title mt-4 ms-5" id="offcanvasEndLabel">
                            <img src={require("../images/Group 11.png")} style={{maxWidth: '280px'}} />
                        </h5>
                        <a className="btn me-5 mt-5"  aria-label="Close" data-bs-dismiss="offcanvas">
                            <img src={require("../images/X.png")}/>
                        </a>
                    </div>
                    <div className="offcanvas-body align-items-end justify-content-end">
                        <ul className="row text-white float-end d-block list-unstyled ">
                            <li className="col-md-5 pt-5 ">
                                <img src={require("../images/Rectangle 17.png")}/>
                                <p className="offcanvas-text1">WEBSITES</p>
                            </li>
                            <li className="col-md-5 ">
                                <img src={require("../images/Rectangle 17.png")}/>
                                <p className="offcanvas-text1">Social</p>
                            </li>
                            <li className="col-md-5 ">
                                <img src={require("../images/Rectangle 17.png")}/>
                                <p className="offcanvas-text1">BRANDING</p>
                            </li>
                            <li className="col-md-5 ">
                                <img src={require("../images/Rectangle 17.png")}/>
                                <p className="offcanvas-text1">PORTFOLIO</p>
                                <img src={require("../images/Rectangle 17.png")}/>
                            </li>
                            <li className="col-md-12 offcanvas-text2 pt-5 mt-3" >
                                <ul className="d-inline list-unstyled w-100 ">
                                    <li className="d-inline-block me-5 px-5">Privacy</li>
                                    <li className="d-inline-block me-5 px-5">Terms</li>
                                    <li className="d-inline-block me-5 px-5">Cookies</li>
                                    <li className="d-inline-block me-5 px-5">Contact</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row pt-3 ps-3 mt-0">
                    <div className="col-md-6 home-main-text pt-5 ps-0 mt-5" >
                        <img src={require('../images/Highlight_05.png')} className="position-absolute pt-5 mt-4 ms-3"  />
                        <p className="mt-5 pt-5 ps-5">We create <span style={{color: '#F4ABC4', fontWeight: 'bold'}}>unforgettable websites</span> for you</p>
                        <p className="ps-5 pt-3 home-button-text">High end WEB 3.0 websites for our clients</p>
                        <p className="scroll-down-text z-1">scroll down</p>
                    </div>
                    <div className="col-md-4 mt-4 ps-5 pe-0 z-1 ms-5" >
                        <img src={require("../images/Rectangle 34.png")} className="ms-5 mt-5" />
                        <a className="btn fs-4 px-5 py-4 rounded-pill btn-custom-gray">Explore work</a>
                    </div>
                </div>
                <img src={require("../images/Rectangle 36.png")} className={"position-absolute top-0 end-0"}/>
                <img src={require("../images/Rectangle 37.png")} className={"position-absolute"} style={{top: '73.04%', right: '19.35%'}} />

            </div>

        </div>

    );
}

export default Home;