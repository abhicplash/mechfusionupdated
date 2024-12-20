import React from "react";
import "./ServiceList.css";
import { servicelist } from "../../utils/servicesList";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <div className="ServiceList-Container">
      <div className="serviceWrapper">
        <span className="mainhead">MECHFUSION</span>
        <p>
          With years of expertise in the industry, we pride ourselves on
          delivering innovative solutions that streamline your production
          processes and bring your ideas to life with precision and efficiency.
          Our dedicated team of skilled professionals utilizes cutting-edge
          technology and software to deliver high-quality designs, prototyping,
          and manufacturing services that exceed expectations. We are committed
          to provide personalized attention and customized solutions to help you
          achieve your goals.
        </p>
        {servicelist.map((service) => (
          <Link to={`/services/${service.id}`} className="cardLink">
          <div className="ServiceCard">
            <img src={service.image} alt="" key={service.id} />
            <div className="serviceCardDeatils">
              <span className="head">{service.serviceName}</span>
              <span className="para">
                {service.services.map((list) => (
                  <li key={list.serviceID}>{list.subService}</li>
                ))}
                {/* <Link
                  className="servicePageLink"
                  to={`/services/${service.id}`}
                >
                  <span>Explore More</span>
                </Link> */}
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
