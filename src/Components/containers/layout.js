import styled from 'styled-components'

const LayoutStyled = styled.div`
    padding: 2rem;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

function Layout({children}) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
