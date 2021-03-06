import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="flex bg-nwgreen items-center justify-center p-12 mt-10">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div className="text-nwgreen text-2xl flex justify-center border-b-2 py-2 mb-4">
            Northwest Login
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-normal mb-2">
              Northwest Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-normal mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center items-center ">
            <button
              className="px-4 text- py-2 rounded text-white inline-block shadow-lg bg-nwgreen "
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
