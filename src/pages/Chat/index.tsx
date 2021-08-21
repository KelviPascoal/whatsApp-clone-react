import { ChatArea } from "./ChatArea"
import { ChatList } from "./ChatList"
import { Container } from "./styles"

export function ChatView() {
    return (
        <Container>
            <ChatList />
            <ChatArea />
        </Container>
    )
}
