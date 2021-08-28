import { CardChat } from "../../../components/CardChat"
import { FilterArea } from "../../../components/FilterArea"
import { Header } from "../../../components/Header"
import { Container } from "./styles"

export function ChatList() {
    const avatarPhoto = "https://avatars.githubusercontent.com/u/61250054?s=400&u=71bf8dcf5beac27f1580846566ceff77d72082e3&v=4";

    const contacts = [
        {
            id: 1,
            profilePhoto: "https://avatars.githubusercontent.com/u/61211253?v=4",
            name: "Erick gay",
            lastMessage: "asdasd asdasdasd asdasdasd asdasd ",
            lastMessageHour: "12:20",
        },
        {
            id: 2,
            profilePhoto: "",
            name: "Patrick estrela",
            lastMessage: "açlsdkçlaskdç asçdkasdçksa asçdkasdk ",
            lastMessageHour: "11:55",
        }
    ];

    return (
        <Container>
            <Header avatarPhoto={avatarPhoto} status={true} newChat={true} options={true} />
            <FilterArea />
            <CardChat contacts={contacts} />
        </Container>)

}