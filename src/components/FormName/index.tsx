import { useState, FormEvent } from 'react';
import { Container } from './styles'
import { gql, useMutation } from '@apollo/client';

const ADD_NAME = gql`
  mutation AddName ($name: String!) {
    insert_names_one(object: {name: $name})
    {id}
  }
`;
export default function FormName() {
  const [name, setName] = useState('');
  const [addName] = useMutation(ADD_NAME);

  function handleSubmit(event :FormEvent) {
    event.preventDefault();
    addName({variables: {name}});
    setName('')
  }

  return (
    <Container onSubmit={handleSubmit} >
     <label>If you think your name is funny, send it:</label>
     <div>
       <input name="name" type="name" value={name} placeholder="your name here" onChange={e=>setName(e.target.value)}/>
       <button type="submit">send</button>
     </div>
    </Container>
  );
}
