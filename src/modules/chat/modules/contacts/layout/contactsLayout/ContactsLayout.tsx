import React from 'react';
import {useController} from "./controller";
import ContactsItem from "../../components/contactsItem/ContactsItem";
import {StyledContactsLayout} from "./sryled";
import ContactAddForm from "../../components/contactAddForm/ContactAddForm";

const ContactsLayout = () => {
    const{
        contacts,
        isShowAddForm,
        setIsShowAddForm,
        showAddFormHandler
    } = useController()
    return (
        <StyledContactsLayout.Container>
            <StyledContactsLayout.List>
                {contacts.map(contact => (
                    <ContactsItem item={contact} key={contact.id}/>
                ))}
            </StyledContactsLayout.List>
            <StyledContactsLayout.AddButton onClick={showAddFormHandler}>
                Добавить контакт
            </StyledContactsLayout.AddButton>
            <ContactAddForm isShow={isShowAddForm} setIsShow={setIsShowAddForm}/>
        </StyledContactsLayout.Container>
    );
};

export default ContactsLayout;
