import styled from 'styled-components'

const NavStyled = styled.nav`
    width: 100%;
    padding: 1rem;
    height: 100px;
    background-color: #801515;

    img{
        width: 80px;
    }
`

function Nav() {
    return (
        <NavStyled>
            <img src="/assets/logo.png" alt="Logo" />
        </NavStyled>
    )
}

export default Nav
