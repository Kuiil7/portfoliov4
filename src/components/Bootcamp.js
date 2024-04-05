import React from 'react';
import Card from '../layout/cards/Card_4by3'
import {BootcampData} from '../assets/data/BootcampData';

const Bootcamp = () => {
 return (
<>
<main aria-labelledby="bootcamp projects">
  <section className="hero has-background-grey-lighter is is-fullheight">
    <h1 className="title  has-text-centered mt-4 ">BOOTCAMP PROJECTS</h1>
      <div className="container">
        <div className="columns  scrolling-wrapper scrolling-hidden is-flex-wrap-wrap ">
          {BootcampData.map(BootcampData => (
            <div className="column is-6 px-5" key={BootcampData.id}>
              <Card
                title={BootcampData.title}
                myDuty={BootcampData.myDuty}
                description={BootcampData.description}
                builtWith={BootcampData.builtWith}
                images={BootcampData.images}
                alt={BootcampData.alt}
                repo={BootcampData.repo}
                demo={BootcampData.demo}
                url={BootcampData.url}
                status={BootcampData.status}
/>
</div>
))}
 </div>
 </div>
</section>
</main>
</>
);
}

export default Bootcamp;