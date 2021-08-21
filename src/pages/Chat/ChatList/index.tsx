import { CardChat } from "../../../components/CardChat"
import { FilterArea } from "../../../components/FilterArea"
import { Header } from "../../../components/Header"
import { Container } from "./styles"

export function ChatList() {
    const avatarPhoto = "https://img.quizur.com/f/img5fbd1bcacac304.38130669.jpeg?lastEdited=1606228951"
    return (
        <Container>
            <Header avatarPhoto={avatarPhoto} status={true} newChat={true} options={true}/>
            <FilterArea/>
            <CardChat/>
        </Container>)

}