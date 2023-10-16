"use client";
import {useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CreateOneSocial } from "@/config/services";
import { useRouter } from "next/navigation";

function CreateSocial() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        name: "",
        link: ""
    });

    const handleChange = (e) => {
          const { name, value } = e.target;
          setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await CreateOneSocial(values);
        setIsLoading(false);
        router.push('/admin/home/socials')
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred while creating the item: " + error.message);
      }
    };

  return (
    <div className='adminCreatePage'>
      {
        isLoading ? (
          <div className="text-2xl tracking-widest font-bold">Loading...</div>
        ) : (
          <form onSubmit={handleSubmit}
          className=" bg-slate-800 mx-2 text-white shadow-md rounded-lg p-6 space-y-4 w-full md:w-[60%] lg:w-[50%] ">

          <h2 className="text-3xl font-semibold text-center text-pink-400 tracking-widest">
            Create A Social
          </h2>

          <div className="flex flex-col justify-between gap-4">
            <input
              required
              type="text"
              placeholder="Account Name"
              className="input"
              name="name"
              value={values.name}
              onChange={handleChange}
            />

            <input
              required
              type="text"
              placeholder="Account Link"
              className="input"
              name="link"
              value={values.link}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-around">
            <button type="button" onClick={() => router.back()} className="actionButton">
                <IoMdArrowRoundBack className="mr-2" /> Back
            </button>
            <button
              type="submit"
              className="actionButton"
            >
              Submit
            </button>
          </div>
          </form>
        )
      }
    </div>
  )
}

export default CreateSocial;