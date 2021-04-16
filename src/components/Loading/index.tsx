import { FaCircleNotch } from 'react-icons/fa'
import { Container } from './styles'

interface LoadingProps {
  status: boolean;
}

export default function Loading({status} : LoadingProps ) {
  if(!status) return <></>
  return <Container data-testid="loading"><FaCircleNotch /></Container>
}
