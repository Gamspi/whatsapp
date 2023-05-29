import React from 'react';
import {useController} from "./controller";
import ContactsItem from "../../components/contactsItem/ContactsItem";
import {StyledContactsLayout} from "./sryled";

const ContactsLayout = () => {
   const {contacts} = useController()
    return (
        <StyledContactsLayout.Container>
            {contacts.map(contact => (
                <ContactsItem item={contact} key={contact.id}/>
            ))}
        </StyledContactsLayout.Container>
    );
};

export default ContactsLayout;
