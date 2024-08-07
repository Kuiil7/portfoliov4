import {NavLink} from "react-router-dom";
import jigsaw3 from "../assets/videos/jigsaw3.mp4"
import bio_bkg_4 from "../assets/images/bio_bkg_4.jpg"

const Main = () => {

  return (
<>

<section className="hero is-fullheight"  style={{ position: 'relative', backgroundImage: `url(${bio_bkg_4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>


  <div className="hero-body ">
    
    <div style={{width: "40%" }}>
      
      <p className="title">Joe merino</p>
      <p className="subtitle">
        <span></span>A creative and innovative project manager with an extensive technical background, adept at transforming challenges into reality while prioritizing accessibility and inclusion.</p>
      
      <div className=" ">
       <div className="tabs ">   
  <ul >
    <NavLink className="navbar-item2  navbar-item-portfolio " to="/portfolio"><i class="fa-regular fa-address-card mr-1  "></i>Portfolio</NavLink>
    <NavLink className="navbar-item2 navbar-item-portfolio   " to="/aboutme"><i class="fa-regular fa-address-card mr-1 navbar-item-portfolio  "></i>About Me</NavLink>
  </ul>
</div>
      </div>
    </div>
  </div>
</section>
</>

  );
}

export default Main;
