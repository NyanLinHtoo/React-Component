const SignUp = () => {
  return (
    <form className="max-w-md mx-auto p-8 my-24 rounded-tl-3xl rounded-br-3xl border-2 drop-shadow-lg shadow-black">
      <h2 className="text-purple-800 mb-6 text-center text-2xl">Sign Up!</h2>
      <div className="mb-5">
        <label htmlFor="name" className="text-slate-800">
          Username
        </label>
        <input
          type="name"
          id="name"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="text-slate-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="text-slate-800">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="text-slate-800">
          Confirm Password
        </label>
        <input
          type="password"
          id="password"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="agree" type="checkbox" value="" className="w-4 h-4 mt-1" />
        </div>
        <label htmlFor="agree" className="pl-2 text-slate-800 text-sm">
          I agree with{" "}
          <a href="" className="text-sm text-bold">
            Terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-xl w-full text-sm px-5 py-2.5 text-center mb-2">
        Sign Up
      </button>
      <p className="text-sm font text-black pt-3">
        Already have an account?{" "}
        <a href="#" className="font-medium text-purple-500 hover:underline">
          Sign in
        </a>
      </p>
    </form>
  );
};

export default SignUp;
