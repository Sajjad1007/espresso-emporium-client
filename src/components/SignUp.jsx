import { use } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restOfTheForm } = Object.fromEntries(
      formData.entries()
    );
    const newUser = { email, ...restOfTheForm };
    createUser(email, password)
      .then(() => {
        fetch("https://espresso-emporium-server-l75z.onrender.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Your account has been created successfully!",
                icon: "success",
                draggable: true,
              });
            }
            navigate("/");
          });
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
        <form onSubmit={handleSignUp} className="card-body px-7 py-6">
          <h2 className="text-primary font-semibold font-rancho text-3xl text-center">
            Sign Up Your Account
          </h2>
          <hr className="text-base-200" />
          <fieldset className="fieldset">
            <label className="label text-primary font-semibold text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            <label className="label text-primary font-semibold text-base">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Your Phone Number"
              required
            />
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
            <button
              type="submit"
              className="btn btn-neutral mt-2 bg-primary text-white text-base"
            >
              Sign Up
            </button>
            <div className="font-medium text-sm text-primary text-center">
              Already have an account?&nbsp;
              <Link to="/sign-in" className="link link-hover text-primary">
                Sign In
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
