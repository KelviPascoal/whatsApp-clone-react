import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --header: #ededed;
    --divise-header: #dadada;
    --chat-area: #ffffff;
    --chat-card-selected: #ebebeb;
    --background-chat-area: #e5ddd5;
    --filter-box: #e5ddd5;
    --filter-input: #ffffff;
    --divise-chat:  #f2f2f2;
    --buttons: #919191;
    --footer-chat: #f0f0f0;
    --footer-input: #ffffff;


    --header-dark: #2a2f32;
    --divise-header-dark: #ffffff18;
    --chat-area-dark: #131c21;
    --chat-card-selected-dark: #323739;
    --background-chat-area-dark: #0d1418;
    --filter-box-dark: #131c21;
    --filter-input-dark: #323739;
    --divise-chat:  #ffffff18;
    --buttons-dark: #b1b3b5;
    --footer-chat-dark: #1e2428;
    --footer-input-dark: #33383b;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
}
body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
}
body, input, button, strong, p  {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #080808;
}
button {
    cursor: pointer;
}
`;