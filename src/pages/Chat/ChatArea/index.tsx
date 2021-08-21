import { Header } from "../../../components/Header"
import { Container } from "./styles"
import { ConversationArea } from "./ConversationArea"


export function ChatArea() {

    return <Container>
        <Header  search={true} options={true}/>
        <ConversationArea/>
        </Container>
}