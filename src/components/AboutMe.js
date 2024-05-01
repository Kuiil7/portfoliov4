
import React from 'react'
import mammoth2 from '../assets/images/portrait/mammoth2.jpg'


const AboutMe = () => {
  return (
    <>
<section className="hero   is-fullheight ">
<img src={mammoth2} alt="snowboarder at top of mountain" className="background-image"  />

   
<div className="hero-body ">
    <div className="has-background-light p-4 mammoth ">
      <div>
      <p class="title ">Joe Merino</p>
      <p class="subtitle is-5">PM | Engineering | | Linguistics | Web Design/Programming | Graphic Design | Video Productions | IT </p>
      <p class="subtitle is-6">I am just a ward-of-state guy doing its own thing. I am passionate about technical creativity and innovations especially in the accessibility and inclusion space. I have had the privilege of working with various companies, universities, and non-profits with each facing the same challenges - how to make digital content more inclusive for Deaf invividuals. For that reason, I have armed myself with all the skills necessary to make it happen. However, my skills are not Deaf-centric limited but beyond as you can see in my portfolio. Feel free to reach out for more. </p>
    
      <p class="subtitle is-6">Thanks for your time!</p>
      <p class="subtitle is-6">J. Merino</p>

      <p className="is-size-3 has-text-centered ">
        <a className="ml-1 " href="mailto:jgamerino@gmail.com">
          <i className="fa-solid fa-envelope fa-1x mr-1"></i></a>
            <a  href="https://github.com/kuiil7"><i className="fab fa-github fa-1x "></i> </a>
              <a href="https://www.linkedin.com/in/joe-merino-8298b6193/"><i className="fab fa-linkedin fa-1x "></i> </a>
          </p>
          </div>
   </div>
  </div>

  </section>

    </>
  );
}

export default AboutMe;
