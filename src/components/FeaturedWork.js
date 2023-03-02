import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedWork(){
    return (
        <div className="container-fluid" style={{background: '#060930'}}>
            <img src={require('../images/Rectangle 50.png')} className="position-absolute end-0" style={{marginTop: '-1px'}}/>
            <div className="row">
                <p className="featured-work-text d-flex z-1 align-items-center justify-content-center my-5 py-4">Featured Work</p>
                <img src={require("../images/Arrow_11.png")} className="position-absolute" style={{width: '7%', height: '10%', marginLeft: '46%', marginTop: '9%'}}/>
                <img src={require("../images/star1.png")} className="position-absolute z-1" style={{height: '4%', width: '3.1%', transform: "rotate('-31.8deg')", marginLeft: '28%', marginTop: '4%'}} />
                <img src={require("../images/star2.png")} className="position-absolute z-1" style={{height: '2.3%', width: '2.3%', marginLeft: '57%', marginTop: '2%'}} />
                <img src={require("../images/star3.png")} className="position-absolute z-1" style={{height: '3.3%', width: '3.3%', marginLeft: '64%', marginTop: '10%'}} />
            </div>
            <div className="row pt-2 ps-5">
                <div className="col-md-6 ms-5 ps-5 ">
                    <img src={require("../images/Rectangle 48.png")} className="pt-5 ps-5 mt-5"/>

                </div>
                <div className="col-md-4 ms-5 ps-5 pt-5">
                    <img src={require("../images/Rectangle 49.png")} className="pt-5 ps-5 mt-1 ms-5"/>
                </div>
            </div>
            <div className="row ps-5 ms-5 pb-5">
                <div className="col-md-4 ms-5 ps-5">
                    <p className="obsidian-text" style={{marginTop: '-9%'}}>Obsidian</p>
                </div>
                <div className='col-md-7 pb-5 mb-5'>
                    <img src={require("../images/Vector.png")} className="position-relative" style={{marginLeft: '25%', marginTop: '-13%'}}/>
                    <img src={require("../images/Group 8.png")} className="position-absolute" style={{marginLeft: '18%', marginTop: '-29%'}} />
                    <img src={require("../images/Group 9.png")} className="position-absolute" style={{marginLeft: '14%', marginTop: '-18%'}} />
                </div>

            </div>
        </div>

    );
}

export default FeaturedWork;