import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div id="my_modal_3" className="w-[600px]">
        <div className="modal-box bg-white text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            {/* Full name */}
            <div className="mt-4 space-y-2">
              <span>Full Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-80 px-3 border bg-white text-black rounded-md"
                {...register("fullName", { required: true })}
              />
              <br />
              {errors.fullName && (
                <span className="text-red-500">Full name is required</span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 border bg-white text-black rounded-md"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" && "Invalid email format"}
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-2 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 border bg-white text-black rounded-md"
                {...register("password", { required: true, minLength: 8 })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">
                  {errors.password.type === "required" &&
                    "Password is required"}
                  {errors.password.type === "minLength" &&
                    "Password must be at least 8 characters long"}
                </span>
              )}
            </div>
            {/* Submit button */}
            <div className="flex justify-around mt-2">
              <button className="bg-pink-500 px-3 py-1 text-white rounded-md">
                Signup
              </button>
              {/* Link to Login */}
              <p>
                Have an Account?{" "}
                <Link to="/" className="cursor-pointer text-pink-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
