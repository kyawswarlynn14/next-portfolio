"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import EarthCanvas from "./canvas/Earth";
import { slideIn } from "../utils/motion";
import { CreateOneMail } from "@/config/services";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        company_name: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        await CreateOneMail(values);
        setIsLoading(false);
        setValues({
            name: "",
            email: "",
            phone: "",
            company_name: "",
            message: ""
        });
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred while sending the mail: " + error.message);
      }
    };

  return (
    <div
      id="contactme"
      className={`lg:mt-12 flex lg:flex-row flex-col-reverse gap-4 justify-between pt-16`}
    >
      <div
        className='flex-[0.75] shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700  p-8 h-fit w-full md:w-[600px] lg:w-full md:mx-auto lg:mx-0 rounded-2xl'
      >
        <h3 className="subTitle pt-0">Contacts Me</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col items-center gap-4'
        >
            <div className="w-full flex flex-col gap-4">
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className='contact1Input'
                />
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className='contact1Input'
                />
                <input
                    type='text'
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="What's your phone number?"
                    className='contact1Input'
                />
                <input
                    type='text'
                    name='company_name'
                    value={values.company_name}
                    onChange={handleChange}
                    placeholder="What's your company's name?"
                    className='contact1Input'
                />
                <textarea
                    rows={5}
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    placeholder='What you want to say?'
                    className='contact1Input'
                />
            </div>

            <button
                type='submit'
                className='py-2 rounded-lg font-semibold text-white cursor-pointer px-12 bg-cyan-500 hover:opacity-80 transition-all duration-300'
            >
                {isLoading ? "Sending..." : "Send"}
            </button>
        </form>
      </div>

      <div
        className='lg:flex-1 lg:h-auto md:h-[500px] h-[350px]'
      >
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;