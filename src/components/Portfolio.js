import {Link} from 'react-router-dom';


const Portfolio = ()=> {
    return (
      <>
 <section className="hero has-background-light is-fullheight">
  <div className="hero-body container has-text-centered " style={{width: "40%" }}>
    <div className="" >
      <p className="title">Project Demos</p>
  
      <nav className="level">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">   <Link className="navbar-item2  " to="/api"  >  
        <i className="fa-solid  fa-arrow-right-arrow-left fa-5x mb-2 mr-1  " aria-hidden="true"></i>
            <p > API Projects</p>
        </Link></p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading"><Link className="navbar-item2 " to="/static">  
      <i className="fa-solid fa-display fa-5x mb-2 mr-2 " aria-hidden="true"></i>
        <p className=" ">Static Websites</p></Link></p>
  
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
 
 <p className="heading"><Link className="navbar-item2 " to="/inclusion">  
      <i className="fa-solid fa-hands-asl-interpreting fa-5x mb-2 mr-2 " aria-hidden="true"></i>
        <p className=" ">Inclusion</p></Link></p>
  
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
    <p className="heading"><Link className="navbar-item2 " to="/gallery">  
      <i className="fa-solid mb-2 fa-paintbrush  fa-5x mb-2 mr-2 " aria-hidden="true"></i>
        <p className=" ">Graphic Design</p></Link></p>
  
 
    </div>
  </div>
</nav>
    </div>
  </div>
</section>


      
      </>

    );
  }
  
  export default Portfolio;
  