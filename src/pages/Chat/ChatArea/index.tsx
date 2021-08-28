import { Header } from "../../../components/Header"
import { Container } from "./styles"
import { ConversationArea } from "./ConversationArea"
import { FooterChat } from "../../../components/FooterChat"


export function ChatArea() {

    return <Container>
        <Header  search={true} options={true}/>
        <ConversationArea/>
        <FooterChat/>
        </Container>
}