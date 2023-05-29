import {Contact, ResponseContact} from "../../models/chat";

export const contactConverter = (responseContact: ResponseContact): Contact =>{
    const tel = '+' + parseInt(responseContact.id)
    return{
        ...responseContact,
        tel
    }
}
