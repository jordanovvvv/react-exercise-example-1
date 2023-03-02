import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Design(){
    return (
        <div className="container-fluid">
            <div className="row mt-5 pt-5 ms-5 ps-5">
                <div className="col-md-6 home-main-text mt-5 pt-5 ps-5">
                    <div className="flex-column">
                        <div className="d-flex justify-content-start">We are </div>
                        <div className="d-flex justify-content-center " style={{marginLeft: '-26%'}}>a creative</div>
                        <div className="d-flex justify-content-center custom-design-text" style={{marginLeft: '17%'}}> Design Agency </div>
                        <div className="d-flex justify-content-end home-button-text pt-5" style={{width: '69%', marginLeft: '30%', letterSpacing: '0.5px'}}>
                            <p>
                                We are focused on creating web 3.0 websites, an easy to use content management system where admins can alter or add content to a website.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-md-5 mt-5 ms-5 ps-5 position-relative pt-5 ">
                    <img src={require("../images/Group 14.png")} className="ps-5 pt-3 z-1 position-relative"/>
                    <a className="btn rounded-circle btn-custom-transparent position-relative d-flex flex-column align-items-center justify-content-center z-1">Contact Us</a>
                    <img src={require("../images/Ellipse 2.png")} className="position-absolute " style={{marginTop: '-70%', marginLeft: '15%', filter: 'blur(50px)'}}/>
                </div>

                <img src={require('../images/Rectangle 44.png')} className="position-absolute w-50 pt-5" style={{right: '52%', top: '169%'}} />
            </div>
        </div>
    );
}

export default Design;