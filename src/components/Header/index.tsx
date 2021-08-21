import { Avatar } from "../Avatar";
import { Container } from "./styles";
import { MdChat } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RiTimeLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'

interface IHeaderProps {
    avatarPhoto?: string;
    status?: boolean;
    newChat?: boolean;
    search?: boolean;
    options?: boolean;
}

export function Header({ avatarPhoto, newChat, search, status, options }: IHeaderProps) {

    return (
        <Container>
            <Avatar photo={avatarPhoto} />
            <div>
                {status && <button><RiTimeLine/></button>}
                {newChat && <button><MdChat/></button>}

                {search && <button><AiOutlineSearch/></button>}

                {options && <button><BsThreeDotsVertical /></button>}

            </div>
        </Container>
    )
}