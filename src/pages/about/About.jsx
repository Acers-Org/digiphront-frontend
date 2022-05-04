import React from "react";
import AboutImg from "../../assets/about-img.png";
import "./About.css";
import "../../components/contact/Contact.css";
import Contact from "../../components/contact/Contact";

function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <h1 className="header"> About Us</h1>
            <p className="sub-header">
              We provide a seamless way for A-level Schools to reach students
              outside their location.
            </p>
            <div className="section1 d-flex justify-content-between py-4">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={AboutImg} alt="About" className="img-fluid" />
              </div>
              <div className="abt-text col-lg-6 col-md-6 col-sm-12">
                <p className="text">
                  DigiPhront is a school management system tailored toward the
                  needs of A-level schools in the Nigeria region. We are a team
                  of tech savvy females with the goal of promoting online
                  learning within the Nigerian Education System.{" "}
                </p>
                <p className="text">
                  {" "}
                  During the COVID-19 pandemic, the lockdown crippled
                  educational activities and it was difficult for schools to
                  reach their students. The post covid world has hence opened
                  people up to the possibility og online learning even without
                  the physical restrictions. DigiPhront is here to ensure that
                  this possibility becomes a reality in every educational
                  insititututions. One of such educational institutions are
                  A-level schools in the Nigerian Region. Students have been
                  know to travel from long distance to attend specific A-level
                  school for quality learning and with the rise of insecurity in
                  the country, some students are forced to study in A-level
                  schools within their locality.{" "}
                </p>
                <p className="text">
                  {" "}
                  With DigiPhront, A-level schools can now reach students
                  regardless of their location within the country. DigiPhront
                  provide tools for online learning and teaching as well as
                  management of student and teacher activities. See our features
                  page for more details.{" "}
                </p>
              </div>
            </div>
            <div className="section2 mb-5">
              <h2 className="second-header">How We Operate</h2>
              <div className="cards d-flex justify-content-between">
                <div className="card m-5">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <h3 className="card-header">Strategy</h3>
                  <p className="card-text">
                    Seek to understand your challenges and needs
                  </p>
                  <div className="green"></div>
                </div>
                <div className="card">
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                  <h3 className="card-header">Result</h3>
                  <p className="card-text">
                    Suggest solution that match your needs.
                  </p>
                  <div className="green"></div>
                </div>
                <div className="card m-5">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                  <h3 className="card-header">expertise</h3>
                  <p className="card-text">
                    Customize solution to your school's needs
                  </p>
                  <div className="green"></div>
                </div>
                <div className="card">
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <h3 className="card-header">Support</h3>
                  <p className="card-text">Support you and your customers</p>
                  <div className="green"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact/>
    </>
  );
}

export default About;
