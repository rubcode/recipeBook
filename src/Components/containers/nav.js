import styled from 'styled-components'

const NavStyled = styled.nav`
    width: 100%;
    padding: 1rem 2rem;
    height: 100px;
    background-color: #801515;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 80px;
    }
    a{
        color: white;
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    a:hover{
        color: var(--accentColor);
    }
`

function Nav() {
    return (
        <NavStyled>
            <img src="/assets/logo.png" alt="Logo" />
            <a href="/">Home</a>
        </NavStyled>
    )
}

export default Nav
