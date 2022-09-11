import RegisterPage from "modules/Auth/Register";

const Register = () => {
  return (
    <div className="py-2">
      <main className="max-w-[110rem] mx-auto flex-1 px-5 sm:px-11">
        <div className="round-glow-1"></div>
        <div className="round-glow-2"></div>
        <div className="round-glow-3 hidden lg:block"></div>
        <RegisterPage />
      </main>
    </div>
  );
}

export default Register;