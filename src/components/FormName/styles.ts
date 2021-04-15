import styled from 'styled-components'

export const Container = styled.form`

    color: var(--gray-900);
    background-color: var(--white);
    border-radius: .7rem;
    width: 100%;
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    text-align: center;
    line-height: 1.3rem;
    z-index: 10;
    
    div {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }
    input {
        background-color: var(--gray-100);
        border: none;
        border-radius: .3rem;
        width: 100%;
        padding: .3rem .5rem;
    }
    button {
        padding: 0 .8rem;
        background-color: var(--magenta-500);
        color: var(--white);
        border: none;
        border-radius: .3rem;
        transition: filter .2s;
    }
    button:hover {
        filter: brightness(.8)
    }
    button:active {
        filter: brightness(1)
    }
`