import { useEffect, useState } from 'react';
import { Container, Shadow } from './styles'
import { useQuery, gql } from '@apollo/client'
import { FaCircleNotch } from 'react-icons/fa'

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

  const { error, subscribeToMore } = useQuery(NAMES);
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

  if(error) return <span> Unavaliable Server, sorry :(</span>

  return (
      <Container>
        {!namesList.length?<div className="loading"><FaCircleNotch /></div>:
          <ul>
            {namesList.map((item:Names)=>{
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        }
        <Shadow />
      </Container>
  );
}