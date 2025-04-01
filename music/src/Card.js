import React from 'react';

const Card = (props) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img
        src={props.imgURL}
        className="card-img-top"
        alt={props.albumTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{props.albumTitle}</h5>
        <p className="card-text">{props.albumDescription}</p>
        <a
          href={props.linkURL}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
