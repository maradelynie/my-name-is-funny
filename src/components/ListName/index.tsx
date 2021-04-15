import { useEffect, useState } from 'react';
import { Container, Shadow } from './styles'
import { useQuery, gql } from '@apollo/client'

interface Names {
  name: string;
  id: string;
}

const NAMES = gql`
  {
    names(order_by: {created_at: desc}) {
      name
      id
    }
  }
`
const NAMES_SUBS = gql`
  subscription OnNameAdded {
    names (order_by: {created_at: desc}){
      name
      id
    }
  }
`

export default function ListName() {

  const { loading, error, subscribeToMore } = useQuery(NAMES);
  const [namesList, setNamesList] = useState<Names[]>([])

  useEffect(() => {

    if(NAMES) subsciption()

  }, [])

  function subsciption () {
    subscribeToMore({
      document: NAMES_SUBS,
      updateQuery: (prev, { subscriptionData }) => {

        if (!subscriptionData.data) return prev;
        return setNamesList(subscriptionData.data.names)
      }
    })
  }

  if(loading) return <span>Loading...</span>
  if(error) return <span> Unavaliable Server, sorry :(</span>

  return (
      <Container>
        <ul>
          {namesList?.map((item:Names)=>{
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
        <Shadow />
      </Container>
  );
}