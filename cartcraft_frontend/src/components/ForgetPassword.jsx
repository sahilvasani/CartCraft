import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <form action="/sendemail" method="post">
        <div className="my-2 mt-5 ">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Foget Password
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Forget
                  </h5>
                  <button
                    type="button"
                    class="btn-close btn btn-outline-danger"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="mb-3  p-2">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label mx-2 text-primary mt-1"
                  >
                    User Name
                  </label>
                  <input
                    type="email"
                    class="form-control mx-2"
                    id="exampleFormControlInput1"
                    placeholder="Enter email"
                  />
                </div>

                <div class=" d-grid gap-2 col-6 mx-auto mb-2">
                  <button type="button" class="btn btn-primary ">
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
