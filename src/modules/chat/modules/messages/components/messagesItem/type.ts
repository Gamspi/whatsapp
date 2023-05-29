import {Message} from "../../../../models/chat";

export type StyledProps = {
    isMain?: boolean
}

export type Props = {
    item: Message,
} & StyledProps
