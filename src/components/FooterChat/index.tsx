import { Container } from './styles'
import {BiMicrophone} from 'react-icons/bi'
import {CgSmileMouthOpen} from 'react-icons/cg'
import {FiPaperclip} from 'react-icons/fi'

export function FooterChat() {

    return (
        <Container>
            <button><CgSmileMouthOpen/></button>
            <button><FiPaperclip/></button>
            <input placeholder="Digite uma mensagem"/>
            <button><BiMicrophone/></button>
       
        </Container>
    )
}