import "./style.css";
import SignupForm from "../components/signupForm/signupForm";
const Signup = () => {
  return (
    <>
      <div className="main__container">
        <p className="signup__header">Signup</p>
        <div className="signup__col">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
