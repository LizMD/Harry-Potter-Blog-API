import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row">
        {store.ravenclaw.map((e, i) => {
          return (
            <div className="col-md-3">
              <div className="card mx-3 mt-5">
                <img src={e.image} className="card-img-top" alt=""></img>
                <div className="card-body">
                  <h5 className="card-title">Name: {e.name}</h5>
                  <p className="card-text">Gender: {e.gender}</p>
                  <p className="card-text">Date of Birth: {e.dateOfBirth}</p>
                  <Link to={`/single/${i}`} className="btn btn-dark" key={i}>
                      See more
                  </Link>
                  <button
                    onClick={() => {
                      actions.addFav(e.name);
                    }}
                    className="btn btn-dark m-2"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/">
        <button className="btn btn-dark m-3">Back home</button>
      </Link>
    </div>
  );
};
