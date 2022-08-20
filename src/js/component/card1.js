import React from "react";
import { Link } from "react-router-dom";

export const Card1 = () => {
	return (
<div className="card mx-4 m-3" style={{width: "18rem"}}>
    <img src="https://p4.wallpaperbetter.com/wallpaper/672/923/822/harry-potter-gryffindor-wallpaper-preview.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Gryffindor</h5>
      <p className="card-text">Gryffindor was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, nerve and determination, to be sorted into his house.</p>
      <hr size="1px"/>
      <Link to="/demo"><button className="btn btn-dark">Find Out More!</button></Link>
    </div>
  </div>
    );
};