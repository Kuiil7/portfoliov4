import React from "react";
import Card from "../layout/cards/Card_4by3"
import {GamesData} from "../assets/data/GamesData";

const TicGame = () =>{
  return (
    <>
<main aria-labelledby="games projects">
  <section className="hero is-light is-fullheight">
    <h1 className="title has-text-centered mt-5 ">GAMES PROJECTS</h1>
      <div className="container">
        <div className="columns  scrolling-wrapper scrolling-hidden ">
          {GamesData.map(GamesData => (
<div className="column  px-5" key={GamesData.id}>
<Card
title={GamesData.title}
myDuty={GamesData.myDuty}
description={GamesData.description}
builtWith={GamesData.builtWith}
images={GamesData.images}
alt={GamesData.alt}
repo={GamesData.repo}
demo={GamesData.demo}
url={GamesData.url}
status={GamesData.status}
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
export default TicGame;