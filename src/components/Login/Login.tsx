const Login = () => {
  return (
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
        <a href="#" className="font-medium text-purple-500 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default Login;
