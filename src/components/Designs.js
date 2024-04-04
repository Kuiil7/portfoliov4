import React from 'react';
import Card2 from '../layout/cards/Card2'
import Card3 from '../layout/cards/Card_pdf'
import {CBTLData} from '../assets/data/CBTLData';
import {ATTData} from '../assets/data/ATTData';
import {ATTData2} from '../assets/data/ATTData2';
import {SCData} from '../assets/data/SCData';
import {YPData} from '../assets/data/YPData';
import {PERData} from '../assets/data/PERData';

const Designs = () => {


 return (
<>
<main aria-labelledby="graphic design portfolio">
  <section className="hero has-background-grey-lighter is-fullheight " >
    <h1 className="title is-2 mt-4 has-text-centered ">Gallaudet University</h1>
    <h2 className="subtitle   has-text-weight-light has-text-centered">Center for Bilingual Teaching and Learning</h2>
  <div className="columns is-flex-wrap-wrap px-3">
{CBTLData.map(CBTLData => (
<div className="column is-half" key={CBTLData.id}>
<Card2
title={CBTLData.title}
myDuty={CBTLData.myDuty}
description={CBTLData.description}
builtWith={CBTLData.builtWith}
images={CBTLData.images}
alt={CBTLData.alt}
repo={CBTLData.repo}
demo={CBTLData.demo}
url={CBTLData.url}
status={CBTLData.status}
dimension={CBTLData.dimension}
/>
  </div>
))}
 </div>


 <h2 className="title is-size-5 has-text-weight-light has-text-centered">Schuchman Center</h2>

 <div className="columns is-flex-wrap-wrap px-3">


{SCData.slice(0,7).map(SCData => (
<div className="column is-half" key={SCData.id}>
<Card2
title={SCData.title}
myDuty={SCData.myDuty}
description={SCData.description}
builtWith={SCData.builtWith}
images={SCData.images}
alt={SCData.alt}
repo={SCData.repo}
demo={SCData.demo}
url={SCData.url}
status={SCData.status}
dimension={SCData.dimension}
/>
  </div>
))}
</div>


 <h2 className="title has-text-weight-light mt-4 has-text-centered">Youth Programs</h2>

 <div className="columns is-flex-wrap-wrap px-3">
{YPData.slice(0,6).map(YPData => (
<div className="column is-half" key={YPData.id}>
<Card2
title={YPData.title}
myDuty={YPData.myDuty}
deYPription={YPData.deYPription}
builtWith={YPData.builtWith}
images={YPData.images}
alt={YPData.alt}
repo={YPData.repo}
demo={YPData.demo}
url={YPData.url}
status={YPData.status}
dimension={YPData.dimension}
/>
  </div>
))}
 </div>

 <h2 className="title has-text-weight-light mt-4 has-text-centered">Physical Education & Recreation</h2>

 <div className="columns is-flex-wrap-wrap px-3">
{PERData.slice(0,1).map(PERData => (
<div className="column is-half" key={PERData.id}>
<Card2
title={PERData.title}
myDuty={PERData.myDuty}
deYPription={PERData.deYPription}
builtWith={PERData.builtWith}
images={PERData.images}
alt={PERData.alt}
repo={PERData.repo}
demo={PERData.demo}
url={PERData.url}
status={PERData.status}
dimension={PERData.dimension}
/>
  </div>
))}
 </div>





</section>
</main>
</>
);
}

export default Designs;