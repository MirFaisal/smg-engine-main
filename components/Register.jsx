"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelEmailonChange = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordOnBlur = (e) => {
    let password = e.target.value;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (
      password.length < minNumberofChars ||
      password.length > maxNumberofChars
    ) {
      return false;
    }
    if (!regularExpression.test(password)) {
      alert(
        "password should contain atleast one number and one special character"
      );
      return false;
    }
    setPassword(password);
  };

  const handelFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new formData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error.xhr);
    }
  };

  useEffect(() => {
    const init = async () => {
      const { Input, Ripple, initTE } = await import("tw-elements");

      initTE({ Input, Ripple });
    };
    init();
  }, []);
  return (
    <>
      <section className="h-screen">
        <div className="container h-full mx-auto">
          <div className="g-6 flex h-full items-center justify-center">
            <div className=" bg-slate-50 p-14 rounded-xl">
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-center">
                  Admin Register
                </h2>
              </div>
              <div className="w-96 flex justify-center mx-auto">
                <form
                  onSubmit={(e) => {
                    handelFormSubmit(e);
                  }}
                  className="w-full"
                >
                  {/* <!-- Email input --> */}
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Email address"
                      name="email"
                      onChange={(e) => {
                        handelEmailonChange(e);
                      }}
                    />
                    <label
                      for="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput33"
                      placeholder="Password"
                      name="password"
                      onBlur={(e) => {
                        handelPasswordOnBlur(e);
                      }}
                    />
                    <label
                      for="exampleFormControlInput33"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="inline-block w-full bg-blue-500 rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
