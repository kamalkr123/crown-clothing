import "./AuthComponent.style.scss";
import SignInForm from "../../Components/SignInForm/SignInForm";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
