import { use } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signInUser, setIsLoggedIn } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        Swal.fire({
          title: "You have signed in successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
        setIsLoggedIn(true);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Sorry! Your credentials are invalid!",
          draggable: true,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-68px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <form onSubmit={handleSignIn} className="card-body px-7 py-6">
          <h2 className="text-primary font-semibold font-rancho text-3xl text-center">
            Sign In To Your Account
          </h2>
          <hr className="text-base-200" />
          <fieldset className="fieldset">
            <label className="label text-primary font-semibold text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email"
              required
            />
            <label className="label text-primary font-semibold text-base">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Your Password"
              required
            />
            <div>
              <a className="link link-hover font-medium text-sm text-primary">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-neutral mt-2 bg-primary text-white text-base"
            >
              Sign In
            </button>
            <div className="font-medium text-sm text-primary text-center">
              Don't have an account?&nbsp;
              <Link to="/sign-up" className="link link-hover text-primary">
                Sign Up
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
