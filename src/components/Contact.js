import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(){
    return (
        <div className="container-fluid" style={{background: '#060930'}}>
            <div className="row pt-5">
                <div className="col-md-7 ps-5 pt-5">
                    <img src={require("../images/Rectangle 54.png")} className="position-absolute" style={{marginLeft: '33%'}} />
                    <img src={require("../images/Rectangle 52.png")} className="position-absolute" style={{marginLeft: '55%'}}/>
                    <p className="position-relative contact-text ps-5 mt-5 pt-5 z-1">Let's create <br/> something special</p>
                </div>
                <div className="col-md-5 ps-5 pt-5 mt-3">
                    <div>
                        <div className="contact2-text z-1 position-absolute pt-5 end-0 mt-5 me-5 pe-4">Contact Us</div>
                        <div className="contact-info-text z-1 position-absolute end-0  me-5 pe-4">example@gmail.com</div>
                        <div className="contact-info-number z-1 position-absolute end-0  me-5 pe-4">+994 0000 0000</div>
                    </div>
                    <div style={{paddingTop: '50%'}}></div>
                    <div>
                        <div className="contact2-text z-1 position-absolute pt-5 end-0 mt-5 me-5 pe-4" >Follow Us</div>
                        <div className="contact-info-text z-1 position-absolute end-0  me-5 pe-4">Instagram</div>
                        <div className="contact-info-number z-1 position-absolute end-0  me-5 pe-4">Facebook</div>
                    </div>

                </div>
            </div>
            <div className="row pb-5">
                <div className="col-md-7 pt-5 pb-5">
                    <img src={require("../images/Group 4.png")} className="position-relative mt-5" style={{marginLeft: '-2%'}}/>
                </div>
            </div>
            <div className="row pt-4 mt-5 pb-1">
                <div className="col-md-7 pt-5 pb-4 my-5 ps-5 ms-5">
                    <img src={require("../images/Group 11.png")} />
                </div>
            </div>
        </div>
    );
}

export default Contact;