import React from "react";
import { login } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is required")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  function handleSubmit(values, { setSubmitting }) {
    let dataToSubmit = {
      email: values.email,
      password: values.password
    };

    dispatch(login(dataToSubmit));
    setSubmitting(false);
  }

  return (
    <div className="col-md-12">
      <h1 className="text-primary">GO</h1>
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { errors, touched, isSubmitting } = props;
            return (
              <Form>
                <div className="form-group">
                  <label>email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Username"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>

                  <Field
                    type="password"
                    name="password"
                    placeholder="Email"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting && (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}
                    Login
                  </button>
                  <Link to="/register" className="btn btn-link">
                    Login kalo udh punya yah
                  </Link>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export { Login };
