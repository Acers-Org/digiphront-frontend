import loginImg from "../../assets/teacher-signup.png";
import Icon from "../../assets/icon.svg";
import "../login/Login.css";
import "./TeacherSignup.css";
import { Link } from "react-router-dom";

function TeacherSignup() {
  return (
    <section className="login">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          <div className="col-md-7 col-sm-12 img-container">
            <img
              src={loginImg}
              alt="Login"
              className="img-fluid login-img pad"
            />
            <div className="img-text row">
              <img
                src={Icon}
                alt="Digiphront Icon"
                className="img-fluid w-25"
              />
              <h2 className="text-white">
                Welcome to <span className="digi">Digi</span>
                <span className="phront">Phront</span>{" "}
              </h2>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 m-auto">
            <form action="" className=" form w-75">
              <h1 className="text-center">Create Account</h1>

              <div className="d-flex justify-content-between">
                <div className="row w-50">
                  <label htmlFor="fname">First Name</label>
                  <input type="name" name="fname" id="fname" required />
                </div>
                <div className="row w-50">
                  <label htmlFor="lname">Last Name</label>
                  <input type="name" name="lname" id="lname" required />
                </div>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="d-flex justify-content-between">
                <div className="row w-50">
                  <label htmlFor="subject">Subject</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="subject"
                    required
                  >
                    <option value="" disabled selected hidden>
                      {" "}
                      English
                    </option>
                    <option value="english">English</option>
                    <option value="maths">Mathematics</option>
                    <option value="agricultultural Science">
                      Agricultultural Science
                    </option>
                    <option value="economics">Economics</option>
                    <option value="computer science">Computer Science</option>
                  </select>
                </div>
                <div className="row w-50">
                  <label htmlFor="age">Age</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="age"
                    required
                  >
                    <option value="" disabled selected hidden>
                      {" "}
                      24{" "}
                    </option>
                    <option value="24"> 24 </option>
                    <option value="25"> 25</option>
                    <option value="26 "> 26 </option>
                    <option value="27"> 27 </option>
                    <option value="28 "> 28 </option>
                    <option value="29"> 29 </option>
                    <option value="30"> 30 </option>
                    <option value="31 "> 31 </option>
                    <option value="32 "> 32 </option>
                    <option value="33 "> 33 </option>
                    <option value="34 "> 34 </option>
                    <option value="35 "> 35 </option>
                    <option value="36 "> 36 </option>
                    <option value="37 "> 37 </option>
                    <option value="38"> 38</option>
                    <option value="39 "> 39 </option>
                    <option value="40"> 40</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="row w-50">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <div className="row w-50">
                  <label htmlFor="verifyPassword">New Password</label>
                  <input
                    type="password"
                    name="password"
                    id="verifyPassword"
                    required
                  />
                </div>
              </div>

              <button className="btn text-uppercase btn-block btn-primary w-100 mt-3">
                sign up
              </button>

              <div className="sign-in-options d-flex justify-content-between mt-3">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    value="rememberMe"
                  />
                  <label htmlFor="rememberMe"> Remember me</label>
                </div>
                <h5>
                  {" "}
                  <Link to="/login">
                    {" "}
                    Already have an account?{" "}
                    <span className="span">Sign in</span>
                  </Link>{" "}
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherSignup;
