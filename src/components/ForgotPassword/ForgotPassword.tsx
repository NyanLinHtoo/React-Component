const ForgotPassword = () => {
  return (
    <form className="max-w-sm mx-auto my-48 p-8 rounded-tl-3xl rounded-br-3xl border-2 drop-shadow-lg shadow-black">
      <h2 className="text-purple-800 mb-6 text-center text-2xl">
        Forgot Password?
      </h2>
      <p className="text-sm pb-3">
        Enter{" "}
        <strong>
          <em>your email address</em>
        </strong>{" "}
        below and we will send you a link to reset your password.
      </p>
      <div className="mb-5">
        <input
          type="email"
          id="email"
          placeholder="name@flowbite.com"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-xl w-full text-sm px-5 py-2.5 text-center mb-2">
        Send
      </button>
      <p className="text-sm font text-black pt-3">
        Remembered your password?{" "}
        <a href="#" className="font-medium text-purple-500 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
};

export default ForgotPassword;
