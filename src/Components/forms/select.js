import styled from 'styled-components';

const Select = styled.select`
    border: 1px solid var(--grey);
    color: var(--black);
    background: var(--white);
    outline: none;
    border: 1px solid var(--accentColor);
    padding-inline: 1rem;
    padding-block: .5rem;
    border-radius: 1rem;
    font: var(--body2-regular);
    flex: 1;
    max-width: 250px;
    @media (max-width: 600px) {
        &{
            width: 100%;
            max-width: 100%;
        }
    
    }
`;

export default Select;

