import { useState } from "react";
import { useSignInMutation, useSignUpMutation } from "../../Store/Sign.api";
import { useNavigate } from "react-router-dom";

const SignHook = () => {
  const navigate = useNavigate();
  const [sign_up] = useSignUpMutation();
  const [sign_in] = useSignInMutation();
  const [error, setError] = useState({ email: false, pass: false });

  const checkInputs = (email, pass) => {
    if (email === "") {
      setError({ email: true });
      return;
    }

    if (pass === "") {
      setError({ pass: true });
      return;
    }

    setError({ email: false, pass: false });
  };

  const signUpHandaler = async (email, pass) => {
    checkInputs(email, pass);
    if (error.email || error.pass) {
      return;
    }

    const response = await sign_up({
      email: email,
      password: pass,
    });

    if (response?.data?.token) {
      navigate("/sign-in");
    }
  };

  const signInHandaler = async (email, pass) => {
    checkInputs(email, pass);
    if (error.email || error.pass) {
      return;
    }

    const response = await sign_in({
      email: email,
      password: pass,
    });

    if (response?.data?.token) {
      navigate("/dashboard");
    }
  };

  return { signUpHandaler, signInHandaler, error };
};

export default SignHook;
