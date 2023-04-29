import React from "react";
import "./Domain.css";
const Domain = () => {
  return (
    <section className="domain">
      <div className="container">
        <h2 className="title">
          All starts with <span> a domain</span>
        </h2>
        <div className="search-section">
          <input type="text" placeholder="Search ..." />
          <i className="fas fa-search"></i>
        </div>
        <div className="domain-section">
          <div className="domain-box">
            <span>Domain</span>
            <span>Per year</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <div className="domain-box">
            <span className="com">Com,</span>
            <span>22.99$</span>
          </div>
          <button className="btn see-more">SEEMORE</button>
        </div>


      </div>
    </section>
  );
};

export default Domain;
