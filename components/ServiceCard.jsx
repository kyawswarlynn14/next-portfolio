import React, { useReducer } from 'react'
import { Button } from "./ui/button";

function reducer(state, action) {
    switch (action.type) {
      case "TOGGLE_READ_MORE":
        return {
          ...state,
          [action.serviceName]: !state[action.serviceName],
        };
      default:
        return state;
    }
}

function ServiceCard({service}) {
    const initialState = {
        webDevReadMore: false,
        webDesReadMore: false,
        appDevReadMore: false,
    };
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const toggleReadMore = (serviceName) => {
        dispatch({ type: "TOGGLE_READ_MORE", serviceName });
    };

  return (
    <div
        className="w-full md:w-[22rem] h-fit mx-auto flex flex-col text-center place-items-center p-2 rounded-xl shadow-2xl dark:border border-white relative"
        key={service.title}
    >
        <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 absolute top-0 rounded-t-xl"
        />

        <h3 className="text-lg font-medium py-2 mt-48 ">{service.title}</h3>
        <p
            className={`${
            state[service.serviceName] ? "h-auto " : "h-32 overflow-hidden"
            } text-[#fdeed4] text-base text-center px-2`}
        >
            {service.description}
        </p>

        <Button
            className=" my-2"
            onClick={() => toggleReadMore(service.serviceName)}
        >
            {state[service.serviceName] ? (
            <span>Read Less</span>
            ) : (
            <span>Read More</span>
            )}
        </Button>
    </div>
  )
}

export default ServiceCard