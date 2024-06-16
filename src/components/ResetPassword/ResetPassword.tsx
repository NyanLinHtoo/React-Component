const ResetPassword = () => {
  return (
    <form className="max-w-sm mx-auto my-48 p-8 rounded-tl-3xl rounded-br-3xl border-2 drop-shadow-lg shadow-black">
      <h2 className="text-purple-800 mb-6 text-center text-2xl">
        Set your new password!
      </h2>
      <div className="mb-5 text-sm">
        <label htmlFor="password" className="text-slate-800">
          New password
        </label>
        <input
          type="password"
          id="password"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>

      <div className="mb-5 text-sm">
        <label htmlFor="password" className="text-slate-800">
          Confirm new password
        </label>
        <input
          type="password"
          id="password"
          className="block rounded p-2 text-sm mt-3 w-full"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-xl w-full text-sm px-5 py-2.5 text-center mb-2">
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;
