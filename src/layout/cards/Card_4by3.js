import React from "react";

const Card = (props) => {

  return (
<div className="card pt-5 px-5">
  <div className="card-image ">
    <figure className="image">
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
  <p className="subtitle is-size-5 is-size-6-mobile"><strong>Built with: </strong>{props.builtWith}<a href={props.url2} > {props.url2} </a></p>
<div className="has-text-centered">
  <a href={props.repo}><button className="button is-info is-outlined mr-2 ">Repo</button></a>
  <a href={props.demo}><button className="button is-info is-outlined ">Demo</button></a>
      </div>  
    </div>
  </div>
</div>
  );
}
export default Card;