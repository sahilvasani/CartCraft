import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Actions/userAction";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userRegister);
  const { userInfo } = user;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <>
      <div className="row">
        <div className="col-md-7"></div>
        <div className="col-md-4">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required("First Name is required"),
              lastName: Yup.string().required("Last Name is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            })}
            onSubmit={(fields) => {
              dispatch(
                register(
                  fields.firstName,
                  fields.lastName,
                  fields.email,
                  fields.password,
                  fields.confirmPassword
                )
              );
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <div className="container mt-4">
                  <h2>Sign up</h2>
                  <div className="mt-5">
                    <div className="input-group">
                      <div className="input-group-text "></div>
                      <Field
                        placeholder="name"
                        name="firstName"
                        type="text"
                        className={
                          "form-control" +
                          (errors.firstName && touched.firstName
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="input-group">
                      <div className="input-group-text bg-light"></div>
                      <Field
                        placeholder="Lname"
                        name="lastName"
                        type="text"
                        className={
                          "form-control" +
                          (errors.lastName && touched.lastName
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="input-group">
                      <div className="input-group-text bg-light"></div>
                      <Field
                        name="email"
                        placeholder="email"
                        type="text"
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
                  </div>

                  <div className="mt-3">
                    <div className="input-group">
                      <div className="input-group-text bg-light"></div>
                      <Field
                        name="password"
                        placeholder="password"
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="input-group">
                      <div className="input-group-text bg-light"></div>
                      <Field
                        placeholder="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className={
                          "form-control" +
                          (errors.confirmPassword && touched.confirmPassword
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>

                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="autoSizingCheck"
                    >
                      I accept the{" "}
                      <span style={{ color: "blue" }}>Terms of use</span> &{" "}
                      <span style={{ color: "blue" }}>Privacy Policy</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary mt-4">
                    submit
                  </button>
                  <div className="mt-4 text-center">
                    <p>
                      Have an account with us ?{" "}
                      <span style={{ color: "blue" }}>Login here</span>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
