import { useState, FormEvent } from 'react';
import { Container } from './styles'

export default function FormName() {
  const [name, setName] = useState('');

  function handleSubmit(event :FormEvent) {
    event.preventDefault()

    console.log(name)
  }

  return (
    <Container onSubmit={handleSubmit} >
     <label>If you think your name is funny, send it:</label>
     <div>
       <input name="name" type="name" placeholder="your name here" onChange={e=>setName(e.target.value)}/>
       <button type="submit">send</button>
     </div>
    </Container>
  );
}
