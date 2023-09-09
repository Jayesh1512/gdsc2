import React from "react";
import css from "./base.module.css";
import photo2 from "./resources/Photo3.png";
import "./Page3.css";

function Page3() {
  return (
    <div className={css.page1}>

<div className='page3-head'>
        
        </div>
      <div className="page3">
        <div className="page3-subhead">Our Perspective</div>

        <hr className="page3-hr"></hr>

        <div className="perspective">
          <div className="perspective-text">
            We're a community-driven initiative aiming to bridge the gap between
            research and practice , develop evolutionary thinking and network
            throughout the process. We believe in connecting fellow developers ,
            spreading stimulative ideas and working for a solution driven team.
          </div>
          <img src={photo2}></img>
        </div>
      </div>
    </div>
  );
}

export default Page3;
