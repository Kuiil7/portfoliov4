import React from 'react';
import moving_head from "../assets/videos/moving_head.mp4"

const Engineering = () => {
 return (
<>
<main aria-labelledby="engineering projects">
<section className="hero is-fullheight overlay3">

         
<video autoPlay={true} muted loop className="main_bkg_vid">
<source src={moving_head} type="video/mp4"/>
Your browser does not support the video tag.
</video>
  <div className="hero-body ">
  <div className="overlay  "></div>

    <div className="has-background-black  p-3">
      <p className="title has-text-white">
        Assistive Technology Engineering
      </p>
     
      <p className="subtitle is-6 has-text-white "> My life story revolves around working and living with asssistive technology (AT) for inclusion and accessibility purposes. I have had the privilege of working in the schools, government, finance sector, and private employers dealing with AT and navigate through its complex human and technical challenges to come to a viable solution.  
      </p>

   
    </div>
  </div>
</section>
</main>
</>
);
}

export default Engineering;