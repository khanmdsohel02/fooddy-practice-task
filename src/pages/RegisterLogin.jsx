import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

const RegisterLogin = () => {
  return (
    <div className="lg:flex  items-center justify-center w-[]">
      <Register />
      <div className="text-5xl text-red-600 divider lg:divider-horizontal divider-success mt-20">
        &#8592; &#8594;
      </div>
      <Login />
    </div>
  );
};

export default RegisterLogin;
