import styled from 'styled-components'

interface ContainerProps {
    "data-testid": string;
}

export const Container = styled.div<ContainerProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-400);
    opacity: .5;
    color: var(--white);

    svg{
        animation: spin 1s infinite linear;
        font-size:5rem;
        z-index: 10;
    }
`