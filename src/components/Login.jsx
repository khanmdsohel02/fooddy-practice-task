const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card shrink-0 w-full max-w-lg shadow-lg shadow-red-400">
        <h3 className="text-5xl font-bold text-center py-10">LogIn Here!</h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Your E-mail</span>
            </label>
            <input
              type="email"
              placeholder="Your E-mail"
              className="input input-bordered text-lg"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-lg"
              name="password"
              required
            />
            <label className="label mt-3">
              <a
                href="#"
                className="label-text-alt link link-hover text-red-600  hover:font-bold text-lg"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-400 hover:bg-red-600 text-red-900 hover:text-white text-xl font-semibold">
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
