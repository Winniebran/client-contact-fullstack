import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, form, label, article, aside, figure, figcaption, footer, header, nav, section, button, textarea, option, input, select,ul,li {
        margin: 0;
        padding: 0;
        font-size: 100%;
        color: var(--color-grey-3);
        vertical-align: baseline;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
        background: none;
        font-family: var(--font-family-Nunito);
    }
    
    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    article, aside, details, figcaption, figure, 
    footer, header, nav, section {
        display: block;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    ul,li {
        list-style: none;
    }

    input, select{
        outline: none;
        background: transparent;
    }


    button{
        cursor: pointer;
        display: inline-flex;
	    align-items: center;
	    justify-content: center;
        border: none;
        background: transparent;
        transition: 0.3s;
    }

    :root {
        --font-family-Flamenco: 'Flamenco', cursive;
        --font-family-Nunito: 'Nunito', sans-serif;

        --color-primary-1: #7466a3;
        --color-primary-focus: #e1d7f9;
        --color-secondary-1: #fecc45;
        --color-secondary-2: #febeb2;
        --color-grey-3: #1b0006;
        --color-grey-2: #d0cedd;
        --color-grey-1: #fcfbfb;
        --color-grey-0: #ffffff;
        --color-transparecy-1: rgba(0, 0, 0, 0.25);
        --color-transparecy-2: rgba(180, 198, 232, 0.3);

        /* Size Elements */
        --height-1: 100%;
	    --height-2: 90%;
        --height-3: 80%;
        --height-4: 70%;
        --height-5: 60%;
        --height-6: 50%;
        --height-7: 40%;
        --height-8: 30%;
        --height-9: 20%;
        --height-10: 10%;


        --width-1: 100%;
	    --width-2: 90%;
        --width-3: 80%;
        --width-4: 70%;
        --width-5: 60%;
        --width-6: 50%;
        --width-7: 40%;
        --width-8: 30%;
        --width-9: 20%;
        --width-10: 10%;


        /* Text Sizes */
        --title-1: 60px;
        --title-2: 55px;
        --title-3: 50px;
        --title-4: 45px;
        --title-5: 40px;
        --title-6: 35px;
        --title-7: 30px;
        --title-8: 25px;
        --title-9: 20px;
        --title-10: 18px;
        
        --paragraph-1: 16px;
        --paragraph-2: 14px;

        --text-1: 12px;
        --text-1: 10px;

        /* Text Weight */
        --font-weigth-black: 900;
        --font-weigth-extrabold: 800;
        --font-weigth-bold: 700;
        --font-weigth-semibold: 600;
        --font-weight-medium: 500;
        --font-weight-regular: 400;
        --font-weight-ligth: 300;
        --font-weight-extraligth:200;

        /* Margins */
        --gap-1: 30px;
        --gap-2: 28px;
        --gap-3: 24px;
        --gap-4: 20px;
        --gap-5: 16px;
        --gap-6: 10px;

        /* Border Radius */
        --radius-1: 4px;
        --radius-2: 6px;
        --radius-3: 8px;
        --radius-4: 10px;
        --radius-5: 12px;
        --radius-6: 50px;
    }

    /* SCROLL BAR  */
    ::-webkit-scrollbar {
        width: var(--radius-1);
        height: var(--radius-1);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-primary-darker);
        border-radius: var(--radius-1);
    }

    ::-webkit-scrollbar-track {
        background-color: var(--color-transparecy);
        border-radius: var(--radius-1);
    }
`;
