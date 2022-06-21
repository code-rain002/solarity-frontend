import { GeneralInfo } from "modules/Auth/GeneralInfo";

const Register = () => {
  return (
    <div className="py-2">
      <main className="max-w-[110rem] mx-auto flex-1 px-5 sm:px-11">
        <div className="round-glow-1 float-left"></div>
        <div className="round-glow-2 float-left"></div>
        <div className="round-glow-3 float-left"></div>
        <GeneralInfo />
      </main>
    </div>
  );
}

export default Register;