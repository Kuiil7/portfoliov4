import React from "react";
import Card from "../layout/cards/Card_4by3";
import { StaticData } from "../assets/data/StaticData";

const Static = () => {
  return (
    <>
      <main aria-labelledby="static websites projects">
        <section className="hero has-background-grey-lighter is-fullheight">
          <h1 className="title has-text-centered mt-4">STATIC WEBSITES</h1>
          <div className="container">
            <div className="columns scrolling-wrapper scrolling-hidden is-flex-wrap-wrap">
              {StaticData.map((data) => (
                <div className="column is-half px-5" key={data.id}>
                  <Card
                    title={data.title}
                    myDuty={data.myDuty}
                    description={data.description}
                    builtWith={data.builtWith}
                    images={data.images}
                    alt={data.alt}
                    repo={data.repo}
                    demo={data.demo}
                    status={data.status}
                    url={data.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Static;
