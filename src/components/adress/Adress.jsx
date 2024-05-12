import React, { useState } from "react";
import "./Adress.css";

const Adress = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [house, setHouse] = useState("");

  const handleSubmit = (el) => {
    el.preventDefault();
    let NewUser = {
      name,
      lastname,
      region,
      city,
      adress,
      house,
    };
    setName("");
    setLastName("");
    setRegion("");
    setCity("");
    setAdress("");
    setHouse("");
    console.log(NewUser);
  };

  return (
    <>
      <section className="adress">
        <div className="container">
          <p className="adress-title">
            <span>Home</span> / Shop / Checkout
          </p>
          <p className="adress-title2">Billing Address</p>
          <form onSubmit={handleSubmit} action="">
            <div className="inputs">
              <input
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
                type="text"
              />
              <input
                value={lastname}
                required
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="inputs">
              <input
                value={region}
                required
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Select a country / region"
                type="text"
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Town / City"
                type="text"
              />
            </div>
            <div className="inputs">
              <input
                value={adress}
                required
                onChange={(e) => setAdress(e.target.value)}
                placeholder="Street Address"
                type="text"
              />
              <input
                value={house}
                required
                onChange={(e) => setHouse(e.target.value)}
                placeholder="House number and street name"
                type="text"
              />
            </div>
            <button className="adress-btn">Create</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Adress;
