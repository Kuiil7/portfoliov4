import {NavLink} from "react-router-dom";
import jigsaw3 from "../assets/videos/jigsaw3.mp4"

const Main = () => {

  return (
<>

<section className="hero is-fullheight" >
<video
          autoPlay={true}
          muted
          loop
          className="main_bkg_vid"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover', // This ensures the video covers the section area
          }}
        >
          <source src={jigsaw3} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

  <div className="hero-body ">
    
    <div  className="background-paragraph">
      
      <p className="title mb-2" style={{ color: "white" }}>Joe Merino</p>
      <p className="is-italic">
        When all else fails, always take matters into your own hands.</p>
      
      <div className=" ">
       <div className="tabs ">   
  <ul >
  <NavLink className="navbar-item3    " to="/aboutme"><i className="fa-regular fa-address-card mr-1   "></i>About Me</NavLink>
    <NavLink className="navbar-item3   " to="/portfolio"><i className="fa-regular fa-address-card mr-1  "></i>Portfolio</NavLink>

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
