import styled from "styled-components";

export const Container = styled.div`
    background-color:  var(--filter-box);
    border-bottom:  var(--divise-chat) solid 1px;
    width: 100%;
    height: 48.9px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.form`
        background-color: var(--filter-input);
        width: 92%;
        height: 76%;
        padding: 0 32px 0 12px;
        border-radius: 40px;
    
        display: flex;
        align-items: center;
        justify-content: space-between;
    input {
        background-color: transparent;
        border: 0;
        width: 85%;
    }

    button {
        background-color: transparent;
        border: 0;
        color: #b1b3b5;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px ;
        padding-left: 4px;
    }
`;