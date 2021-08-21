import { AiOutlineSearch } from "react-icons/ai";
import { Container, Content } from "./styles";

export function FilterArea() {

    return (
        <Container>
            <Content>
                <button><AiOutlineSearch/></button>
                <input placeholder="Pesquisar ou começar uma nova conversa"/>
            </Content>
        </Container>
    )
}