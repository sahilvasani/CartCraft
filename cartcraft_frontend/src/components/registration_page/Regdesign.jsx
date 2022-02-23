import React from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiGmail, mdiLock } from "@mdi/js";

// npm install @mdi/js @mdi/react

const Regdesign = () => {
  return (
    <>
      <div className="row h-25">
        <div className="col-md-2 pt-5">
          <img
            className="Clarent"
            src="./images/Clarent_Logo.svg"
            alt="Login_Graphics"
          />
        </div>
        <div className="col-md-8 pt-5">
          <span>|</span> {"  "}Cart - Craft
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img
            className="computer"
            src="./images/Login_Graphics.svg"
            alt="Login_Graphics"
          />
        </div>

        <div className="col-md-4">
          <form>
            <div className="container mt-4">
              <h2>Sign Up</h2>
              <div className="mt-5">
                <div class="input-group">
                  <div class="input-group-text ">
                    <Icon
                      path={mdiAccount}
                      title="User Profile"
                      size={1}
                      color="grey"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInputGroup"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div class="input-group">
                  <div class="input-group-text bg-light">
                    <Icon
                      path={mdiAccount}
                      title="User Profile"
                      size={1}
                      color="grey"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInputGroup"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div class="input-group">
                  <div class="input-group-text bg-light">
                    <Icon
                      path={mdiGmail}
                      title="User Profile"
                      size={1}
                      color="grey"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInputGroup"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div class="input-group">
                  <div class="input-group-text bg-light">
                    <Icon
                      path={mdiLock}
                      title="User Profile"
                      size={1}
                      color="grey"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInputGroup"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div class="input-group">
                  <div class="input-group-text bg-light">
                    <Icon
                      path={mdiLock}
                      title="User Profile"
                      size={1}
                      color="grey"
                    />
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="autoSizingInputGroup"
                    placeholder="Confirm Password"
                  />
                </div>

                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label class="form-check-label" for="autoSizingCheck">
                    I accept the{" "}
                    <span style={{ color: "blue" }}>Terms of use</span> &{" "}
                    <span style={{ color: "blue" }}>Privacy Policy</span>
                  </label>
                </div>

                <button type="button" class="btn btn-primary mt-4">
                  Sign Up
                </button>
              </div>

              <div class="mt-4 text-center">
                <p>
                  Have an account with us ?{" "}
                  <span style={{ color: "blue" }}>Login here</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Regdesign;
