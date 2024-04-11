
import React from 'react'
import ReactPlayer from 'react-player'
import Icons from './Icons'
import mammoth from '../assets/images/portrait/mammoth.png'
import tresojos from '../assets/images/portrait/tresojos.jpg'
import sc from '../assets/images/portrait/sc.jpg'

const AboutMe = () => {
  return (
    <>
<section className="hero  has-background-light is-fullheight">

<p className="title is-3 has-text-centered mt-2 mb-0">About Me - J Merino </p>
      <p className="is-size-3 has-text-centered ">
        <a className="ml-1 " href="mailto:jgamerino@gmail.com">
          <i className="fa-solid fa-envelope fa-1x mr-1"></i></a>
            <a  href="https://github.com/kuiil7"><i className="fab fa-github fa-1x "></i> </a>
              <a href="https://www.linkedin.com/in/joe-merino-8298b6193/"><i className="fab fa-linkedin fa-1x "></i> </a>
          </p>

  <div className="hero-body">
    <div className="">
       <div className="columns is-flex-wrap-wrap  ">
  
        <div className="column is-4">
          <span>
            <p className="title appear-text is-3 has-text-centered ">Accessibility</p>
            <img src={tresojos} alt="tres ojos lakes dr landmark"   />            
            <p className="is-size-7">Parque Nacional Los Tres Ojos, Santo Domingo, DR.</p>
              <p className="has-text-justified">As a native of the Dominican Republic, I became deaf at a young age before emigrating to the United States. Language and communication are things I intentionally focus on every day, given my background as a trilingual individual. In my professional career, I have confronted the challenge of how to leverage English, Spanish, and American Sign Language to disseminate information in the areas of sales and marketing. These challenges could not have been overcome without the self-taught skills that I have acquired over time, such as information technology, web design and development, graphic design, and video production skills, to name a few.
            </p>
    </span>
  </div>
  <div className="column is-4"><ReactPlayer url='https://youtu.be/-AFKr0027R0' controls muted width='100%' height='100%'/></div>
  
  <div className="column is-4">
    <span>
        <p className="title appear-text is-3 has-text-centered ">Inclusion</p>
        <img src={mammoth} alt="snowboarder at top of mountain"   />
        <p className="is-size-7">At the top of Mammoth mountain, Mammoth Lakes, CA.</p>

           <p className="has-text-justified">I have had the privilege of working for two Fortune 500 companies (MCI WorldCom and AT&T) and as an independent contractor and linguistics graduate student at Gallaudet University. During my time at Gallaudet as a student, I created, migrated, and designed eight different campus units's CMS sites, including five third-party ePublication newsletter editions that highlighted the need to use video given that ASL is a visual language that, unlike a written text, requires motion to be transmitted. In both sectors, combining the utilization of restrictive content management systems with a red-flag atmosphere was a dead end for the innovation of a visual language.</p>
  </span>
  </div>
  
  <div className="column is-4"><ReactPlayer url='https://youtu.be/NMk8dpbSN6w' controls muted width='100%' height='100%'/>
  </div>
  <div className="column is-4">
    <span>
      
      <p className="title appear-text is-3 has-text-centered  ">Flexibility</p>
      <img src={sc} alt="snowboarder at top of mountain"   />
      <p className="is-size-7">Schuchman Center's Opening Ceremony. Gallaudet U., Wash., DC.</p>
      <p className="has-text-justified">To find a solution to the challenges listed above, I attended George Washington University’s Bootcamp program to gain a solid foundation in programming and made the transition to web development to better implement the use of ASL videos in code. Today, I am a full-stack developer specializing in MongoDB, Express, React, and Node. I have gained a deep understanding of HTML and CSS, as well as an introduction to JavaScript. Utilizing React, using reusable components, and managing their own state has made creating innovative interactive UIs a huge hurdle to overcome.</p>
      </span>
  </div>
  <div className="column is-4">
  <ReactPlayer url='https://youtu.be/HyCeErhF0oI' controls muted width='100%' height='100%'/>
  </div>
  </div>
   </div>
  </div>
  <Icons />
  </section>

    </>
  );
}

export default AboutMe;
