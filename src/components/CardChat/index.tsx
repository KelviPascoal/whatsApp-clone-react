import { Avatar } from "../Avatar";
import { Container, ContainerUlChatr, ChatInfo } from "./styles";

export function CardChat() {

    return (
        <Container>
            <ContainerUlChatr>
                <div>
                    <Avatar />
                </div>

                <ChatInfo>
                    <div className="name-last-message">
                        <strong>Erick gay</strong>
                        <p> aaaaaaaaa </p>
                    </div>
                    <div  className="hour">
                        <span> 13:22</span>
                    </div>
                </ChatInfo>




            </ContainerUlChatr>

        </Container>
    )
}