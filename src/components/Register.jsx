const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card shrink-0 w-full max-w-lg shadow-lg shadow-red-400">
        <h3 className="text-5xl font-bold text-center py-10">
          Create an Account!
        </h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input input-bordered text-lg"
              name="username"
              required
            />
          </div>
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
              <span className="label-text text-lg">Passwoed</span>
            </label>
            <input
              type="passwoed"
              placeholder="Passwoed"
              className="input input-bordered text-lg"
              name="passwoed"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">File</span>
            </label>
            <input type="file" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-400 hover:bg-red-600 text-red-900 hover:text-white text-xl font-semibold">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
