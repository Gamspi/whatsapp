import {Message} from "../../../../models/chat";

export type StyledProps = {
    isMain?: boolean,
    isActive?: boolean
}

export type Props = {
    item: Message,
    isActive: boolean
}
