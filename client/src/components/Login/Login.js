import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateLoginMutation } from "../../service/authJson";
// import { useCreateLoginMutation } from "../../service/authJson";
import { setAccessToken } from "../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
import "./Login.scss";
export const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "andbo2003@gmail.com",
    password: "anbmt113",
  });
  const navigate = useNavigate();
  const [createLogin, response] = useCreateLoginMutation();
  // const error = response?.error?.data ? response?.error?.data : [];
  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //sử lý login
  const handleLogin = (e) => {
    e.preventDefault();
    createLogin(state);
  };
  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("access_token", response?.data?.access_token);
      dispatch(setAccessToken(response?.data));
      navigate("/dashboard/product");
    }
  }, [dispatch, navigate, response?.data, response.isSuccess]);
  console.log("response:", response);
  return (
    <div className="p-5 bg-blue-400 h-[100vh]">
      <div className="bt-form-login-simple-1 bg-white">
        <h1 className="form-heading">Login Clother Hunter</h1>
        <form className="form" autoComplete="off" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="form-input"
              value={state.email}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="form-input"
              value={state.password}
              onChange={handleInputs}
            />
          </div>
          <div className="form-meta">
            <Link className="form-link">Forgot Password</Link>
          </div>
          <button type="submit" className="form-btn">
            {response && !response.isLoading ? (
              "Login"
            ) : (
              <div className="loader"></div>
            )}
            {/* Login */}
          </button>
        </form>
        <div className="form-option">
          Dont&#x27;t have am account?
          <Link>Sign up htmlFor free</Link>
        </div>
      </div>
    </div>
  );
};
