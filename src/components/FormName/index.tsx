import { useState, FormEvent } from 'react';
import { Container } from './styles'
import { gql, useMutation } from '@apollo/client';
import Loading from '../Loading';

const ADD_NAME = gql`
  mutation AddName ($name: String!) {
    insert_names_one(object: {name: $name})
    {id}
  }
`;
export default function FormName() {
  const [name, setName] = useState('');
  const [addName,{loading, error}] = useMutation(ADD_NAME);

  async function handleSubmit(event :FormEvent) {
    event.preventDefault();
    if(name){
      await addName({variables: {name}});
      setName('')
    }
  }

  return (
    <Container onSubmit={handleSubmit} >
      <Loading status={loading}/>
      {error?<span>Someting went wrong, sorry ;(</span>:
        <>
          <label>If you think your name is funny, send it:</label>
          <div>
            <input 
              name="name" 
              type="name" 
              value={name} 
              required 
              placeholder="your name here" 
              onChange={e=>setName(e.target.value)}
            />
            <button type="submit">send</button>
          </div>
        </>
      }
    </Container>
  );
}
