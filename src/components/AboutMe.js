import React from 'react';
import bio_bkg_4 from "../assets/images/bio_bkg_4.jpg"
import {Link} from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <section className="hero is-fullheight" style={{ position: 'relative', backgroundImage: `url(${bio_bkg_4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
   

        <div className="hero-body hero-body2" >
          <div className="background-paragraph">
          <h1 className="title is-3" style={{ color: 'white' }}>About Me</h1>
          <p className="is-italic mb-4">
          I am a doctoral student at Gallaudet University in the Accessible Human-Centered Computing and Policy program and an NSF Research Trainee in Accessible AI, researching the intersection of AI and disability — focusing on data collection and sign language recognition for the Deaf and Hard of Hearing community.
           </p>
           <p className="is-italic mb-4">
          As a Graduate Research Assistant, I led the technical design and deployment of a full-scale panoptic studio for multimodal AI training data and built accessible, ASL-optimized learning tools with React.
           </p>
           <p className="is-italic mb-4">
          My background also includes accessibility consulting roles at AT&amp;T, Citi, Procter &amp; Gamble, and the Washington State Department of Rehabilitation, where I led WCAG 2.2 audits, built enterprise accessibility testing programs, and managed ADA/Section 508 compliance initiatives.
           </p>
           <p className="is-italic">
          I hold a bachelor's degree in Communication, a master's degree in Linguistics, a full-stack development certificate (MERN) from George Washington University, and a master's degree in Accessible Human-Centered Computing and Policy, all from Gallaudet University except where noted. I am dedicated to bridging gaps in the disability space by leveraging my technical skills and expertise in accessibility, aiming to create a more open and inclusive digital environment for everyone.
           </p>
           <div className="container">
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <Link className="navbar-item3 navbar-item" to="https://github.com/kuiil7">
            <i className="fab fa-github fa-2x"></i>
            <p className="m-2">GitHub</p>
          </Link>
        </div>
        <div className="column is-half has-text-centered">
          <Link className="navbar-item3 navbar-item" to="https://www.linkedin.com/in/joe-merino-8298b6193/">
            <i className="fab fa-linkedin fa-2x"></i>
            <p className="m-2">LinkedIn</p>
          </Link>
        </div>
      </div>
    </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default AboutMe;
