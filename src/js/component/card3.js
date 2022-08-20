import React from "react";
import { Link } from "react-router-dom";

export const Card3 = () => {
	return (
<div className="card mx-4 m-3" style={{width: "18rem"}}>
    <img src="https://p4.wallpaperbetter.com/wallpaper/89/932/17/raven-emblem-hogwarts-hogwarts-claw-hd-wallpaper-preview.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ravenclaw</h5>
      <p className="card-text">Ravenclaw was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours.</p>
      <hr size="1px"/>
      <Link to="/single"><button className="btn btn-dark">Find Out More!</button></Link>
    </div>
  </div>
    );
};