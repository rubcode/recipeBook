import {createGlobalStyle} from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    :root{
        --bg: #fff;
        --buttonBg: #202A3C;
        --primaryColor: #80E4E9;
        --lightPrimaryColor: #AEF6F6;
        --accentColor : #ffb0b6;
        --white : #ffffef;
        --colorFont: #ffffef;
        --containerColor: #fbf3f1;
        --grey: #fafafa ;
        --greyDarken: #eeeeee ;
        --black: #111111;
        --bodyRegular: 400 1rem Roboto;
        --bodyRegularSemiBold: 500 1.2rem Roboto;
        --titleFont: 2rem Roboto;

    }
    [data-theme="dark"] {
        --bg: #E9F5FF;
        --buttonBg: #ffffef;
        --colorFont: #111111;
    }
    body {
        background-image: url("assets/bg-wood.jpg");
        color: var(--black);
        font: var(--bodyRegular);
        margin: 0;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .title{
        margin: 0;
        font-size: 2.5rem;
        font-family: Roboto;
        color: var(--white);
        letter-spacing: 2px;
        padding: 0.5rem;
        text-align: center;
        border-radius: 50px;
        background-color: var(--accentColor);
        display: flex;
        align-items: center;
        justify-content: center;
       width: 550px;
    }
    .logo{
        width: 180px;
    }
`



export default GlobalStylesStyled
