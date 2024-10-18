import LoginForm from "./components/LoginForm";

function Login() {
  return (
    <div className="w-full h-screen body-font font-poppins flex items-center justify-center">
      <section className="flex flex-row justify-center align-center border-2 border-pink-300 rounded h-100 w-2/3">
        <div className="p-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/2">
          <h1 className="text-5xl font-semibold text-white">Musicly.io</h1>

          <p className="text-white font-light pt-7">
            The next generation music player
          </p>
        </div>

        <div className="form p-14 bg-white w-1/2 flex flex-col">
          <h1 className="text-5xl font-semibold text-pink-600">Login</h1>

          <LoginForm />
        </div>
      </section>
    </div>
  );
}

export default Login;
