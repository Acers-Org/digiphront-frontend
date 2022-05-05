import "./RequestDemo.css";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useFormik } from "formik";
import { Spinner } from "react-bootstrap";
import * as Yup from "yup";
import API from "../../utils/Backend";
import Messages from "../../components/works/Messages";
import { useState } from "react";

function RequestDemo() {
  const [messages, setMessages] = useState("");
  const [closeForm, setCloseForm] = useState(false);
  const validationSchema = Yup.object().shape({
    school_name: Yup.string().required("School name is required"),
    category: Yup.string().required("Category of school is required"),
    email: Yup.string()
      .email("School Email is not valid")
      .required("School Email address is required"),
    phone: Yup.string()
      .min(11, "Phone number must be between 11 and 15 characters")
      .max(15, "Phone number must be between 11 and 15 characters")
      .required("Phone number is required!"),
  });
  const handleRequestDemo = async (values) => {
    try {
      values.contact = { email: values.email, phone: values.phone };
      const res = await API.post("/api/schools", values);
      if (res.data.success) {
        setMessages("Your request has been submitted successfully.");
        setCloseForm(true);
      }
    } catch (e) {
      if (e.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // setMessages(e.response.data.message);
        console.log(e.response.data);
        console.log(e.response.status);
        //console.log(messages);
        //return <Messages message={e.response.data.message}/>
      }
    }
  };
  const formik = useFormik({
    initialValues: {
      school_name: "",
      category: "",
      email: "",
      phone: "",
      contact: {
        email: "",
        phone: "",
      },
      approved: true,
      school_logo: "image_url",
    },
    onSubmit: handleRequestDemo,
    validationSchema,
  });

  return (
    <Layout>
      <section className="demo">
        <div className="d-flex justify-content-center alignt-items-center">
          <div className="col-md-8 col-sm-12 py-3 px-3">
            {messages && <Messages messages={messages} />}
            {!closeForm && (
              <form
                action=""
                className="form w-100 py-3 px-3"
                onSubmit={formik.handleSubmit}
              >
                <h1>
                  Welcome to <span className="digi">Digi</span>
                  <span className="phront">Phront</span>{" "}
                </h1>
                <p>
                  Fill the information below to get your school on board. Our
                  team will contact you within 48th hours for the next steps.
                  Thank you!
                </p>

                <div className="d-flex flex-column">
                  <label htmlFor="school name">School Name</label>
                  <input
                    type="text"
                    name="school_name"
                    id="school_name"
                    value={formik.values.school_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.school_name && formik.touched.school_name ? (
                    <span className="error">{formik.errors.school_name}</span>
                  ) : null}
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="category">
                    School Category: (University, colledge, O-level)
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.category && formik.touched.category ? (
                    <span className="error">{formik.errors.category}</span>
                  ) : null}
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="email">School Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <span className="error">{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="phone number">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <span className="error">{formik.errors.password}</span>
                  ) : null}
                </div>
                <button
                  className="btn text-uppercase btn-block btn-primary w-100 mt-3"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {!formik.isSubmitting ? (
                    "Submit"
                  ) : (
                    <Spinner animation="border" variant="light" />
                  )}
                </button>

                <div className="d-flex justify-content-between mt-3 align">
                  <div className="checkbox">
                    {/* <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  value={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
                <label htmlFor="rememberMe"> Remember me</label> */}
                  </div>
                  <h5>
                    {" "}
                    <Link to="/login" className="text-capitalize">
                      {" "}
                      Already onboard? login
                    </Link>{" "}
                  </h5>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default RequestDemo;
