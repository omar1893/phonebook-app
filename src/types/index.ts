export interface ContactFormProps {
    data: Contact,
    setters: any,
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    handleEdit?: (contact: Contact) => void
    editing: boolean
}

export interface ContactListProps {
    handleDelete: (id: number | undefined) => void,
    handleEdit: (contact: Contact) => void
}

export interface Contact {
    id?: number | undefined;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }