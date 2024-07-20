import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Animated background */}
      <motion.div
        className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <div className="h-full flex items-center justify-center">
          <motion.div
            className="text-white text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}>
            &lt;/&gt;
          </motion.div>
        </div>
      </motion.div>

      {/* Right side - Introduction */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-md">
          {/* <motion.h2
            className="text-3xl font-light mb-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}>
            Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-5xl font-bold mb-6 text-indigo-600"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}>
            Nyan Lin Htoo
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}>
            Full-Stack Developer | Frontend Developer
          </motion.p>
          <motion.button
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            View My Work
          </motion.button> */}
          <motion.div
            // className="text-white text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}>
            <form className="max-w-sm mx-auto my-48 p-8 rounded-tl-3xl rounded-br-3xl border-2 drop-shadow-lg shadow-black">
              <h2 className="text-purple-800 mb-6 text-center text-2xl">
                Welcome Back!
              </h2>
              <div className="mb-5">
                <label htmlFor="email" className="text-slate-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@flowbite.com"
                  className="block rounded p-2 text-sm mt-3 w-full"
                />
              </div>
              <div className="mb-5" x-data="{ show: true }">
                <label htmlFor="password" className="text-slate-800">
                  Password
                </label>
                <input
                  type="show ? 'password' : 'text'"
                  id="password"
                  className="block rounded p-2 text-sm mt-3 w-full"
                />
              </div>

              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 mt-1"
                  />
                </div>
                <label htmlFor="remember" className="pl-2 text-slate-800">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-xl w-full text-sm px-5 py-2.5 text-center mb-2">
                Sign In
              </button>
              <p className="text-sm font text-black pt-3">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-purple-500 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
