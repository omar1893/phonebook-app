import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm component", () => {
  test("should render the component correctly", () => {
    const data = { firstName: "", lastName: "", phoneNumber: "" };
    const setters = {
      setFirstName: jest.fn(),
      setLastName: jest.fn(),
      setPhoneNumber: jest.fn(),
    };
    const handleSubmit = jest.fn();
    const editing = false;

    const { container } = render(
      <ContactForm
        data={data}
        setters={setters}
        handleSubmit={handleSubmit}
        editing={editing}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should disable the button when the form is invalid", () => {
    const data = { firstName: "", lastName: "", phoneNumber: "" };
    const setters = {
      setFirstName: jest.fn(),
      setLastName: jest.fn(),
      setPhoneNumber: jest.fn(),
    };
    const handleSubmit = jest.fn();
    const editing = false;

    render(
      <ContactForm
        data={data}
        setters={setters}
        handleSubmit={handleSubmit}
        editing={editing}
      />
    );

    const submitButton = screen.getByRole("button", { name: "Add Contact" }) as HTMLButtonElement;

    expect(submitButton.disabled).toBeTruthy();
  });

  test("should enable the button when the form is valid", () => {
    const data = { firstName: "John", lastName: "Doe", phoneNumber: "1234567890" };
    const setters = {
      setFirstName: jest.fn(),
      setLastName: jest.fn(),
      setPhoneNumber: jest.fn(),
    };
    const handleSubmit = jest.fn();
    const editing = false;

    render(
      <ContactForm
        data={data}
        setters={setters}
        handleSubmit={handleSubmit}
        editing={editing}
      />
    );

    const submitButton = screen.getByRole("button", { name: "Add Contact" }) as HTMLButtonElement;

    expect(submitButton.disabled).toBeFalsy();
  });

  test("should call handleSubmit when the form is submitted", () => {
    const data = { firstName: "John", lastName: "Doe", phoneNumber: "1234567890" };
    const setters = {
      setFirstName: jest.fn(),
      setLastName: jest.fn(),
      setPhoneNumber: jest.fn(),
    };
    const handleSubmit = jest.fn();
    const editing = false;

    render(
      <ContactForm
        data={data}
        setters={setters}
        handleSubmit={handleSubmit}
        editing={editing}
      />
    );

    const submitButton = screen.getByRole("button", { name: "Add Contact" });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});