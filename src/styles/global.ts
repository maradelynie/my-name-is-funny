import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --gray-100: #E0E7E8;
        --gray-400: #93a8ac;
        --gray-900: #363636;
        --magenta-500: #BA274A;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3 ,h4 ,h5 ,h6 {
        font-weight: 600;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size:93.75%
        }
        @media (max-width: 720px){
            font-size:87.5%
        }
    }
    body{
        background-color:var(--gray-400);
        -webkit-font-smoothing: antialiased;
        color: white;
        text-align:center;
    }
    
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: .6;
        cursor: not-allowed;
    }

    @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
    
}
`