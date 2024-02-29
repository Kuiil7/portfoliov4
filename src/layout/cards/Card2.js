import React from "react";

const Card2 = (props) => {

  return (
<div className="card ">
<div className="card-image ">
<figure className="image ">
<img src={props.images} alt={props.alt}   />
</figure>
</div>
<div className="card-content">
<div className="media">
<div className="media-left">
<p className="title is-size-5 has-text-dark">{props.title}</p>
</div>
</div>
<div className="content ">
<p className="subtitle is-size-6 is-size-6-mobile"> <strong>Description: </strong> {props.description}</p>
<p className="subtitle is-size-6 is-size-6-mobile"><strong>My Duties: </strong>{props.myDuty}</p>
<p className="subtitle is-size-6 is-size-6-mobile"><strong>Built with: </strong>{props.builtWith}<a href={props.url2} > {props.url2} </a></p>
<p className="subtitle is-size-6 is-size-6-mobile"><strong>Dimension: </strong>{props.dimension}</p>
<p className="subtitle is-size-6 is-size-6-mobile"><strong>Status: </strong>  <button className="button is-primary is-light ">{props.status}</button>
</p>

</div>
</div>
</div>
  );
}
export default Card2;