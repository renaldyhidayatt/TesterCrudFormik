import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../redux/actions";
import { usersServices } from "../services";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function CreateUpdate({ props, match }) {
  const { id } = match.params;

  const isAddMode = !id;
  const dispatch = useDispatch();

  const initialValues = {
    nama: "",
    alamat: "",
    umur: "",
    nohp: ""
  };
  const { message } = useSelector((state) => state.message);

  const validationSchema = Yup.object().shape({
    nama: Yup.string().required("Nama is required"),
    alamat: Yup.string().required("Alamat is required"),
    umur: Yup.string().required("Umur is required"),
    nohp: Yup.string().required("Nomor is required")
  });

  function onSubmit(data, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      CreateUser(data, setSubmitting);
    } else {
      UpdateUser(id, data, setSubmitting);
    }
  }

  function CreateUser(data, setSubmitting) {
    dispatch(createUser(data))
      .then(() => {
        props.history.push("/");
      })
      .catch(() => {
        setSubmitting(false);
      });
  }

  function UpdateUser(id, data, setSubmitting) {
    dispatch(updateUser(id, data))
      .then(() => {
        props.history.push("/");
      })
      .catch(() => {
        setSubmitting(false);
      });
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => {
        const [user, setUser] = useState({});

        useEffect(() => {
          if (!isAddMode) {
            // get user and set form fields
            // axios.get(`https://my-json-server.typicode.com/afifbasya/reactjs-redux/users/${id}`).then(res => {
            //   const fields = ['nama', 'alamat', 'umur', 'nohp'];
            //   fields.forEach(field => setFieldValue(field, user[field], false));
            //     setUser(res.data);
            //     console.log(res.data);
            // })
            usersServices.getById(id).then((user) => {
              const fields = ["nama", "alamat", "umur", "nohp"];
              fields.forEach((field) =>
                setFieldValue(field, user[field], false)
              );
              setUser(user);
            });
          }
        }, []);
        return (
          <Form>
            <h1>{isAddMode ? "Add User" : "Edit User"}</h1>
            {message && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}
            <div className="form">
              <div className="form-group">
                <label>Nama</label>
                <Field
                  name="nama"
                  type="text"
                  className={
                    "form-control" +
                    (errors.nama && touched.nama ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="nama"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label>Alamat</label>
                <Field
                  name="alamat"
                  type="text"
                  className={
                    "form-control" +
                    (errors.alamat && touched.alamat ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="alamat"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label>Umur</label>
                <Field
                  name="umur"
                  type="text"
                  className={
                    "form-control" +
                    (errors.umur && touched.umur ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="umur"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label>Nohp</label>
                <Field
                  name="nohp"
                  type="text"
                  className={
                    "form-control" +
                    (errors.nohp && touched.nohp ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="nohp"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Save
              </button>
              <Link to={isAddMode ? "." : ".."} className="btn btn-link">
                Cancel
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateUpdate;
