import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ContactList from "./ContactList";

const mockStore = configureStore([]);

describe("ContactList component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      phonebook: {
        contacts: [
          { id: 1, firstName: "John", lastName: "Doe", phoneNumber: "123456789" },
          { id: 2, firstName: "Jane", lastName: "Doe", phoneNumber: "987654321" },
        ],
      },
    });
  });

  it("should render the contact list", () => {
    render(
      <Provider store={store}>
        <ContactList handleEdit={() => {}} handleDelete={() => {}} />
      </Provider>
    );
    const contactList = screen.getByRole("list");
    expect(contactList).toBeInTheDocument();
  });

  it("should render the contact information", () => {
    render(
      <Provider store={store}>
        <ContactList handleEdit={() => {}} handleDelete={() => {}} />
      </Provider>
    );
    const contacts = screen.getAllByRole("listitem");
    expect(contacts).toHaveLength(2);

    const firstContact = screen.getByText("John Doe - 123456789");
    const secondContact = screen.getByText("Jane Doe - 987654321");

    expect(firstContact).toBeInTheDocument();
    expect(secondContact).toBeInTheDocument();
  });

  it("should call the handleEdit function when clicking the Edit button", () => {
    const handleEditMock = jest.fn();
    render(
      <Provider store={store}>
        <ContactList handleEdit={handleEditMock} handleDelete={() => {}} />
      </Provider>
    );

    const editButton = screen.getAllByText("Edit")[0];
    userEvent.click(editButton);

    expect(handleEditMock).toHaveBeenCalledTimes(1);
    expect(handleEditMock).toHaveBeenCalledWith({ id: 1, firstName: "John", lastName: "Doe", phoneNumber: "123456789" });
  });

  it("should call the handleDelete function when clicking the Delete button", () => {
    const handleDeleteMock = jest.fn();
    render(
      <Provider store={store}>
        <ContactList handleEdit={() => {}} handleDelete={handleDeleteMock} />
      </Provider>
    );

    const deleteButton = screen.getAllByText("Delete")[0];
    userEvent.click(deleteButton);

    expect(handleDeleteMock).toHaveBeenCalledTimes(1);
    expect(handleDeleteMock).toHaveBeenCalledWith(1);
  });
});