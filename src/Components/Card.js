import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  const [like, setLike] = useState(Math.floor(Math.random() * 1000));
  const [comment, setComment] = useState(Math.floor(Math.random() * 500));
  const [minToRead, setMinToRead] =useState(Math.floor(Math.random() * 40));
  const [clicked, setClicked] = useState(false);
  const fa_style = clicked ? { color: "#E53924" } : null;
  const { title, text, name, lastName, img, avatar } = props;
  const clickHandler = () => {
    if (clicked) {
      setLike(like - 1);
      setClicked(false);
    } else {
      setLike(like + 1);
      setClicked(true);
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  

  return (
    <div className="card" data-aos="fade-up">
      <div className="card-img">
        <img className="card-img-top" src={img} alt="Card image cap" />
      </div>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">
          <p className="card-text">{text}</p>
        </div>
        <div className="foot">
          <div className="author">
            <img src={avatar} alt="" className="avatar" />
            <div className="info-block">
              <p className="userName">
                {name} {lastName}
              </p>
              <p className="time">{minToRead} mins read</p>
            </div>
          </div>
          <div className="stats">
            <i
              className="fa fa-lg fa-thumbs-up"
              aria-hidden="true"
              style={fa_style}
              onClick={clickHandler}
            ></i>
            <p>{like}</p>
            <span>|</span>
            <i className="fa fa-lg fa-comments" aria-hidden="true"></i>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
