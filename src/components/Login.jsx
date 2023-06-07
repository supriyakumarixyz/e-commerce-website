import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container  mb-3">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4 className="text-center font-weight-bold">Login</h4>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div>
              <p className="mt-2">Didn't have an account? Register.</p>
              <Link to="/register">
                <button type="submit" className="btn btn-success mt-2">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
