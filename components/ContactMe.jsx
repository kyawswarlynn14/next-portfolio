"use client";

import { CreateOneMail } from '@/config/services';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function ContactMe() {
    const router = useRouter();
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
        // router.push('/');
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred while sending the mail: " + error.message);
      }
    };

    return (
        <div id='contactme' className="w-full md:container mx-auto mt-16">
            <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto px-4 md:px-16 py-4 rounded-xl shadow-[0px_2px_10px_5px_rgba(0,0,0,0.2)] dark:shadow-slate-700">
                <h1 className='subTitle mt-0 mb-6'>Contacts Me</h1>

                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
                    <div className="flex flex-col gap-4 w-full">
                        <input
                            className="contactInput"
                            name="name"
                            type="text"
                            placeholder="NAME"
                            value={values.name}
                            onChange={handleChange}
                        />

                        <input
                            className="contactInput"
                            name="email"
                            type="email"
                            placeholder="EMAIL"
                            value={values.email}
                            onChange={handleChange}
                        />

                        <input
                            className="contactInput"
                            name="phone"
                            type="text"
                            placeholder="MOBILE NO"
                            value={values.phone}
                            onChange={handleChange}
                        />

                        <input
                            className="contactInput"
                            name="company_name"
                            type="text"
                            placeholder="COMPANY NAME"
                            value={values.company_name}
                            onChange={handleChange}
                        />

                        <textarea
                            className="contactInput"
                            name="message"
                            placeholder="MESSAGE"
                            rows="3"
                            value={values.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button className=" normalButton cursor-pointer mb-4 px-8" type="submit">
                        {isLoading ? 'SENDING...' : 'SEND'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
