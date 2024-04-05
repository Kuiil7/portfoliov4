import {NavLink} from "react-router-dom";
import jigsaw3 from "../assets/videos/jigsaw3.mp4"


const Main = () => {

  return (
<>
<section class="hero is-fullheight ">
<video autoPlay={true} muted loop className="main_bkg_vid">
<source src={jigsaw3} type="video/mp4"/>
Your browser does not support the video tag.
</video>
  <div class="hero-body">
    <div class=" has-text-centered">
    <div className=" " >
<div className="overlay  "></div>   
<div className="has-text-centered  ">       
          <i class="fa-solid  mr-5 fa-6x appear-text4 p-5 fa-brain   has-text-danger"></i>
        <i class="fa-solid  mr-5 fa-6x appear-text fa-ear-deaf  has-text-info"></i>
        <i class="fa-solid  mr-5 fa-6x appear-text4 fa-wheelchair-move t has-text-success"></i>
        <i class="fa-solid   fa-6x appear-text fa-eye  has-text-warning"></i>
        </div>
        <p  className="subtitle is-6 slide-text ml-2 mb-1 mt-3 has-text-centered has-text-white  " > It is time to get out of the dark a</p>
        <p  className="subtitle is-6 slide-text2 ml-2 mb-1  has-text-centered has-text-white  " > and fill the gap within the disability space.</p>
        <p  className="is-italic appear-text   has-text-centered has-text-white"> -jm.</p>
       
        <div className="has-text-centered  ">
       <div class="tabs is-centered ">   
  <ul >
    <NavLink className="navbar-item   mr-2 navbar-item-portfolio" to="/portfolio"><i class="fa-regular fa-address-card mr-1  "></i>Portfolio</NavLink>
    <NavLink className="navbar-item navbar-item-portfolio   " to="/aboutme"><i class="fa-regular fa-address-card mr-1 navbar-item-portfolio "></i>About Me</NavLink>
  </ul>
</div>
      </div>
       </div>
    </div>
  </div>
</section>
</>

  );
}

export default Main;
