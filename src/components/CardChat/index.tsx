import { useState } from "react";
import { Avatar } from "../Avatar";
import { Container, ContainerUlChatr, ChatInfo } from "./styles";

interface ICardChatProps {
    contacts: IContacts[];
}

interface IContacts {
    id: number;
    profilePhoto: string; 
    name: string;
    lastMessage: string; 
    lastMessageHour: string;
}

export function CardChat({contacts}:ICardChatProps) {

    return (
        <>
        {contacts.map((contact) => <Container key={contact.id}>
            <ContainerUlChatr>
                <div>
                    <Avatar photo={contact.profilePhoto}/>
                </div>

                <ChatInfo>
                    <div className="name-last-message">
                        <strong>{contact.name}</strong>
                        <p>{contact.lastMessage}</p>
                    </div>
                    <div className="hour">
                        <span>{contact.lastMessageHour}</span>
                    </div>
                </ChatInfo>




            </ContainerUlChatr>

        </Container>
        )}
        </>
    )
}