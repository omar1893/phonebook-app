import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ContactListProps } from "../types";
import { motion } from "framer-motion";

const ContactList = ({ handleEdit, handleDelete }: ContactListProps) => {
  const contacts = useSelector((state: RootState) => state.phonebook.contacts);
  

  return (
    <>
      <ul className="flex flex-col justify-center items-center w-full text-sm font-medium text-gray-900 dark:text-white mt-5">
        {contacts.map((contact) => (
          <motion.li
            className="w-fit px-4 py-2 mt-3 border-b border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-700"
            key={contact.id}
            animate={{ x: -10, transitionEnd: {x: 0} }}
          >
            <div>
              {contact.firstName} {contact.lastName} - {contact.phoneNumber}
            </div>
            <div className="mt-5">
              <button
                onClick={() => handleEdit(contact)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Edit
              </button>{" "}
              <button
                type="button"
                onClick={() => handleDelete(contact?.id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete
              </button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
