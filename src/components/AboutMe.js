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
          <p className="subtitle is-6" style={{ color: '#dbdbdb' }}>
          Joe Merino — Doctoral Student, Accessible Human-Centered Computing and Policy, Gallaudet University
           </p>
          <p className="is-italic mb-4">
          I'm a Deaf researcher and full-stack developer, now a doctoral student in Gallaudet University's Accessible Human-Centered Computing and Policy (AHCP) program under Dr. Raja Kushalnagar, specializing in sign language recognition, the Panoptic Studio, and AI/ML/LLMs. I previously served as an NSF Research Trainee (NRT) in Accessible AI — using computer vision, deep learning, human-centered design, and policy to make AI systems work for signed language communities largely left out of mainstream AI pipelines.
           </p>
           <div className="columns">
             <div className="column is-half">
               <p className="has-text-weight-semibold mb-1" style={{ color: '#00d1b2' }}>Computer vision</p>
               <p className="is-italic">
               Most sign language recognition models rely on single-camera data that fails to capture the full spatial range of ASL. I designed and built a panoptic studio scaling well beyond the previously documented camera limits, supporting two active studies — single-camera versus multi-view SLR model performance, and evaluating MediaPipe Holistic across decades of archival Gallaudet footage — while also serving as shared infrastructure for future ASL research.
               </p>
             </div>
             <div className="column is-half">
               <p className="has-text-weight-semibold mb-1" style={{ color: '#00d1b2' }}>Human-computer interaction</p>
               <p className="is-italic">
               I'm lead developer and lead author on LLMChat, an LLM-assisted communication tool integrated with Zoom and OpenAI for Deaf and hard-of-hearing users. I built the frontend, implemented speaker identification, AI context priming, and tone customization, and optimized the backend to cut AI suggestion response time by roughly 50%.
               </p>
             </div>
           </div>
           <p className="is-italic mb-4">
          I presented both lines of work at CSUN 2026, attended DeafTech 2026 in Vienna (May 26-27) as co-author at the first-ever International Conference on Deaf Technologies, and presented at ICCHP in Brno, Czech Republic (July 15-17, 2026).
           </p>
           <div className="columns">
             <div className="column is-half">
               <p className="has-text-weight-semibold mb-1" style={{ color: '#00d1b2' }}>Professional background</p>
               <p className="is-italic">
               Accessibility consulting roles at AT&amp;T, Citi, Procter &amp; Gamble, and the Washington State Department of Rehabilitation, where I led WCAG 2.2 audits, built enterprise accessibility testing programs, and managed ADA/Section 508 compliance initiatives. During my MA in ASL Linguistics at Gallaudet, I led eight campus website redesigns and launched the university's first bilingual ePub newsletter — identifying accessibility gaps firsthand that still shape how I approach AI design today.
               </p>
             </div>
             <div className="column is-half">
               <p className="has-text-weight-semibold mb-1" style={{ color: '#00d1b2' }}>Education &amp; languages</p>
               <p className="is-italic">
               A bachelor's degree in Communication, an MA in ASL Linguistics, and a graduate degree in Accessible Human-Centered Computing and Policy, all from Gallaudet University, along with a Full Stack Web Development certificate (MERN) from George Washington University. I communicate in English, ASL, and Spanish, and I'm dedicated to bridging gaps in the disability space, aiming to create a more open and inclusive digital environment for everyone.
               </p>
             </div>
           </div>
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
