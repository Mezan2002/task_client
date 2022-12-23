import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* <div className="card neomorphic mt-12 w-4/12 mx-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <p className="text-center mb-10 text-2xl">
              Please enter your name and pick the Sectors you are currently
              involved in.
            </p>
          </h2>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Save</button>
          </div>
        </div>
      </div> */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <div className="card neomorphic mx-auto shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <p className="text-center mb-10 text-2xl">
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                  </p>
                </h2>
                <div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Sectors</span>
                    </label>
                    <select className="select select-bordered">
                      <option disabled selected>
                        Pick one
                      </option>
                      <option>Star Wars</option>
                      <option>Harry Potter</option>
                      <option>Lord of the Rings</option>
                      <option>Planet of the Apes</option>
                      <option>Star Trek</option>
                    </select>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-[-400px] relative">
            <h1 className="text-4xl text-primary font-bold capitalize">
              Welcome to our community
            </h1>
            <p className="py-3">
              Provide your name and occupation for next action
            </p>
            <img
              src="https://i.ibb.co/HDSFB0v/Screenshot-2022-12-23-233201-removebg-preview.png"
              alt=""
              className="absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
