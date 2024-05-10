import {NavLink, Link} from 'react-router-dom';
import gears from "../assets/videos/gears.mp4"


const Portfolio = ()=> {
    return (
      <section className="hero is-fullheight  ">   
  
        <video autoPlay={true} muted loop className="main_bkg_vid">
          <source src={gears} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

        <div className="hero-body  ">
          <div className=" has-text-centered ">
           <div className="overlay  "></div>
              <p className="title has-text-white appear-text">Projects and Demos</p>
   <div className="columns  ">
    <div className="column has-background-primary  slide-text ">
      <NavLink className="navbar-item navbar-item-portfolio has-text-white  " to="/api"  >  
        <i class="fa-solid  fa-arrow-right-arrow-left fa-2x mb-2 mr-1  " aria-hidden="true"></i>
            <p > API Projects</p>
        </NavLink>
      </div>
  <div className="column has-background-grey-dark  fade-in-2">
    <NavLink className="navbar-item navbar-item-portfolio has-text-white " to="/bootcamp">
      <i className="fa-solid  fa-graduation-cap fa-2x mb-2" aria-hidden="true"></i>
        <p className=" ">Bootcamp</p></NavLink>
  </div>
  <div className="column  has-background-danger slide-text2">
    <Link className="navbar-item navbar-item-portfolio has-text-white " to="/static">  
      <i className="fa-solid fa-display fa-2x mb-2 mr-2 " aria-hidden="true"></i>
        <p className=" ">Static Websites</p></Link>
  </div>
  </div>
      
  <div className="columns">
  <div className="column i has-background-link fade-in-2 is-justify-content-center is-align-items-center">
  <Link className="navbar-item navbar-item-portfolio  has-text-white"  to="/inclusion"> 
  <i class="fa-solid fa-hands-asl-interpreting fa-2x"></i><span><p>Inclusion</p></span>
 </Link>
  </div>
  
  <div className="column has-background-info slide-text2">
    <Link className="navbar-item navbar-item-portfolio  has-text-white " to="/gallery">  
      <i className="fa-solid mb-2 fa-paintbrush fa-2x mb-2  " aria-hidden="true"></i>
        <p className=" ">Graphic Design</p></Link>
  </div>
  <div className="column has-background-black slide-text">
   <Link className="navbar-item navbar-item-portfolio  has-text-white  " to="/engineering">  
     <i class="fa-solid fa-cog fa-spin fa-2x"></i>
      <i class="fa-solid fa-cog fa-spin fa-spin-reverse  "></i>
           <p className=" "> AT Engineering</p></Link>
  </div>
  </div>
  </div>
  </div>
    </section>

    );
  }
  
  export default Portfolio;
  