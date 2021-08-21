import styled from "styled-components";

interface IAvatarProps {
    photo?: string;
}

export const Container = styled.div<IAvatarProps>`
    width: 40px;
    min-height: 40px;
    min-width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;

    }
`;