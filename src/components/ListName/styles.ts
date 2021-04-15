import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    position: relative;
    display:flex;
    justify-content: center;
    
    ul {
        list-style: none;
        text-overflow:ellipsis; 
        white-space:nowrap; 
        overflow:hidden
    }
`
export const Shadow = styled.div`
    background: linear-gradient(transparent, var(--gray-400) );
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
`