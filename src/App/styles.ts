import styled from 'styled-components'

export const AppContainer = styled.div`
   max-width: 350px;
   padding: 1rem;
   margin:auto;
   height: 100vh;
   display: flex;
   flex-direction: column;
   
   main {
      overflow: hidden;
   }
   @media (min-width: 500px){
      padding-top: 10rem;
   }

`