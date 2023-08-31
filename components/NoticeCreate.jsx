"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const NoticeCreate = () => {
  // country name
  const [countryNames, setCountryName] = useState([]);

  // input field valus
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [min_cgpa, setMin_cgpa] = useState("");
  const [max_age, setMax_age] = useState("");
  const [min_budget, setMin_budget] = useState("");
  const [country, setCountry] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [tag_ids, setTag_ids] = useState([]);
  const [languages, setLanguages] = useState({});
  const [university_id, setUniversity_id] = useState(1);

  // handel input field
  const handelTitleOnChage = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  // handel summery on change
  const handelSummeryOnChange = (e) => {
    setSummery(e.target.value);
  };

  // handel discription field
  const handelDescriptionOnChange = (e) => {
    setDescription(e.target.value);
  };

  // handel cuntry field
  const handelCountryOnChange = (e) => {
    setCountry(e.target.value);
  };
  //handel
  const minCgpaOnChange = (e) => {
    const cgpa = parseFloat(e.target.value);
    setMin_cgpa(cgpa);
  };

  // handel min budget
  const minBudgetOnChange = (e) => {
    const budget = parseInt(e.target.value);
    setMin_budget(budget);
  };

  // handel max age
  const maxAgeOnChange = (e) => {
    const age = parseInt(e.target.value);
    setMax_age(age);
  };

  // handel language
  const languageOnChange = (e) => {
    setLanguages(e.target.value);
  };

  // handel image
  const handelImageOnChange = (e) => {
    setThumbnail(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };

  // handel tag
  const tagOnChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTag_ids(selectedOptions);
  };
  useEffect(() => {
    console.log(tag_ids);
  }, [tag_ids]);

  // handel university on change
  const handelUniversityOnChange = (e) => {
    setUniversity_id(e.target.talue);
  };

  //handel link
  const handelLinkOnChange = (e) => {
    console.log(e.target.value);
    setLink(e.target.value);
  };

  // from submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("summery", summery);
      formData.append("description", description);
      formData.append("link", link);
      formData.append("thumbnail", thumbnail.name);
      formData.append("min_cgpa", min_cgpa);
      formData.append("min_budget", min_budget);
      formData.append("country", country);
      formData.append("tag_ids", tag_ids);
      formData.append("languages", languages);
      formData.append("university_id", university_id);

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
      console.error("Error sending data:", error.xhr);
    }
  };

  // country name api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryName(data))
      .catch((error) => console.log(error.message));
  }, []);

  //   init tailwind
  useEffect(() => {
    const init = async () => {
      const { Input, Select, initTE } = await import("tw-elements");
      initTE({ Input, Select });
    };
    init();
  }, []);

  return (
    <>
      <section className="w-full">
        <h2 className="mb-10 font-bold text-2xl text-center">Create Notice</h2>
        <div className="container mx-auto bg-slate-50 rounded-xl border md:p-16">
          <form action="" onSubmit={handleSubmit}>
            {/* title */}
            <div className="relative mb-5" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputText"
                placeholder="Title"
                value={title}
                name="title"
                onChange={(e) => {
                  handelTitleOnChage(e);
                }}
              />
              <label
                for="exampleFormControlInputText"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Title
              </label>
            </div>

            {/* summery */}
            <div className="relative mb-5" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInputText"
                placeholder="Summery"
                value={summery}
                name="summery"
                onChange={(e) => {
                  handelSummeryOnChange(e);
                }}
              />
              <label
                for="exampleFormControlInputText"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Summery
              </label>
            </div>

            {/* description */}
            <div className="relative mb-5" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Description"
                value={description}
                name="description"
                onChange={(e) => {
                  handelDescriptionOnChange(e);
                }}
              ></textarea>
              <label
                for="exampleFormControlTextarea1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Description
              </label>
            </div>
            {/* country & min cgpa */}

            <div className="flex gap-5">
              {/* country name */}
              <div className="w-full">
                <select
                  data-te-select-init
                  data-te-select-filter="true"
                  value={country}
                  name="country"
                  onChange={(e) => {
                    handelCountryOnChange(e);
                  }}
                >
                  {countryNames.map((country) => {
                    return (
                      <option key={country.ccn3} value={country.ccn3}>
                        {country.name.common}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* min cgpa */}
              <div className="w-full">
                <div className="relative mb-5" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputText"
                    placeholder="Min CGPA"
                    value={min_cgpa}
                    name="min_cgpa"
                    onChange={(e) => {
                      minCgpaOnChange(e);
                    }}
                  />
                  <label
                    for="exampleFormControlInputText"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Min CGP
                  </label>
                </div>
              </div>
            </div>

            {/* min budget and  max age */}
            <div className="flex gap-5">
              {/* min budget */}
              <div className="w-full">
                <div className="relative mb-5" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputText"
                    placeholder="Min Budget"
                    value={min_budget}
                    name="min_budget"
                    onChange={(e) => {
                      minBudgetOnChange(e);
                    }}
                  />
                  <label
                    for="exampleFormControlInputText"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Min Budget
                  </label>
                </div>
              </div>
              {/* max age */}
              <div className="w-full">
                <div className="relative mb-5" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputText"
                    placeholder="Max Age"
                    value={max_age}
                    name="max_age"
                    onChange={(e) => {
                      maxAgeOnChange(e);
                    }}
                  />
                  <label
                    for="exampleFormControlInputText"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Min Age
                  </label>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div>
              <div class="mb-3">
                <label
                  for="formFile"
                  class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Choose Your Image
                </label>
                <input
                  class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  name="file"
                  onChange={(e) => {
                    handelImageOnChange(e);
                  }}
                  id="formFile"
                />
              </div>
            </div>

            {/* language & tag */}
            <div className="flex gap-5 mt-5">
              <div className="w-full">
                <div className="relative mb-5" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputText"
                    placeholder="Language"
                    value={languages}
                    name="languages"
                    onChange={(e) => {
                      languageOnChange(e);
                    }}
                  />
                  <label
                    for="exampleFormControlInputText"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Language
                  </label>
                </div>
              </div>
              <div className="w-full">
                <select
                  value={tag_ids}
                  data-te-select-init
                  multiple
                  name="tag_ids"
                  onChange={(e) => {
                    tagOnChange(e);
                  }}
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </select>
                <label data-te-select-label-ref>Tag</label>
              </div>
            </div>
            {/* link and university */}
            <div className="flex gap-5">
              <div className="w-full">
                <div className="relative mb-5" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputText"
                    placeholder="University"
                    name="university"
                    value={university_id}
                    onChange={(e) => {
                      handelUniversityOnChange(e);
                    }}
                  />
                  <label
                    for="exampleFormControlInputText"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    University
                  </label>
                </div>
              </div>
              <div className="w-full">
                <div className="relative mb-5" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputText"
                    placeholder="link"
                    value={link}
                    name="link"
                    onChange={(e) => {
                      handelLinkOnChange(e);
                    }}
                  />
                  <label
                    for="exampleFormControlInputText"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Link
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white">
              Update
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NoticeCreate;
