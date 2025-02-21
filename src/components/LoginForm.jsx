import { useContext, useState } from "react";
import Input from "./Input";
import { FaExclamationCircle } from "react-icons/fa";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false)
  const navigate = useNavigate()
  const {getToken} = useContext(AuthContext)

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log({ email, password });

    if (email == "prueba@gmail.com" && password == "1234") {
       getToken().then(() => {
        return navigate('/discover')
       })
    }

    setHasError(true)
    return false
  };

  const handleChangeInput = (evt, type) => {
    if (type == "email") {
      setEmail(evt.target.value);
    }

    if (type == "password") {
      setPassword(evt.target.value);
    }
  };

  return (
    <form
      className="flex flex-col justify-start mt-8 h-full"
      onSubmit={handleSubmit}
    >
      <Input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(evt) => handleChangeInput(evt, "email")}
      />

      <Input
        type="password"
        placeholder="Password"
        onChange={(evt) => handleChangeInput(evt, "password")}
      />

      <span className={`text-red-600 mt-8 ${hasError ? "block" : "hidden"}`}>
        <FaExclamationCircle className="my-auto float-left" />
        <span className="ml-5">Email or password are incorrect. Please, try again</span>
      </span>

      <button
        type="submit"
        className="bg-pink-500 self-end px-3 py-2 text-white rounded mt-10 hover:bg-pink-400"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
