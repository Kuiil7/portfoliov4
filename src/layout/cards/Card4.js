import React from "react";

const Card4 = (props) => {

  return (

<div className="card pt-5 px-5">
<div className="card-image ">
<figure className="image is-4by3">
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
<p className="subtitle is-size-5 is-size-6-mobile"> <strong>Description: </strong> {props.description}</p>
<p className="subtitle is-size-5 is-size-6-mobile"><strong>My Duties: </strong>{props.myDuty}</p>
<p className="subtitle is-size-5 is-size-6-mobile"><strong>Built with: </strong>{props.builtWith}<a href={props.url2} > {props.url2} </a></p>

<p className="subtitle is-size-5 is-size-6-mobile"><strong>Powered By:</strong><a href={props.url} > {props.url} </a></p>


<p className="subtitle is-size-5 is-size-6-mobile"><strong>Status: </strong>  <button className="button is-primary is-light ">{props.status}</button>
</p>



<div className="has-text-centered">
<a href={props.repo}><button className="button is-info is-outlined mr-2 ">Repo</button></a>
<a href={props.demo}><button className="button is-info is-outlined ">Demo</button></a>
</div>
</div>
</div>
</div>

  );
}
export default Card4;