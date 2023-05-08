import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../../Utils/Firebase/FirebaseUtils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./SignInForm.style.scss";
import { useDispatch } from "react-redux";
import { startLoginWithGoogle } from "../../actions/UserActions";

const initialFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFromField] = useState(initialFormFields);
  const { email, password } = formField;
  const { setIsAuthenticated, setIsLoading } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFromField({ ...formField, [name]: value });
  };

  const signInWithGoogle = () => {
    //
    //
    dispatch(startLoginWithGoogle());
  };

  const resetFormFields = () => {
    setFromField(initialFormFields);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await signInAuthUserWithEmailAndPassword(email, password);
      setIsAuthenticated(true);
      setIsLoading(false);
      resetFormFields();
    } catch (error) {
      setIsLoading(false);
      console.log("an error occured", error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          name="email"
          onChange={handleInputChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          name="password"
          onChange={handleInputChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
