import "./Contact.css";
import Layout from "../../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="socials d-flex justify-content-evenly w-100">
        <div className="card">
          <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
          <h3 className="sm-name">Email</h3>
          <p className="sm-text">Contact us via email:</p>
          <a href="mailto:digiphront@gmail.com" className="sm-info">
            digiphront@gmail.com
          </a>
        </div>
        <div className="card">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <h3 className="sm-name">Phone</h3>
          <a href="tel:+234-905-400-7484" className="sm-text">
            +234-905-400-7484
          </a>
          <a href="tel:+7-843-672-431" className="sm-info">
            +7-843-672-431
          </a>
        </div>
        <div className="card">
          <i class="fa fa-connectdevelop" aria-hidden="true"></i>
          <h3 className="sm-name">Socials</h3>
          <p className="sm-text">Connect with us via</p>
          <div className="sm-info d-flex justify-content-between">
            <a href="www.google.com" className="sm-handle">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="www.google.com" className="sm-handle">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="www.google.com" className="sm-handle">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="www.google.com" className="sm-handle">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
