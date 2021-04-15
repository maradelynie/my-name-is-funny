import { GlobalStyle } from "../styles/global"
import { Container } from './styles'

import FormName from '../components/FormName'
import ListName from '../components/ListName'

function App() {
  return (
    <div className="app_Container">
      <GlobalStyle/>
      <Container><h1>My name is Funny</h1></Container>
      <main>
        <FormName />
        <ListName />
      </main>
    </div>
  );
}

export default App;
