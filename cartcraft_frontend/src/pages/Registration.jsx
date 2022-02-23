import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Actions/userAction";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
              acceptTerms: false,
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string()
                .min(2, "To Short Name")
                .required("First Name is required")
                .matches(
                  /^[aA-zZ\s]+$/,
                  "First Name  can contain only Charatcters"
                ),
              lastName: Yup.string().required("Last Name is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required")
                .matches(
                  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                  "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                ),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
              acceptTerms: Yup.bool().oneOf(
                [true],
                " You Must Accept Our Terms & Conditions "
              ),
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
                    <Field
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      className={
                        "form-check-input " +
                        (errors.acceptTerms && touched.acceptTerms
                          ? " is-invalid"
                          : "")
                      }
                    />

                    {/* Open Modal For terms And Condition */}
                    <label
                      className="form-check-label"
                      htmlFor="autoSizingCheck"
                    >
                      I accept the
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span style={{ color: "blue", cursor: "pointer" }}>
                          Terms of use & Privacy Policy
                        </span>
                      </a>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-scrollable">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Terms of use & Privacy Policy
                              </h5>
                            </div>
                            <div class="modal-body">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Consequuntur illo cum, ducimus, quis
                              voluptatum amet eveniet quisquam quod omnis harum
                              necessitatibus voluptas facere. Laborum officia et
                              assumenda voluptate corporis vitae. Lorem ipsum
                              dolor sit amet consectetur adipisicing elit. Animi
                              consequatur asperiores ab! Excepturi, repudiandae!
                              Velit dolorem quae recusandae unde reiciendis! In
                              commodi vero dolorem repudiandae laboriosam,
                              praesentium nemo eveniet quae at eligendi culpa
                              ratione et corrupti rem. Iure, et vitae. Lorem
                              ipsum dolor sit, amet consectetur adipisicing
                              elit. Cum molestiae quas suscipit qui sequi nulla
                              aut labore! Facere voluptates laborum iste in
                              sapiente pariatur nihil! Nostrum corporis adipisci
                              dolore distinctio nesciunt at deserunt cupiditate
                              consequatur impedit, dignissimos ea debitis harum
                              magnam inventore excepturi libero rerum
                              temporibus. Earum, eum, aliquid rem optio
                              repellendus nostrum facilis ipsa est quia, labore
                              provident facere qui modi odit! Consequatur
                              dolorum, vitae mollitia nihil quasi nostrum
                              maiores sit voluptatem. Quos, voluptates error.
                              Aspernatur, obcaecati ea ipsam, nesciunt commodi
                              libero tempore velit recusandae dolorem minus
                              ducimus, id iure maxime dolores perspiciatis
                              aliquam autem inventore magni blanditiis laborum.
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-4">
                    submit
                  </button>
                  <div className="mt-4 text-center">
                    <p>
                      Have an account with us ?
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        Login Here
                      </Link>
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
