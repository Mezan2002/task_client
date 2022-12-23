import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [sector, setSector] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/sectors")
      .then((res) => res.json())
      .then((data) => setSector(data))
      .catch((error) => console.log(error));
  }, []);
  const handleSave = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const acceptTerms = form.acceptTerms.value;
    const userData = {
      name,
      sector: value,
      acceptTerms: true,
    };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => setSector(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen my-10 md:my-0">
        <div className="hero-content flex-col-reverse items-center md:flex-row-reverse md:px-5">
          <div className="md:w-1/2">
            <div className="card neomorphic mx-auto shadow-xl">
              <form onSubmit={handleSave} className="card-body">
                <h2 className="card-title">
                  <p className="text-center mb-10 text-xl">
                    Please enter your name and pick the Sectors you are
                    currently involved in.
                  </p>
                </h2>
                <div className="mb-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Sectors</span>
                    </label>
                    <select
                      name="sector"
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                      className="select select-bordered"
                      required
                    >
                      {sector.map((sec) => (
                        <option
                          className={`${sec.main ? "font-black" : null} ${
                            sec.sub ? "font-bold" : null
                          }`}
                          key={sec}
                        >{`${sec.sectorName}`}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control mt-5">
                    <label className="flex items-center cursor-pointer w-[135px]">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary mr-3"
                        required
                        name="acceptTerms"
                      />
                      <span className="label-text">Agree to terms</span>
                    </label>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">Save</button>
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-1/2 lg:mt-[-380px] md:relative md:text-left text-center">
            <h1 className="lg:text-4xl md:text-2xl text-3xl text-primary font-bold capitalize">
              Welcome to our community
            </h1>
            <p className="py-3 w-8/12 md:w-full mx-auto">
              Provide your name and your working sector and follow us
            </p>
            <img
              src="https://i.ibb.co/HDSFB0v/Screenshot-2022-12-23-233201-removebg-preview.png"
              alt=""
              className="lg:absolute top-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
