import React from 'react';
import bio_bkg_4 from "../assets/images/bio_bkg_4.jpg"
import {Link} from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <section className="hero is-fullheight" style={{ position: 'relative', backgroundImage: `url(${bio_bkg_4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
   

        <div className="hero-body hero-body2" >
          <div className="background-paragraph">
          <p className=" is-italic ">
          I am passionate about technical creativity and innovation, particularly in the accessibility and inclusion space. With a Master's degree in Linguistics, a full-stack development certification, and extensive experience in assistive technology, I have worked with various organizations to advance digital accessibility and inclusion. My background includes roles as a Senior Assistive Technology Engineering Analyst, Project and Operations Administrator, and Outreach Consultant, where I supported accessibility standards, managed assistive technology initiatives, and engaged with diverse stakeholders. I am dedicated to bridging gaps in the disability space by leveraging my technical skills and expertise in accessibility, aiming to create a more open and inclusive digital environment for everyone.   
           </p> 
          <p className="is-size-3 mt-3" >
              <Link className="ml-1 navbar-item3" href="mailto:jgamerino@gmail.com">
                <i className="fa-solid fa-envelope fa-1x mr-1"></i>
              </Link>
              <Link href="https://github.com/kuiil7" className=" navbar-item3">
                <i className="fab fa-github fa-1x mr-1"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/joe-merino-8298b6193/" className=" navbar-item3">
                <i className="fab fa-linkedin fa-1x"></i>
              </Link>
            </p>

         
          </div>
        </div>
        
      </section>
    </>
  );
}

export default AboutMe;
