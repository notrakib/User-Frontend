import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Sign = (props) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState({ email: false, pass: false });

  const signUpHandaler = async () => {
    if (emailRef.current.value === "") {
      setError({ email: true });
      return;
    }

    if (passRef.current.value === "") {
      setError({ pass: true });
      return;
    }

    setError({ email: false, pass: false });

    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passRef.current.value,
      }),
    });

    const data = await response.json();

    if (data.token) {
      emailRef.current.value = "";
      passRef.current.value = "";
    }

    console.log(data);
  };

  const signInHandaler = async () => {
    if (emailRef.current.value === "") {
      setError({ email: true });
      return;
    }

    if (passRef.current.value === "") {
      setError({ pass: true });
      return;
    }

    setError({ email: false, pass: false });

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passRef.current.value,
      }),
    });

    const data = await response.json();

    if (data.token) {
      emailRef.current.value = "";
      passRef.current.value = "";
    }

    console.log(data);
  };

  const navigationHandaler = () => {
    emailRef.current.value = "";
    passRef.current.value = "";
    !props.meta ? navigate("/sign-up") : navigate("/sign-in");
  };

  return (
    <div class="flex h-screen justify-center items-center">
      <div class="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-1/4 pt-16 pb-16 pr-14 pl-14">
        <div class="flex flex-row">
          <img src="/icons/icons8-stack-100.png" width={35} alt="None" />
          <p class="text-3xl font-bold ml-2 text-gray-500">Stack</p>
        </div>
        <p class="text-xl font-bold mt-5 text-gray-600">
          {props.meta ? "Sign Up" : "Sign In"} to join with Stack
        </p>

        <p class="mt-10 text-sm mb-1">Email</p>
        <div
          class={`w-full rounded-xl border-4 ${
            error.email ? "border-red-100" : "border-[#e7dff1]"
          }`}
        >
          <input
            ref={emailRef}
            class="w-full p-2.5 pl-4 outline-none rounded-lg border-[1px] border-purple-400"
          ></input>
        </div>
        <p class="text-orange-600 text-sm">
          {error.email ? "This field is required" : ""}
        </p>

        <p class="mt-10 text-sm mb-1">Password</p>
        <div
          class={`w-full rounded-xl border-4 ${
            error.pass ? "border-red-100" : "border-[#e7dff1]"
          }`}
        >
          <input
            ref={passRef}
            type="password"
            class="w-full p-2.5 pl-4 outline-none rounded-lg border-[1px] border-purple-400"
          ></input>
        </div>
        <p class="text-orange-600 text-sm">
          {error.pass ? "This field is required" : ""}
        </p>

        <button
          onClick={props.meta ? signUpHandaler : signInHandaler}
          class="w-full h-12 bg-[#6941c6] text-white text-lg font-bold rounded-lg mt-7"
        >
          {props.meta ? "Sign Up" : "Sign In"}
        </button>

        <p class="mt-7 text-gray-400">
          Already have an account?{" "}
          <button class="text-blue-500" onClick={navigationHandaler}>
            {props.meta ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Sign;
