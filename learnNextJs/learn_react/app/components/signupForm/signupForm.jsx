import "./signupFormStyle.css";
const SignupForm = () => {
  return (
    <div>
      <form action="" className="signup__container">
        <div className="signup__input_group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" className="form_input" />
        </div>
        <div className="signup__input_group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" className="form_input" />
        </div>
        <div className="signup__input_group">
          <label htmlFor="user_email">Email</label>
          <input type="text" id="user_email" className="form_input" />
        </div>
        <div className="signup__input_group">
          <button className="signupBtn">Signup</button>{" "}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
