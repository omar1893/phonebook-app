import React, { useEffect, useState } from "react";
import { ContactFormProps } from "../types";
import { isInvalid } from "../utils/validation";
import { motion } from "framer-motion";

const ContactForm = ({
  data,
  setters,
  handleSubmit,
  editing,
}: ContactFormProps) => {
  const { firstName, lastName, phoneNumber } = data;
  const { setFirstName, setLastName, setPhoneNumber } = setters;
  const [isInvalidForm, setIsInvalidForm] = useState(true);

  useEffect(() => {
    setIsInvalidForm(isInvalid(firstName, lastName, phoneNumber));
  }, [firstName, lastName, phoneNumber]);

  const buttonVariants = {
    disabled: { opacity: 0.5, scale: 0.6 },
    enabled: { opacity: 1, scale: 1 },
  };

  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Name
          </label>
          <input
            type="text"
            id="base-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Last Name
          </label>
          <input
            type="text"
            id="base-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="base-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <motion.button
          type="submit"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          variants={buttonVariants}
          animate={isInvalidForm ? "disabled" : "enabled"}
          disabled={isInvalidForm}
        >
          {editing ? "Edit" : "Add Contact"}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
