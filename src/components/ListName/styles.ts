import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;

    ul {
        list-style: none;
    }
`
export const Shadow = styled.div`
    background: linear-gradient(transparent 50%, var(--gray-400) );
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
`