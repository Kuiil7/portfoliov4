import React from 'react';
import Card2 from '../layout/cards/Card2'
import {InclusionData} from '../assets/data/InclusionData';
import inc2 from '../assets/gifs/inc2.gif'

const Inclusion = () => {
 return (
<>
<main aria-labelledby="inclusive design projects">
  <section className="hero has-background-grey-lighter is is-fullheight">
    <nav className="level">
      <div className="level-item has-text-centered mt-3">
        <div>
          <img src={inc2} alt="inclusion sign in ASL"  />
          <h1 className="title">Inclusive Web Design</h1>
        </div>
      </div>
    </nav>

<div className="container">
  <h2 className="subtitle ">Gallaudet University</h2>
 <div className="columns scrolling-wrapper scrolling-hidden is-flex-wrap-wrap">
    {InclusionData.map(InclusionData => (
    <div className="column is-half px-5  " key={InclusionData.id}>

<Card2
title={InclusionData.title}
myDuty={InclusionData.myDuty}
description={InclusionData.description}
builtWith={InclusionData.builtWith}
images={InclusionData.images}
alt={InclusionData.alt}
demo={InclusionData.demo}
url={InclusionData.url}
status={InclusionData.status}
url2={InclusionData.url2}
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

export default Inclusion;