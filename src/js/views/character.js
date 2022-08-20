import { useEffect, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Character = (props) => {
  let { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
  }, []);
  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark mt-4">
      <div className="col-md-6 px-0"> 
      <img src={store.gryffindor[params.name].image} className="card-img-top" alt=""></img>
      </div> 
        <div className="col-md-6 px-0">
          <h1>{store.gryffindor[params.name].name}</h1>
        </div>
        <div className="col-md-6 px-0">
          Specie: {store.gryffindor[params.name].species}
        </div>
        <div className="col-md-6 px-0">
          Gender: {store.gryffindor[params.name].gender}
        </div>
        <div className="col-md-6 px-0">
          House: {store.gryffindor[params.name].house}
        </div>
        <div className="col-md-6 px-0">
          Date of Birth: {store.gryffindor[params.name].dateOfBirth}
        </div>
        <div className="col-md-6 px-0">
          Year of Birth: {store.gryffindor[params.name].yearOfBirth}
        </div>
        <div className="col-md-6 px-0">
          Ancestry: {store.gryffindor[params.name].ancestry}
        </div>
        <div className="col-md-6 px-0">
          Eyes Colour: {store.gryffindor[params.name].eyeColour}
        </div>
        <div className="col-md-6 px-0">
          Hair Colour: {store.gryffindor[params.name].hairColour}
        </div>
      </div>
      <Link to="/demo">
        <button className="btn btn-dark m-3">Back Gryffindor</button>
      </Link>
    </div>
  );
};
