"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [language, setLanguage] = useState("");
  const [lavel, setLavel] = useState("");

  const handelLanguageCourseOnChange = (e) => {
    setLanguage(e.target.value);
  };

  const handelLanguageLavelOnChange = (e) => {
    setLavel(e.target.value);
  };

  useEffect(() => {
    const init = async () => {
      const { Input, Select, initTE } = await import("tw-elements");
      initTE({ Input, Select });
    };
    init();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("tag", tag);

      const response = await axios.post(
        "https://smg.sisimpur.xyz/api/v1/admin/notices/store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  return (
    <>
      <section className="w-full">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className=" w-96 mx-auto bg-slate-50 border rounded-xl md:p-16 xl:p-8">
            <h2 className="mb-10 font-bold text-2xl text-center">Create Tag</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="relative mb-5" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputText"
                  placeholder="Tag"
                  name="tag"
                  onChange={(e) => {
                    handelLanguageCourseOnChange(e);
                  }}
                />
                <label
                  for="exampleFormControlInputText"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  language Course
                </label>
              </div>
              <div className="relative mb-5" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputText"
                  placeholder="Tag"
                  name="tag"
                  onChange={(e) => {
                    handelLanguageLavelOnChange(e);
                  }}
                />
                <label
                  for="exampleFormControlInputText"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Lavel
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
