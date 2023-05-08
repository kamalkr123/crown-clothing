import "./SignUpForm.style.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentAuth,
} from "../../Utils/Firebase/FirebaseUtils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFromField] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFromField({ ...formField, [name]: value });
  };

  const resetFormFields = () => {
    setFromField(initialFormFields);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentAuth(user, { displayName });
      resetFormFields(initialFormFields);
    } catch (error) {
      console.log("an error occured", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>{" "}
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handleInputChange}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleInputChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
