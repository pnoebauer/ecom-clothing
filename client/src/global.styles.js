import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Mukta+Mahee:200,400');
    
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 40px;
    
        @media screen and (max-width: 800px) {
            padding: 10px;
            font-size: 14px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;
