import { useEffect, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Character2 = (props) => {
  let { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
  }, []);
  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark mt-4">
      <div className="col-md-6 px-0"> 
      <img src={store.ravenclaw[params.name].image} className="card-img-top" alt=""></img>
      </div> 
        <div className="col-md-6 px-0">
          <h1>{store.ravenclaw[params.name].name}</h1>
        </div>
        <div className="col-md-6 px-0">
          Specie: {store.ravenclaw[params.name].species}
        </div>
        <div className="col-md-6 px-0">
          Gender: {store.ravenclaw[params.name].gender}
        </div>
        <div className="col-md-6 px-0">
          House: {store.ravenclaw[params.name].house}
        </div>
        <div className="col-md-6 px-0">
          Date of Birth: {store.ravenclaw[params.name].dateOfBirth}
        </div>
        <div className="col-md-6 px-0">
          Year of Birth: {store.ravenclaw[params.name].yearOfBirth}
        </div>
        <div className="col-md-6 px-0">
          Ancestry: {store.ravenclaw[params.name].ancestry}
        </div>
        <div className="col-md-6 px-0">
          Eyes Colour: {store.ravenclaw[params.name].eyeColour}
        </div>
        <div className="col-md-6 px-0">
          Hair Colour: {store.ravenclaw[params.name].hairColour}
        </div>
      </div>
      <Link to="/demo">
        <button className="btn btn-dark m-3">Back Ravenclaw</button>
      </Link>
    </div>
  );
};
