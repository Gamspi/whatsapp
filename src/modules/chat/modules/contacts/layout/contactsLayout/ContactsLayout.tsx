import React from 'react';
import {useController} from "./controller";
import ContactsItem from "../../components/contactsItem/ContactsItem";
import {StyledContactsLayout} from "./styled";
import ContactAddForm from "../../components/contactAddForm/ContactAddForm";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ContactsLayout = () => {
    const{
        contacts,
        isShowAddForm,
        chosenContact,
        setIsShowAddForm,
        showAddFormHandler
    } = useController()
    return (
        <StyledContactsLayout.Container>
            <StyledContactsLayout.List>
                <TransitionGroup>
                    {contacts.map(contact => (
                        <CSSTransition timeout={1000}>
                            <ContactsItem item={contact} key={contact.id} isActive={contact.id === chosenContact?.id}/>
                        </CSSTransition>

                    ))}
                </TransitionGroup>
            </StyledContactsLayout.List>
            <StyledContactsLayout.AddButton onClick={showAddFormHandler}>
                Добавить контакт
            </StyledContactsLayout.AddButton>
            <ContactAddForm isShow={isShowAddForm} setIsShow={setIsShowAddForm}/>
        </StyledContactsLayout.Container>
    );
};

export default ContactsLayout;
