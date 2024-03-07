
import React from 'react'
import ReactPlayer from 'react-player'
import Icons from '../assets/icons/Icons'

const AboutMe = () => {
  const mainContent = 
  
   
  <section className="hero  has-background-light is-fullheight">




<div className="has-text-centered ">
<p className="title is-3 has-text-centered mt-2 mb-0">About Me - J. Merino </p>
<p className="is-size-3 has-text-centered ">
<a className="ml-1 " href="mailto:jgamerino@gmail.com">
  <i className="fa-solid fa-envelope fa-1x mr-1"></i></a>

<a  href="https://github.com/kuiil7"><i className="fab fa-github fa-1x "></i> </a>

<a href="https://www.linkedin.com/in/joe-merino-8298b6193/"><i className="fab fa-linkedin fa-1x "></i> </a>

  
   </p>


</div>

  <div className="hero-body">
    <div className="">


<div class="columns is-flex-wrap-wrap has-text-centered  ">

  <div class="column is-4">
    
  <span>

    <p className="title appear-text is-3 ">Accessibility</p>
    <p>As a native of the Dominican Republic, I lost my hearing at a young age before emigrating to the United States. Language and communication is something I intentionally focus on every day given this background as a trilingual individual. In my professional career I have confronted the challenge of how to leverage English, Spanish, and American Sign Language to disseminate information in in the areas of Sales and Marketing. These challenges could not have been overcome without self-taught skills that I have acquired over time such as Information Technology, Web Design and Development, Graphic Design, and Video Production skills to name a few.
</p>
    </span>


  </div>
  <div class="column is-4">
  <ReactPlayer url='https://youtu.be/-AFKr0027R0' controls muted width='100%' height='100%'/>
  </div>



  <div class="column is-4">
  <span>
 <p className="title appear-text is-3">Inclusion</p>
<p>
I have had the privilege of working for two Fortune 500 companies (MCI WorldCom and AT&T) and as an independent contractor and linguistics graduate student at Gallaudet University. My time at Gallaudet as a student, I created, migrated, and designed 8 different campus unit's CMS sites including third-party 5 ePublication newsletter editions that foregrounded the need to use video given that ASL is a visual language that, unlike a written text, requires motion to be transmitted.  In both sectors, combining the utilization of restrictive Content Management Systems and red-flag atmosphere was a dead end for the innovation of a visual language.
</p>
  </span>

  </div>
  <div class="column is-4">
  <ReactPlayer url='https://youtu.be/NMk8dpbSN6w' controls muted width='100%' height='100%'/>

  </div>

  <div class="column is-4">
  <span>
      <p className="title appear-text is-3">Flexibility</p>
      <p>To find a solution to the challenges listed above, I attended The George Washington University’s Bootcamp program to gain a solid foundation in programming and made the transition to Web Development to better implement the use of ASL videos in code. Today, I am a Full Stack Developer specializing in MongoDB, Express, React, and Node. I have gained a deep understanding of HTML and CSS as well as an introduction into JavaScript. Utilizing React, using reusable components, and managing their own state has made creating innovative interactive UIs a huge hurdle to overcome.
  </p>
      </span>

  </div>
  <div class="column is-4">
  <ReactPlayer url='https://youtu.be/HyCeErhF0oI' controls muted width='100%' height='100%'/>
  </div>
</div>

   
    </div>
  </div>
  <Icons />
</section>


  return (
    <>
{mainContent}

    </>
  );
}

export default AboutMe;
