import Login from "../components/Login";
import Register from "../components/Register";

const RegisterLogin = () => {
  return (
    <div className="flex items-center justify-center w-[]">
      <Register />
      <div className="text-5xl text-red-600 divider lg:divider-horizontal divider-success">
        &#8592; &#8594;
      </div>
      <Login />
    </div>
  );
};

export default RegisterLogin;
